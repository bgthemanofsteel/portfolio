let number = 0;

$('.menu0').on('click', function(){
    $('.slide' + number).slideUp();
    $('.slide0').slideDown();
    number =0;
})

$('.menu1').on('click', function(){
    $('.slide' + number).slideUp();
    $('.slide1').slideDown();
    number = 1;
})

$('.menu2').on('click', function(){
    $('.slide' + number).slideUp();
    $('.slide2').slideDown();
    number =2;
})

$('.menu3').on('click', function(){
    $('.slide' + number).slideUp();
    $('.slide3').slideDown();
    number = 3;
})



$('.next').on('click', function(){
    $('.slide' + number).slideUp();
    $('.slide' + (number +1)).slideDown();

    if (number === 3){
        $(".slide3").slideUp();
        $(".slide0").slideDown();
        $("#next").css('transform', 'rotate(180deg)');

        number = -1;
    }

    number += 1;
})