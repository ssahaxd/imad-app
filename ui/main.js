console.log('Loaded!');

var jet = document.getElementById("jet");

var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    jet.style.marginLeft = marginLeft+'px';
}

jet.onclick = function(){
    var interval = setInterval(moveRight, 30);
};