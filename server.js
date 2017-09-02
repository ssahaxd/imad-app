var express = require('express');
var morgan = require('morgan');
var path = require('path');

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


/* Article Objects */
var articles ={
    'article-one' :{
        title :'Article one',
        heading : 'Article one',
        date : '1 Sept 2017',
        author: 'Sandip Saha',
        content :`
            <p>
                <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        `
    },
    'article-two' :{
        title :'Article Two',
        heading : 'Article Two',
        date : '2 Sept 2017',
        author: 'Sandip Saha',
        content :`
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        `
    },
    'article-three' :{
        title :'Article Three',
        heading : 'Article Three',
        date : '3 Sept 2017',
        author: 'Sandip Saha',
        content :`
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        `
    },
    
};

/* Template function */
function creatTemplate(data){
  var htmlTemplate = `
    <!doctype html>
    <html lang="en">
        <head>
            <title>${data.title}}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width initial-scale = 1">
            <link rel="shortcut icon" href="#">
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

/* Article Handeling */
// Article one
app.get('/:articleName', function(req, res){
    
  res.send(creatTemplate(articles[req.param.articleName]));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
