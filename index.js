let number = 0;

$('.menu0').on('click', function(){
    $('.slide0').slideDown();
    $('.slide1').hide();
    $('.slide2').hide();
    $('.slide3').hide();
    number =0;
})

$('.menu1').on('click', function(){
    $('.slide0').hide();
    $('.slide2').hide();
    $('.slide3').hide();
    $('.slide1').slideDown();
    number = 1;
})

$('.menu2').on('click', function(){
    $('.slide0').hide();
    $('.slide1').hide();
    $('.slide3').hide();
    $('.slide2').slideDown();
    number =2;
})

$('.menu3').on('click', function(){
    $('.slide0').hide();
    $('.slide1').hide();
    $('.slide2').hide();
    $('.slide3').slideDown();
    number = 3;
})



$('.next').on('click', function(){
    $('.slide' + number).animate({width:'toggle'},500).delay(2000);
    $('.menu' + number).removeClass('current');
    $('.slide' + (number +1)).animate({width:'toggle'},500).delay(2000);
    $('.menu' + (number+1)).removeClass('current');
})