$(document).ready(function(){
  var oink = 'eddchao';


  gridAnimate();

  $("img.lazy").lazyload({
    effect: "fadeIn"
  });

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


  $('.contact').on('click', function(){
    $(".modal_message").html(oink+"@gmail.com")
    modal_animate();
  });

  $(".modal_dismiss").click(function(){
    modal_animate();
  });

  function modal_animate(){
    if ($(".modal_overlay").hasClass('hidden')) {
      $(".modal_overlay").removeClass('hidden');
      setTimeout(function () {
        $(".modal_overlay").removeClass('visually-hidden');
      }, 20);
    } else {
      $(".modal_overlay").addClass('visually-hidden');
      $(".modal_overlay").one('transitionend', function(e) {
        $(".modal_overlay").addClass('hidden');
      });
    }
  }

});
