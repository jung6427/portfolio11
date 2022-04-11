$(function(){ /* 지우면안돼 */
  // top_slide
    var swiper = new Swiper(".header_slide .swiper", {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".header_slide .next",
            prevEl: ".header_slide .prev",
          },
    });
    // header .login_area .sub_login
    $('.lang_wrap .kor_language').mouseover(function(){
      $('.sub_login').addClass('on');
    })
    $('.sub_login').mouseleave(function(){
      $('.sub_login').removeClass('on');
    })
    // menu_area 슬라이드
    $('.menu_area > ul > li').hover(function(){
      if($(this).children('a').hasClass('dept1')){

        $('header').removeClass('hide');
        $('.menu_area .sub').addClass('on');
        $(this).find('.sub_menu, .move_c, .move_p').addClass('on');
        $(this).find('.sub').addClass('index');
        $('header').addClass('on');
      }
    },function(){
      $('.menu_area .sub').removeClass('index');
      $('header').removeClass('on');
      $('header').addClass('hide');
      $(this).find('.sub_menu, .move_c, .move_p').removeClass('on');
    })
    // menu_area 의 celeb 메뉴  순서 중요 
    $('.dept2').mouseover(function(){
      $('.sub_menu01 li').removeClass('on');
      $(this).parent('.sub_menu01 li').addClass('on');
    })
     
    // header nav.fixed
    $(window).scroll(function(){
      curr = $(window).scrollTop();
      if(curr > 72){
        $('.logo_area').addClass('fixed');
      }else{
        $('.logo_area').removeClass('fixed');
      }
    })
    // search_area  join_area 의 search를 클릭하면 내려오는 검색창
    $('.join_area .search').click(function(e){
      e.preventDefault();
      $('.search_area').addClass('on');
    })
    $('.btn_close').click(function(e){
      e.preventDefault();
      $('.search_area').removeClass('on');
    })
    // sc_visual
    


     var slide01 = new Swiper(".sc_visual .swiper", {
          centeredSlides: true,
          slidesPerView: 'auto',
          // spaceBetween: 30,
          loop: true,
        //   autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        //  },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      bgArr = ['#d8e22d', '#f01', 'orange', '#f08', '#75787b', '#006bd5', '#3d435f', '#f8877a', '#7482eb'];
      // 배열
      slide01.on('slideChange',function(){
        idx = slide01.realIndex; /* 고유한 순서  */
        $('.sc_visual .bg').css({background:bgArr[idx]})
      })

    // sc_items
     var swiper = new Swiper(".sc_items .swiper", {
       slidesPerView: 5,
       spaceBetween: 25,
       slidesPerGroup: 1,
       loop: true,
    //    autoplay: {
    //      delay: 2500,
    //      disableOnInteraction: false,
    //  },
       loopFillGroupWithBlank: true,
       pagination: {
         el: ".sc_items .swiper-pagination",
         clickable: true,
       },
       navigation: {
         nextEl: ".sc_items .next",
       prevEl: ".sc_items .prev",
       },
     });
    //  sc_celeb
    $('.dept2').click(function(e){
      e.preventDefault();
      $(this).removeClass('on');
      $('.sub_celeb').removeClass('on');
      $(this).siblings('.sub_celeb').addClass('on')/* .siblings('.sub_celeb').removeClass('on') */
      $('.sc_celeb .move').removeClass('on');
      $(this).children('.sc_celeb .move').addClass('on');
    })

    $('.celeb_nav >li').eq(5).after('<div class="clear"></div>')

    // sc_issue
    var swiper = new Swiper(".sc_issue .swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".sc_issue .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".sc_issue .next",
        prevEl: ".sc_issue .prev",
      },
    });
    // sc_album
    var swiper = new Swiper(".sc_album .swiper", {
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".sc_album .swiper-pagination",
        clickable: true,
      },
    });

    /* footerHeight = $('footer').outerHeight();
    // 마진바텀은 - 연산으로 중간에 대문자
    $('.container').css({marginBottom:footerHeight}); */

}) /* 지우면안돼 */