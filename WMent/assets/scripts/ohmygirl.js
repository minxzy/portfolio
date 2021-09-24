$(document).ready(function(){
    $('#btn1').click(function(){
        var offset = $('.header').offset();
        $('html').animate({scrollTop : offset.top}, 700);
    });
    $('#btn2').click(function(){
        var offset = $('#profile').offset();
        $('html').animate({scrollTop : offset.top}, 700);
    });
    $('#btn3').click(function(){
        var offset = $('#discography').offset();
        $('html').animate({scrollTop : offset.top}, 700);
    });
    $('#btn4').click(function(){
        var offset = $('.schedule').offset();
        $('html').animate({scrollTop : offset.top}, 700);
    });
    
});

$(function() {
    $('#background').YTPlayer();
     });