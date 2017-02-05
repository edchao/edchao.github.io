$(document).ready(function(){
  var oink = 'eddchao';


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


  $('.contact').on('click', function(){
    $(".modal_overlay").addClass("show");
    $(".modal_message").html(oink+"@gmail.com")
  });

  $(".modal_dismiss").click(function(){
    $(".modal_message").html("hi bots");
    $(".modal_overlay").removeClass("show");
  });



});
