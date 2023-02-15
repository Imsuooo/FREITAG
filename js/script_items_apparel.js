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



//슬라이드 버튼
function slideinterval(){
    const rightBtn1 = document.querySelector('.rightBtn1');
    const leftBtn1 = document.querySelector('.leftBtn1');
    const items = document.querySelector('.apparel-section1>li').scrollWidth;
    const el =  document.querySelector('.content1');

    smooth()
    function smooth(){
        el.style.scrollBehavior = 'smooth';
    }
    leftBtn1.onclick = function(){
        el.scrollLeft += items;
    };
    rightBtn1.onclick = function(){
        el.scrollLeft -= items;
    };

    const rightBtn2 = document.querySelector('.rightBtn2');
    const leftBtn2 = document.querySelector('.leftBtn2');
    const items2 = document.querySelector('.apparel-section2>li').scrollWidth;
    const el2 =  document.querySelector('.content2');

    smooth2()
    function smooth2(){
        el2.style.scrollBehavior = 'smooth';
    }
    leftBtn2.onclick = function(){
        el2.scrollLeft += items2;
    };
    rightBtn2.onclick = function(){
        el2.scrollLeft -= items2;
    };
}
setInterval(slideinterval,500);