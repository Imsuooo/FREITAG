//자동슬라이드
let visual = $('.visual');
let pagerbtn =$('.slide-dot>li')
let pause =$('.pause-btn')
let play =$('.play-btn')
let slideinterval;
let current = 0;

autoslide()
function autoslide(){
    slideinterval=setInterval(function(){
        let prev = visual.eq(current);
        let prevbtn = pagerbtn.find('.dot').eq(current);
        move(prev, 0, '-100%');
        visual.removeClass('active');
        prev.addClass('active');
        prevbtn.removeClass('active');
        current++;
        if(current==visual.size()){
            current=0;
        }
        let next = visual.eq(current);
        let nextbtn = pagerbtn.find('.dot').eq(current);
        move(next,'100%', 0);
        visual.removeClass('active');
        next.addClass('active');
        nextbtn.addClass('active');
        updateCurrentPageNum()
    },3500)
}

function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},1000)
}

function move1(i){
    if(current==i)return; 
    let currentE = visual.eq(current);
    let nextE = visual.eq(i)
    currentE.css('left',0).stop().animate({left:'-100%'},500);
    nextE.css('left','100%').stop().animate({left:0},500);
    current=i;
   }
   
   function move2(i){
       if(current==i)return; 
       let currentE = visual.eq(current);
       let nextE = visual.eq(i)
       currentE.css('left',0).stop().animate({left:'100%'},500);
       nextE.css('left','-100%').stop().animate({left:0},500);
       current=i;
   }
   
//pagerbtn
pagerbtn.click(function(){
    let tg= $(this);
    let i = tg.index();
    pagerbtn.find('.dot').removeClass('active');
    tg.find('.dot').addClass('active');
    let currentNum = i+1;
    $('.active-num').text(currentNum)
    clearInterval(slideinterval)
    autoslide()
    if(current>i){
        move2(i)
    }else{
        move1(i)
    }
    if($('.play-btn').hasClass('active')){
        clearInterval(slideinterval);
    }
})

pause.click(function(){
   $(this).removeClass('active')
   play.addClass('active')
   clearInterval(slideinterval)
})
play.click(function(){
    $(this).removeClass('active')
    pause.addClass('active')
    clearInterval(slideinterval)
    autoslide()
 })
//페이지 번호
pageNumber_init()
function pageNumber_init(){
    let totalpagenum =$('.visuals>li').length;
    $('.total-num').text(totalpagenum);
    $('.visuals>li').each(function(idx,node){
        $(node).attr('active-num', idx + 1)
    })
}

updateCurrentPageNum()
function updateCurrentPageNum(){
    let currentNum = $('.visual.active').attr('active-num');
    $('.active-num').text(currentNum)
}

//페이지 높이
imgsize()
function imgsize(){
    setInterval(function(){
        let height = $('.visual-02>img').height();
        let htmlWidth = $('html').width();
        if(htmlWidth>900){
            $('.visuals').css('height',height);
            $('.visual>img').css({height:'initial', width : '100%'})
            $('.visualimg>img').css({height:'100%', width : 'initial'})
        }else{
            $('.visuals').css('height','600px');
            $('.visual>img').css({height:'100%', width : 'initial'})
            $('.visualimg>img').css({height:'100%', width : 'initial'})
        }
    },100)
}

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

//이미지 크기
setInterval(thumbH, 20);
function thumbH(){
    const thumb1 = document.querySelector('.thumb1');
    const cotents1UlH =document.querySelector('.contents1>ul>li').offsetHeight;
    const thumb2 = document.querySelector('.thumb2');
    const cotents2UlH =document.querySelector('.contents2>ul>li').offsetHeight;
    thumb1.style.height=`${cotents1UlH}px`;
    thumb2.style.height=`${cotents2UlH}px`;
}

//텍스트 언더라인
setInterval(section1ScrollTop, 20);
function section1ScrollTop(){
    const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    const bag = document.querySelector('.bag').offsetTop - 300;
    const acc = document.querySelector('.acc').offsetTop - 300;
    const apparel = document.querySelector('.apparel').offsetTop - 300;
    const ederation = document.querySelector('.ederation').offsetTop - 300;

    if(scrollTop>bag){
        document.querySelector('.bagName').classList.add("fill", "underline");
        document.querySelector('.thumb1').animate(
            {transform:'translateX(0)'},1500
          );
    }else{
        document.querySelector('.bagName').classList.remove("fill", "underline");
        document.querySelector('.thumb1').animate(
            {transform:'translateX(-190%)'},2000
          );
    }
    if(scrollTop>acc){
        document.querySelector('.accName').classList.add("fill", "underline");
        document.querySelector('.thumb2').animate(
            {transform:'translateX(0)'},1500
          );
    }else{
        document.querySelector('.accName').classList.remove("fill", "underline");
        document.querySelector('.thumb2').animate(
            {transform:'translateX(-190%)'},2000
          );
    }
    if(scrollTop>apparel){
        document.querySelector('.apparelName').classList.add("fill", "underline");

    }else{
        document.querySelector('.apparelName').classList.remove("fill", "underline");
    }
    if(scrollTop>ederation){
        document.querySelector('.ederationName').classList.add("fill", "underline");
    }else{
        document.querySelector('.ederationName').classList.remove("fill", "underline");
    }
}

//슬라이드 버튼
//bag
function slideinterval2(){
    const rightBtnB = document.querySelector('.rightBtnB');
    const leftBtnB = document.querySelector('.leftBtnB');
    const items = document.querySelector('#bag-img-section>li').scrollWidth;
    const el =  document.querySelector('.contents1');

    smooth()
    function smooth(){
        el.style.scrollBehavior = 'smooth';
    }
    leftBtnB.onclick = function(){
        el.scrollLeft += items;
    };
    rightBtnB.onclick = function(){
        el.scrollLeft -= items;
    };
    //acc
    const rightBtnA = document.querySelector('.rightBtnA');
    const leftBtnA = document.querySelector('.leftBtnA');
    const items2 = document.querySelector('#acc-img-section>li').scrollWidth;
    const el2 =  document.querySelector('.contents2');

    smooth2()
    function smooth2(){
        el2.style.scrollBehavior = 'smooth';
    }
    leftBtnA.onclick = function(){
        el2.scrollLeft += items2;
    };
    rightBtnA.onclick = function(){
        el2.scrollLeft -= items2;
    };

}
setInterval(slideinterval2,500);


