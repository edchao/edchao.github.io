$(document).ready(function(){


menuSize();


$(window).on('resize', function(){
  menuSize();
});

$(window).on('scroll', function(){
  menuAnimate();
});



function menuSize(){
	$viewWidth = $(document).width();
	if ($viewWidth < 400){
		$('nav').css({'-webkit-justify-content' : 'flex-start'});
		$('nav').css({'justify-content' : 'flex-start'});

		$('nav').html(
			'<div class="compact">\
				&nbsp\
			</div>'
		)
	}else {
		$('nav').css({'-webkit-justify-content' : 'center'});
		$('nav').css({'justify-content' : 'center'});
		$('nav').html(
			'<ul>\
  			<a href=""><li>WORK</li></a>\
     		 <a href=""><li>ABOUT</li></a>\
     		 <a href=""><li>STREAM</li></a>\
  			</ul>'
		)	
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