$(document).ready(function() {


	$(".button").click(function() {

        if ($('.menu').css('display') == 'none') {
            $(".menu").show("slide", 200);
           
        } 

        else {
            $(".menu").hide("slide", 200);
           
        };

	});


});

