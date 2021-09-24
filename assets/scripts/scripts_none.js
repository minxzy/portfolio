/*=====menu overlay=====*/

$('.menu').click(function() {
// toggle active class to toggle
$(this).toggleClass('active');
// toggle active class to menu overlay
$('#overlay').toggleClass('open');
});