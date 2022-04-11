$(function(){ /* 지우지마세요 */
 const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
}); 

    // 헤드 픽스드 고정 스크롤 이벤트
    $("body").on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        
        //스크롤값을 가져온다.
        if(wheel>0){
            //스크롤 올릴때
            $("header").removeClass("hide");
        } else {
            //스크롤 내릴때
            $("header").addClass("hide");
        }
    });
    
    // 메뉴 눌렀을때 왼쪽에서 오른쪽으로 나오게 하는거 
    $('.menu').click(function(e){
        e.preventDefault();
        $('.menu_open').toggleClass('on');
    })
    // sc_visual  하단 스와이퍼 
    var swiper = new Swiper(".swiper", {
        effect : 'fade',
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });










}) /* 지우지마세요 */