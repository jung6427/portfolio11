//1.풀페이지 스크롤
$(function(){
    $('#fullpage').fullpage({
        fingersonly: true,
        anchors:['firstPage','secondPage','thirdPage'],
        menu:'.rightNav',
        afterLoad: function(anchorLink, index){
            if(index == 1){ 
                $('header').css('background', 'none'); 
                $('header').css('color', '#fff');
                $('h1 img').attr('src', '/img/logo.png');
                $('.tel img').attr('src', '/img/tel.png');
                $('.fullPageWrap .rightNav li a').css('background', '#fff');
            }
            if(index == 2){
                $('header').css('background', '#fff');
                $('header').css('color', '#000');
                $('.count').counterUp({delay: 10,time: 550});
                $('h1 img').attr('src', './img/logo_hover.png');
                $('.tel img').attr('src', '/img/hader_tel.png');
                $('.fullPageWrap .rightNav li a').css('background', '#000');
            }
            if(index == 3){
                $('.count2').counterUp({delay: 10,time: 550});
            }
        }
    });
});
// 2. 탭이동 스크립트
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('on');
		$('.tab-content').removeClass('on');

		$(this).addClass('on');
		$("#"+tab_id).addClass('on');
	})

})







 