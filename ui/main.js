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
var button = document.getElementById("countr-btn");

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("ctr-bdg");
                span.innerHTML = counter.toString();
        }
    };

    request.open('GET', 'http://sandipsmoto.imad.hasura-app.io/counter', true);
    request.send(null);
};

$(document).ready(function(){
	var formInputs = $('input[type="email"],input[type="password"]');
	formInputs.focus(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('p.formLabel').click(function(){
		 $(this).parent().children('.form-style').focus();
	});
});