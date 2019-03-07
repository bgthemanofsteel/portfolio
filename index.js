
$('.menu0').on('click', function(){
    $('.slide0').slideDown();
    $('.slide1').hide();
    $('.slide2').hide();
    $('.slide3').hide();
})

$('.menu1').on('click', function(){
    $('.slide0').hide();
    $('.slide2').hide();
    $('.slide3').hide();
    $('.slide1').slideDown();
})

$('.menu2').on('click', function(){
    $('.slide0').hide();
    $('.slide1').hide();
    $('.slide3').hide();
    $('.slide2').slideDown();
})

$('.menu3').on('click', function(){
    $('.slide0').hide();
    $('.slide1').hide();
    $('.slide2').hide();
    $('.slide3').slideDown();
})