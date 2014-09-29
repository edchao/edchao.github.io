$(document).ready(function(){


$(window).on('scroll', function(){
  menuAnimate();
});


$('.contact').on('click', function(){
  var oink = 'eddchao';
  window.location = "mailto:"+oink+"@gmail.com";
});

$('.link_email').on('click', function(){
  var oink = 'eddchao';
  window.location = "mailto:"+oink+"@gmail.com";
});




function menuAnimate(){

  $yPos = $(document).scrollTop();

  $contentPos = $('.nav-trigger').offset().top;

  if($yPos > $contentPos){
    $('nav').addClass('opaque');
    $('.nav_logo').addClass('is-shown');
  }else{
    $('nav').removeClass('opaque');
    $('.nav_logo').removeClass('is-shown');
  }
}




});