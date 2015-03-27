$(function(){
    $('#lala_nav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#lala_nav').data('size') == 'big')
        {
            $('#lala_nav').data('size','small');
            $('#lala_nav').stop().animate({
                height:'40px'
            },600);
        }
    }
    else
    {
        if($('#lala_nav').data('size') == 'small')
        {
            $('#lala_nav').data('size','big');
            $('#lala_nav').stop().animate({
                height:'100px'
            },600);
        }  
    }
});