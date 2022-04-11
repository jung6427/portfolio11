$(function(){ /* 지우면 안됩니다 */
    $('.m_menu').click(function(e){
      e.preventDefault();
      $('.menu_area nav .menu, body, .m_menu').toggleClass('on')
    })
    //  menu 의 슬라이드 팝업
      $('.dept1').click(function(e){
           e.preventDefault();
           if($(this).hasClass('on')){
               $('.dept1').removeClass('on');
               $('.sub').stop().slideUp(0);
               // slideUp(); 펼쳐지는 방향 이야기 하는거 아님 방향은 이미 css에서 잡은거임 헷갈리지 말것
               //   .stop() 다른거를 클릭하더라도 현재 슬라이드 된느걸 멈추게 하는거
             }else{
               $('.dept1').removeClass('on');
               $(this).addClass('on');
               $('.sub').stop().slideUp(0);
               $(this).siblings('.sub').stop().slideDown(0);
           }
      })
               //  slideDown(0);  slideUp(0);  등  slideDown(숫자 1000은 1초 );
    //   login 의 슬라이드 팝업 주어 적을때 부모도 적어야 안헷갈림
      $('.login_area .dept2').click(function(e){
          e.preventDefault();
          if($(this).hasClass('on')){
              $('.login_area .dept2').removeClass('on');
              $('.sub1').stop().slideUp(0);
            }else{
              $('.login_area .dept2').removeClass('on');
              $(this).addClass('on');
              $('.sub1').stop().slideUp(0);
              $(this).siblings('.sub1').stop().slideDown(0);
          }
      })
      // sc_industria 미디어 쿼리 1024px 이하일 경우에 나오는 스와이퍼
      var swiper = new Swiper(".sc_industria .swiper", {});

      // sc_solutions 스와이퍼
      var solutions = new Swiper(".sc_solutions .swiper", {
            observer: true,
            observeParents: true,
             centeredSlides: true,
             loop:true,
             pagination: {
               el: ".sc_solutions .swiper-pagination",
               type: "progressbar",
             },
             navigation: {
              nextEl: ".next",
              prevEl: ".prev",
            },
            on: { init: function() { 
              // fraction에 현재 인덱스와 전체 인덱스 표시 
              // this.loopedSlides는 loop, slidesPerView: 'auto'일 때 제대로 동작
               $('.sc_solutions .curr').text(this.realIndex + 1); 
               $('.sc_solutions .total').text(this.loopedSlides); 
              }, 
              slideChangeTransitionStart: function() { 
                // 페이지 넘어갈 때마다 fraction 현재 인덱스 변경 
                $('.sc_solutions .curr').text(this.realIndex + 1); 
              }
            },
         });
        
        //  현재 내가 몇번째인가? 구글에 액티브 인덱스 검색하면 나옴  +1 첫번째 부터 나옴
        // curr = sc_solutions.realIndex+1; 

        //  총슬라이드 개수 알아야함 (총개수 -2 ) 복사된게 있어서 
        // total = sc_solutions.slides.length - 2
          // curr = solutions.realIndex+1;
          total = solutions.slides.length - 2
          //  $('.sc_solutions .curr').text(curr)
           $('.sc_solutions .total').text(total)

          // 배열
         prdArr = [
          './images/sc_products_remote.png',
          './images/sc_products_make.png',
          './images/sc_products_view.png',
          './images/sc_products_twin.png',
          './images/sc_products_track.png',
         ]
      
        // sc_products 스와이퍼
       var swiper = new Swiper(".sc_products .swiper", {
           loop:true,
           spaceBetween: 60,
           effect: "coverflow",
           grabCursor: true,
           centeredSlides: true,
           slidesPerView: "auto",
           coverflowEffect: {
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
         },
         pagination: {
           el: ".prd_nav",
            clickable: true,
            renderBullet: function (index, className) {
            // return '<span class="' + className + '">' + (index + 1) + "</span>";

            return '<li class="'+className+'"><a href=""><img src="'+prdArr[index]+'" alt="remote"></a></li>';
          },
         },
       });
    // sc_news 미디어 쿼리 1024px 이하일 경우에 나오는 스와이퍼
      var swiper = new Swiper(".sc_news .swiper", {
        slidesPerView: 1.4,
      });
    // sc_mark 미디어 쿼리 768px 이하일 경우에 나오는 스와이퍼
      var swiper = new Swiper(".sc_mark .swiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
      // topScroll 클릭시 맨 위로 스크롤
      $( '.topScroll' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
      } );









}) /* 지우면 안됩니다 */