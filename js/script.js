
visualImgRresize()
function visualImgRresize(){
    const windowWidth =  window.innerWidth;
    const reWidth =  windowWidth*0.05;
   // console.log(reWidth)
}

setInterval(thumbH, 20);
function thumbH(){
    const thumb1 = document.querySelector('.thumb1');
    const cotents1UlH =document.querySelector('.contents1>ul>li').offsetHeight;
    const thumb2 = document.querySelector('.thumb2');
    const cotents2UlH =document.querySelector('.contents2>ul>li').offsetHeight;
    thumb1.style.height=`${cotents1UlH}px`;
    thumb2.style.height=`${cotents2UlH}px`;
}
setInterval(section1ScrollTop, 20);
function section1ScrollTop(){
    const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    const bag = document.querySelector('.bag').offsetTop - 300;
    const acc = document.querySelector('.acc').offsetTop - 300;
    const apparel = document.querySelector('.apparel').offsetTop - 300;
    const ederation = document.querySelector('.ederation').offsetTop - 300;

    const mincontainer2 = document.querySelector('.apparelName2');
    const absoluteTop = window.pageYOffset + mincontainer2.getBoundingClientRect().top - 300;

    if(scrollTop>bag){
        document.querySelector('.bagName').classList.add("fill", "underline");
        document.querySelector('.thumb1').animate(
            {
              transform:
                'translateX(0)'
            },
            {
              duration: 1500,
              fill: 'forwards',
              easing: 'ease-in-out'
            }
          );
    }else{
        document.querySelector('.bagName').classList.remove("fill", "underline");
        document.querySelector('.thumb1').animate(
            {
              transform:
                'translateX(-170%)'
            },
            {
              duration: 2000,
              fill: 'forwards',
              easing: 'ease-in-out'
            }
          );
    }
    if(scrollTop>acc){
        document.querySelector('.accName').classList.add("fill", "underline");
        document.querySelector('.thumb2').animate(
          {
            transform:
              'translateX(0)'
          },
          {
            duration: 1500,
            fill: 'forwards',
            easing: 'ease-in-out'
          }
        );
    }else{
        document.querySelector('.accName').classList.remove("fill", "underline");
        document.querySelector('.thumb2').animate(
          {
            transform:
              'translateX(-170%)'
          },
          {
            duration: 2000,
            fill: 'forwards',
            easing: 'ease-in-out'
          }
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
  if(scrollTop>absoluteTop){
    document.querySelector('.apparelName2').classList.add("fill", "underline");
}else{
    document.querySelector('.apparelName2').classList.remove("fill", "underline");
}
}
