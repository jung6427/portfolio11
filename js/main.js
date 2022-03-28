$(function() {


    $('.nav a').click(function(e){
        e.preventDefault();
       var target = $(this).attr('href');

        gsap.to(window, {duration: 1, scrollTo:target});

        $('body').removeClass('hidden')
        $('.nav,.menu_btn').removeClass('on')
        $('.menu_btn').text('Menu')

    })


    $('.menu_btn').click(function(e){
        e.preventDefault();
        $('body').toggleClass('hidden')
        $('.nav').toggleClass('on')
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            $(this).text('close')
        }else{
            $(this).addClass('on')
            $(this).text('Menu')
        }
        
    })


    // cursor
    $('body').mousemove(function(e){
        gsap.to('.cursor',{
            // scale: 0.5,
            x: e.clientX - 40,
            y: e.clientY - 40,
        })

        var txtW = $('.cursor_txt').width()/2;
        var txtH = $('.cursor_txt').height()/2;
        // console.log(txtW)

        gsap.to('.cursor_txt',0.6,{
            x: e.clientX - txtW,
            y: e.clientY - txtH,
        })
    })


    $('a').hover(function(){
        gsap.to('.cursor',0.2,{scale: 1.5,})
        gsap.to('.cursor_txt',0.2,{opacity:1,})
    },function(){
        gsap.to('.cursor',0.2,{scale: 0.5,})
        gsap.to('.cursor_txt',0.2,{opacity:0,})
    })



    gsap.to('.bg',{
        scrollTrigger:{
            trigger:"body",
            start:"top top",
            end:"bottom bototm",
            // markers:true,
            scrub:0,
        },
        ease:"none",
        yPercent:-50,
    })


    gsap.utils.toArray(".cont img").forEach(img => {
        gsap.to(img, {
          scrollTrigger: {
            trigger:img,
            start:"top 100%",
            end:"bottom top",
            // markers:true,
            scrub:0,
          },
          ease:"none",
          yPercent:30,
        })
      });






   



})