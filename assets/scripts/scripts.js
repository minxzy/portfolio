/*=====menu overlay=====*/

$('.menu').click(function() {
// toggle active class to toggle
$(this).toggleClass('active');
// toggle active class to menu overlay
$('#overlay').toggleClass('open');
});

function preloading (imageArray) { 
    let n = imageArray.length; 
    for (let i = 0; i < n; i++) { 
    let img = new Image(); 
    img.src = imageArray[i]; 
    } 
    } 
    preloading([ 
    'refrigerator.jpeg', 
    '2.png', 
    '3.png' 
    ]);


$('.work_title p').on('mouseenter',function(){
    let add = $(this).find('a').attr('data-add');
    // no-repeat 100% / cover 에서 100%는 이미지의 위치로 오른쪽 끝을 기준으로 보여준다는 뜻이며 50%는 가로 세로 중앙 기준입니다.
    $('body').css({background: `url(${add}) no-repeat center 1% / cover`});    
});
$('.work_title').on('mouseleave',function(){
    $('body').css({background: `url() #0059ff`});
});