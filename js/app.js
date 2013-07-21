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
  $foo = $('<a href="/index.html"><div class="filter stream">Stream<div class="popover">stream</div></div></a> <a href="/archive.html"><div class="filter archive">Archive<div class="popover">archives</div></div></a><a href="/about.html"><div class="filter about">About<div class="popover">@edchao</div></div></a>'); 
  $('button').on('click', function(){
    
  })
  
  $('.email').on('click', function(){
    window.location.href = "mailto:eddchao@gmail.com";
    
  })
  
  
  // LOGO -  ICON SELECTION
  
  if(current_title=='edchao - Stream'){
    $('.logo').css({'background-position':'0px 0px'});
  }else if(current_title=='edchao - Archive'){
    $('.logo').css({'background-position':'0px -50px'}); 
  }else if(current_title=='edchao - About'){
    $('.logo').css({'background-position':'0px -102px'}); 
  }else {
    $('.logo').css({'background-position':'0px 0px'});
  }
  

  
  // LOGO - HOVER BEHAVIOR

	$('.logo').on('mouseover', function(){
    $('#filters').append($foo);
		$('#filters').css({'padding-top':'8px', 'opacity':'1'});
	});
	$('.logo').on('click', function(){
    $('#filters').append($foo);
		$('#filters').css({'padding-top':'8px', 'opacity':'1'});
	});
	$('.nav').on('mouseleave', function(){
		$('#filters').css({'padding-top':'0px', 'opacity':'0'});
	});
	$('body').on('click', function(){
		$('#filters').css({'padding-top':'0px', 'opacity':'0'});
	});
  $('#filters').on('transitionend', function(){
    if($('#filters').css('padding-top') == '0px'){
      $foo.remove();
    };
  });
  
  





	$('body').on('mouseover','.filter.stream', function(){
		$(this).children('.popover').css({'visibility':'visible'});
	});
  $('body').on('mouseleave', '.filter.stream', function(){
    $(this).children('.popover').css({'visibility':'hidden'});
  });

	

	$('body').on('mouseover','.filter.archive', function(){
		$(this).children('.popover').css({'visibility':'visible'});
	});
  $('body').on('mouseleave', '.filter.archive', function(){
    $(this).children('.popover').css({'visibility':'hidden'});
  });

	
	
	$('body').on('mouseover','.filter.about', function(){
		$(this).children('.popover').css({'visibility':'visible'});
	});
  $('body').on('mouseleave', '.filter.about', function(){
    $(this).children('.popover').css({'visibility':'hidden'});
  });
  
  
	$('.network.dribbble').hover(function(){
		$(this).children('.popover').css({'visibility':'visible'});
	},function(){
		$(this).children('.popover').css({'visibility':'hidden'});
	});
	

  
  
});