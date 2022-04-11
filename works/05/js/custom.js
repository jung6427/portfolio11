$(function(){ /* 지우면안됨 */
    // 검색 창 눌렀을때 왼쪽에서 오른쪽으로 나오게 하는거 
    $('header .search').click(function(e){
        e.preventDefault();
        $('body').addClass('hidden')
      $('.open_search').animate({'left':0},300)
       
     })
     $('.close').click(function(e){
      e.preventDefault();
      $('body').removeClass('hidden')

      $('.open_search').animate({'left':'-100%'},300,function(){
        // 콜백 하는 방법 
        $('.open_search').css({left:'100%'})
      })
    })
    // open_search 의 노블 컬렉션 보러가기 스와이퍼
    var swiper = new Swiper(".open_search .swiper", {
      loop:true,
      direction: "vertical",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // 위의 노블 컬렉션 보러가기 스와이퍼 클릭시 스와이퍼는 아래로 내려가고 폼 인풋 나오게
    $('.top_open_search .swiper').click(function(){
      $('.top_open_search .swiper').addClass('on');
    })
    
    $('.sc_select select').change(function(){
      val = $(this).val();
      // 밸류값 가지고 오기 
      $(this).parents('.select_txt').find('span').text(val);
    })



    // 헤드 픽스드 스크롤 이벤트
    $(window).scroll(function(){
        curr = $(window).scrollTop();
        if(curr > 0){
          $('.title_wrap').addClass('fixed');
        }else{
          $('.title_wrap').removeClass('fixed');
        }
        // 하단 픽스드 
        target = $('.sc_collection').offset().top;

        curr = $(window).scrollTop();
        if(curr > 0){

          $('.end_area .toolbar').addClass('hide');
          if(      curr > target - $(window).height()    ){
            $('.foo_btn').addClass('on');
          }else{
            $('.foo_btn').removeClass('on');
          }
          console.log(curr+'///' + ($('body').height() - $(window).height()))
          if(   curr >= $('body').height() - $(window).height()        ){
         
            $('.end_area .toolbar').removeClass('hide');
          }
        }else{
          $('.end_area .toolbar').removeClass('hide');
        }
    })
    
    // sc_visual 스와이퍼 
    var swiper = new Swiper(".sc_visual .swiper", {
        loop:true,
        effect : 'fade',
        pagination: {
            el: ".sc_visual .swiper-pagination",
            type: "progressbar",
            }
    });
    // sc_cate 카테고리별 베스트 탭 이동
    $('.sc_cate .dept1').click(function(e){
        e.preventDefault();
        target = $(this).children().attr('href');

        $(this).addClass('on').siblings().removeClass('on');
        $(target).addClass('on').siblings().removeClass('on');

        
        // $(this).siblings('.sub_list').addClass('on');
    })
    // sc_cate 카테고리별 누르면 열리고 닫으면 닫히는
    $('.sub_wrap .base_area').click(function(e){
      e.preventDefault();
       if($(this).hasClass('on')){
         $(this).removeClass('on') 
         $(this).siblings('.open_area').find('.wrap').fadeOut(500);
         $(this).siblings('.open_area').slideUp(500);
       }else{
         $(this).addClass('on')
         $(this).siblings('.open_area').find('.wrap').fadeIn(500);
         $(this).siblings('.open_area').slideDown(500);
       }
     })

    // sc_collection 공간의 혁신, 노블 컬렉션 스와이퍼
    var swiper = new Swiper(".sc_collection .swiper", {
      slidesPerView: 1.8,
      spaceBetween: 15,
    });
    // sc_reveiw 베스트 리뷰 스와이퍼
    var swiper = new Swiper(".sc_reveiw .swiper", {
      slidesPerView: 'auto',
      freeMode: true,
      pagination: {
        el: ".sc_reveiw .swiper-pagination",
        type: "progressbar",
      },
    });
    // sc_benefit 이달의 혜택
    var swiper = new Swiper(".sc_benefit .swiper", {
      slidesPerView: 1.1,
      spaceBetween: 15,
      /* centeredSlides: true, */
      // loop:true,
      pagination: {
          el: ".sc_benefit .swiper-pagination",
          type: "progressbar",
          }
    });
    // sc_qna 궁금하신 부분은 쉽고 빠르게 해결하세요
    var swiper = new Swiper(".sc_qna .swiper", {
      slidesPerView: 2.1,
      spaceBetween: 13,
      loop:true,
      pagination: {
          el: ".sc_qna .swiper-pagination",
          type: "progressbar",
          }
    });
    // 푸터 어드레스 스위치 
    $('.data h2').click(function(e){
      e.preventDefault();
      $('.data .open_data').slideToggle(500); /* slideToggle 스위치*/
      $(this).toggleClass('on');
  })
  // 클릭시 헤드 맨위로 올라가는 
  $( '.topScroll' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  } );
 




}) /* 지우면안됨 */