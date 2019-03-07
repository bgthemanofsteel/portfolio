let number = 0;

$('.menu0').on('click', function(){
    $('.slide' + number).slideUp();
    $('.menu' + number).removeClass('current');
    $('.slide0').slideDown();
    $(".menu0").addClass('current');
    number =0;
})

$('.menu1').on('click', function(){
    $('.slide' + number).slideUp();
    $('.menu' + number).removeClass('current');
    $('.slide1').slideDown();
    $(".menu1").addClass('current');
    number = 1;
})

$('.menu2').on('click', function(){
    $('.slide' + number).slideUp();
    $('.menu' + number).removeClass('current');
    $('.slide2').slideDown();
    $(".menu2").addClass('current');
    number =2;
})

$('.menu3').on('click', function(){
    $('.slide' + number).slideUp();
    $('.menu' + number).removeClass('current');
    $('.slide3').slideDown();
    $(".menu3").addClass('current');
    number = 3;
})



$('.next').on('click', function(){
    $('.slide' + number).slideUp();
    $('.menu' + number).removeClass('current');
    $('.slide' + (number +1)).slideDown();
    $('.menu' + (number+1)).addClass('current');

    if (number === 3){
        $(".slide3").slideUp();
        $(".menu3").removeClass('current');
        $(".slide0").slideDown();
        $(".menu0").addClass('current');
        $("#next").css('transform', 'rotate(180deg)');

        number = -1;
    }

    number += 1;
})