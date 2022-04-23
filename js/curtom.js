$(function(){
    // sticky menu
    // Sticky Menu

    $(window).scroll(function(){

        var scrolling = $(this).scrollTop();

        if( scrolling > 50){
            $('#navbar').addClass('nav__back');
        }
        else{
            $('#navbar').removeClass('nav__back');
        }
    })


});