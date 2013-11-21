$(document).ready(function(){








menuSize();




$(window).on('resize', function(){
  menuSize();
});

$(window).on('scroll', function(){
  menuAnimate();
});


$('.compact').on('click',function(){
	var $containerMarginPx = $('.container').css('margin-left');
	var containerMargin = parseInt($containerMarginPx, 10);

	if(containerMargin < 5){
		$('.container').css({'margin-left' : '100px'});
	}else{
		$('.container').css({'margin-left' : '0px'});
	}
});	

$('.container').on('click',function(){
	var $containerMarginPx = $('.container').css('margin-left');
	var containerMargin = parseInt($containerMarginPx, 10);
	if(containerMargin > 0){
		$('.container').css({'margin-left' : '0px'});
	}
});	

function menuSize(){
	$viewWidth = $(document).width();
	if ($viewWidth < 400){
		$('nav').css({'-webkit-justify-content' : 'flex-start'});
		$('nav').css({'justify-content' : 'flex-start'});
		$('.expanded').css({'display':'none'});
		$('.compact').css({'display':'block'});


	}else {
		$('nav').css({'-webkit-justify-content' : 'center'});
		$('nav').css({'justify-content' : 'center'});
		$('.expanded').css({'display':'block'});
		$('.compact').css({'display':'none'});
		$('.container').css({'margin-left' : '0px'});
	}
}



function menuAnimate(){

$yPos = $(document).scrollTop();

	if($yPos > 5){
		$('nav').css({'background-color' : 'rgba(255,255,255,0.9)'});
		$('nav li').css({'border-color':'rgba(0,0,0,0.0'});
	}else{
		$('nav').css({'background-color' : 'transparent'});
		$('nav li').css({'border-color':'rgba(0,0,0,0.3'});
	}
}




});