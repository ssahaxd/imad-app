var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var pool = new Pool({
    user: 'sandipsmoto',
    host: 'db.imad.hasura-app.io',
    database: 'sandipsmoto',
    password: process.env.DB_PASSWORD,
});

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

/* Template function */
function creatTemplate(data){
  var htmlTemplate = `
    <!doctype html>
    <html lang="en">
        <head>
            <title>${data.title}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width initial-scale = 1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="page-home">
                <section>    
                    <h1>${data.heading}</h1>
                    <p>${data.date}</p>
                    <p>${data.author}</p>
                    <hr/>
                    ${data.content}
                </section>
            </div>
        </body>
    </html>
  `;
  return htmlTemplate;
}

/* Counter Code */
var counter = 0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


/* Article Handeling */
app.get('/:articleName', function(req, res){
    pool.query('SELECT * FROM articles WHERE title = $1', [req.params.articleName], function (err, result){
        if(err){
            res.status(500).send(err.toString());    
        }
        else{
            if(result.rows.length === 0){
                res.status(404).send('Article not found'); 
            }
            else{
                var data = result.rows[0];
                res.send(creatTemplate(data));
            }
        }
    });
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
