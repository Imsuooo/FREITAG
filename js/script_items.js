//메뉴
$('.bar-box').click(()=>{
    $('#menu-blur').addClass('active');
    $('#menu').css("transform", "translateX(0)");
    $('body').addClass('menuActive');
})
$('.menu-bar-box').click(()=>{
    $('#menu-blur').removeClass('active');
    $('#menu').css("transform", "translateX(100%)");
    $('body').removeClass('menuActive');
    
})
//W<1260 메뉴
function W1260(){
    if($(window).width()<=1260){
        $('.min-bar-box').click(()=>{
            if($('.min-bar-inner').hasClass('menuActive')=== true){
                $('#menu').css("transform", "translateX(100%)");
                $('.min-bar-inner').removeClass('menuActive');
                $('#menu-blur').removeClass('active');
                $('body').removeClass('menuActive');

            }else{
                $('.min-bar-inner').addClass('menuActive');
                $('#menu').css("transform", "translateX(0)");
                $('#menu-blur').addClass('active');
                $('body').addClass('menuActive');
            }
        })
    }
    else{
        $('.min-bar-inner').removeClass('menuActive');
    }
}
setInterval(W1260, 20);


//itemlist 

$('.currnet').click(()=>{
    $('.item-list').slideToggle();
    if($('.currnet').hasClass('active')){
        $('.currnet').removeClass('active')
    }else{
        $('.currnet').addClass('active')
    }
})