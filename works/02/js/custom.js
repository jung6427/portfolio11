$(function(){ /* 스크립트에서 1번만 */
    $(window).scroll(function(){
      curr = $(window).scrollTop();
      if(curr > 0){
        $('.header_fixd').addClass('fixed');
      }else{
        $('.header_fixd').removeClass('fixed');
      }
    })

    $('.menu_btn').click(function(e){
      e.preventDefault();
      $('.menu_js, .header_fixd .bg').addClass('on'); /* 클래스 선택자 점 안들어감  */
      $('body').addClass('hidden');
    })
    $('.menu_js .close,.header_fixd .bg ').click(function(e){
       e.preventDefault();
       $('.menu_js, .header_fixd .bg').removeClass('on');
       $('body').removeClass('hidden');
    })
    
    $('.menu_js .dept1').click(function(e){
       e.preventDefault();
        if($(this).hasClass('on')){  /* 이게 온을 가지고 있을때  */
          $(this).removeClass('on') 
          $(this).siblings('.sub').find('.wrap').fadeOut(500);
          $(this).siblings('.sub').slideUp(500);
        }else{
          $(this).addClass('on') /* 이게 온을 가지고 있지 않을때 열리는 소스 */
          $(this).siblings('.sub').find('.wrap').fadeIn(500);
          $(this).siblings('.sub').slideDown(500);
        }
      })
  
// header_bottom 밑에 전체메뉴 나오기
    $('.header_bottom .open').click(function(e){
        e.preventDefault();
        $('.all_menu').slideToggle(500); /* slideToggle 스위치*/
        $(this).toggleClass('on');
    })

    $('.header_bottom .open').click(function(e){
      e.preventDefault();
      $('.all').toggleClass('on');
    })

// header_bottom 밑에 전체메뉴 나오기
    
    //  serch_area 껐다 키기
    $('.search').click(function(e){
      e.preventDefault();
      $('.serch_area').addClass('on');
    })
    $('.home').click(function(e){
      e.preventDefault();
      $('.serch_area').removeClass('on');
    })
    //  ////////// serch_area 껐다 키기

    var swiper = new Swiper(".top_slide .swiper",{
        effect : 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop:true,
        
    });
    // sc_visual 슬라이드
    var swiper = new Swiper(".sc_visual .swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
        effect : 'fade',
        loop:true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
      });
    // 상품 뷰3개 슬라이드
    var swiper = new Swiper(".slide .swiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
      });
    
    // 메뉴창 왼쪽에서 오른쪽으로 열리는거
    // $('.menu_btn').click(function(e){
    //     e.preventDefault(); 
    //     $('.menu_js').addClass('on')
    // })
    // $('.close').click(function(e){
    //     e.preventDefault(); 
    //     $('.menu_js').removeClass('on')
    // })

})  /* 끝점 지우면 안됨 */

