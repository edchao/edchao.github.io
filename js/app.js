$(document).ready(function(){


// $(window).on('scroll', function(){
//   menuAnimate();
// });


$('.contact').on('click', function(){
  var oink = 'eddchao';
  window.location = "mailto:"+oink+"@gmail.com";
});

$('.link_email').on('click', function(){
  var oink = 'eddchao';
  window.location = "mailto:"+oink+"@gmail.com";
});


gridAnimate();

/* Every time the window is scrolled ... */
$(window).scroll( function(){

    gridAnimate();

});


function gridAnimate(){
  $('.hide_me').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window + 500 > bottom_of_object ){

          $(this).animate({'opacity':'1'},500);

      }

  });
}


// function menuAnimate(){
//
//   $yPos = $(document).scrollTop();
//
//   $contentPos = $('.nav-trigger').offset().top;
//
//   if($yPos > $contentPos){
//     $('nav').addClass('opaque');
//     $('.nav_logo').addClass('is-shown');
//   }else{
//     $('nav').removeClass('opaque');
//     $('.nav_logo').removeClass('is-shown');
//   }
// }




});
