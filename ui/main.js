console.log('Loaded!');

var jet = document.getElementById("jet");

var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    jet.style.marginLeft = marginLeft+'px';
}

jet.onclick = function(){
    var interval = setInterval(moveRight, 25);
};

/* Counter Code */
var button = document.getElementById("button");

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttprequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };

    request.open('GET', 'http://sandipsmoto.imad.hasura-app.io/counter', true);
    request.send(null);
};