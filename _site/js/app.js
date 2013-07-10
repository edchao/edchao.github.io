$(document).ready(function(){

/*BEHAVIOR
	- On hover
		- show and animate options
		-  
	- clicking on option
		- sets the filter to the option
		- hides filter
	
*/	
  
  var current_href = $(location).attr('href');
  var current_title = $(document).attr('title');

  $('button').on('click', function(){
    
  })
  
  $('.email').on('click', function(){
    window.location.href = "mailto:eddchao@gmail.com";
    
  })
  
  if(current_title=='edchao - about'){
    $('.logo').css({'background-position':'0px -50px'});
  }else if(current_title=='edchao - work'){
    $('.logo').css({'background-position':'0px -102px'}); 
  }else{
    $('.logo').css({'background-position':'0px 0px'});
  }


  

	$('.logo').on('mouseover click', function(){
		$('#filters').css({'padding-top':'8px', 'opacity':'1'});
	});
	$('.nav').on('mouseleave click', function(){
		$('#filters').css({'padding-top':'0px', 'opacity':'0'});
	});




	$('.filter.all').on('click', function(){
		$('.logo').css({'background-position':'0px 0px'});
	});
	$('.filter.all').hover(function(){
		$(this).children('.popover').css({'visibility':'visible'});
	},function(){
		$(this).children('.popover').css({'visibility':'hidden'});
	});

	
	$('.filter.img').on('click', function(){
		$('.logo').css({'background-position':'0px -102px'});
	});
	$('.filter.img').hover(function(){
		$(this).children('.popover').css({'visibility':'visible'});
	},function(){
		$(this).children('.popover').css({'visibility':'hidden'});
	});
	
	
	$('.filter.text').on('click', function(){
		$('.logo').css({'background-position':'0px -50px'});
	});
	$('.filter.text').hover(function(){
		$(this).children('.popover').css({'visibility':'visible'});
	},function(){
		$(this).children('.popover').css({'visibility':'hidden'});
	});
	
  
	$('.network.dribbble').hover(function(){
		$(this).children('.popover').css({'visibility':'visible'});
	},function(){
		$(this).children('.popover').css({'visibility':'hidden'});
	});
	

  
  
});