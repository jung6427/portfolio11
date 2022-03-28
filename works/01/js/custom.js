$(function(){ /* 스크립트에서 1번만 */
    //right_wrap 에 언어변경
    $('.select_btn').click(function(){
        url = $('#citylang').val();
        window.open(url, "_blank");  
    })
    //    sc_visual 스와이퍼 클릭시 탭이동 
    $('.slide_content h3').click(function(e){
        e.preventDefault();
        $(this).parent('.slide_content').addClass('on').siblings('.slide_content').removeClass('on')
    })
    //    sc_visual 스와이퍼 주요뉴스 
    var swiper = new Swiper(".slide_content1 .swiper", {
        pagination: {
            el: ".slide_content1 .hi_pagers",
            type: "fraction",
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop:true,
            navigation: {
            nextEl: ".slide_content1 .next",
            prevEl: ".slide_content1 .prev",
            },
    })
    //    sc_visual 스와이퍼 주요뉴스의 일시정지와 시작 바뀌는거
    $('.slide_content1 .s_btn').click(function(e){
        e.preventDefault(); 
        $('.s_play').toggleClass('pause');
    })
    // sc_visual 스와이퍼 주요뉴스 일시정지와 시작
    $('.s_play').on('click',function(){
        swiper.autoplay.start();
        return false;
       })
      $('.pause').on('click',function(){
        swiper.autoplay.stop();
        return false;
       });
    //    sc_visual 스와이퍼 시민참여  
    var swiper = new Swiper(".slide_content2 .swiper", {
        pagination: {
            el: ".slide_content2 .hi_pagers",
            type: "fraction",
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop:true,
            navigation: {
            nextEl: ".slide_content2 .next",
            prevEl: ".slide_content2 .prev",
            },
    })
    // 3단 슬라이드
    var swiper = new Swiper(".main_banner .swiper", {
        pagination: {
            el: ".main_banner .hi_pagers",
            type: "fraction",
        },
            loop:true,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
            nextEl: ".main_banner .next",
            prevEl: ".main_banner .prev",
        },
    })
    // 엔진 위로 뜨는거
    $('.dept1').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            $('.dept1').removeClass('on');
            $('.sub').stop().slideUp();
        }else{
            $('.dept1').removeClass('on');
            $(this).addClass('on');
            $('.sub').stop().slideUp();
            $(this).siblings('.sub').stop().slideDown();
        }
    })

    $('.sub li:last-child a').keydown(function(e){
        var v_keyCode = event.keyCode || event.which;

        // alert(v_keyCode);

        if(v_keyCode == 9){
            if(!event.shiftkey){
                $('.sub').stop().slideUp();
            }
        }
    })

    $('.sub li:first-child a').keydown(function(e){
        var v_keyCode = event.keyCode || event.which;

        if(v_keyCode == 9){
            if(event.shiftKey){ 
                $('.sub').stop().slideUp();
            }
        }

    })









})  /* 끝점 지우면 안됨 */