$(document).ready(function(){

var bodyHeight = $('body').height();
var viewHeight = $(window).height();
var viewWidth = $(window).width();
var percentView = viewHeight / bodyHeight;
var scrollMid = (viewHeight * percentView)/2;
var idleTime = 0;
var idleInterval = setInterval(function(){fadeOut('#sLabel')}, 1000); // 1 seconds
var yPos = 0;
var sOne = $('.sOne').offset();
var sTwo = $('.sTwo').offset();
var sThree = $('.sThree').offset();
var sThree = $('.sFour').offset();

$(window).on('scroll', function(){

  positionScroll('#sLabel');
  labelContent('.content');
  fadeIn('#sLabel');
  idleTime = 0;
  fadeOut('#sLabel');

})






/*
traverse_slides('.slide');

function traverse_slides(foo){
  var slideWidth = $(foo).outerWidth();
  var leftValue = slideWidth * -1;
  //declare an array
  var slides = [];
  //fill the array with the number of slides
  $(foo).each(function(index){
    slides.push('entry');
    $(this).addClass('at_'+ index);
  });


//declare current position
  var slidePos = 0;
//if you click on next/prev, change the current position
  $('.slide_nav.next').on('click', function(){
    if (slidePos < slides.length){
      slidePos++;
      console.log('incremented!')
    }else {
      console.log('cannot increment further!');
    }
  });


  $('.slide_nav.previous').on('click', function(){
    if(slidePos > 0){
      slidePos --;
      console.log('decremented!');
    }else{
      console.log('cannot decrement further!')
    }
  });
}
*/
traverse_slides('ul.carousel.one');

function traverse_slides(foo){
 $(foo).children('.slide').css({'width':viewWidth});
 var leftValue = viewWidth * -1;
 $(foo).find("li:first").before($(this).find("li:last"));


  $('.slide_nav.next').on('click', function(){
    $(foo).animate({marginLeft:leftValue},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
      });
  });


  $('.slide_nav.previous').on('click', function(){
    $(foo).find("li:first").before($(this).find("li:last"));

    $(foo).animate({marginLeft:viewWidth},1000,function(){
         // $(foo).find("li:first").before($(this).find("li:last"));

            $(this).css({marginLeft:0});
      });
  });

}


$('.logo').on('click', function(){
  var contentMargin =  $('.content_holder').css('margin-left');
  var contentMarginInt = parseInt(contentMargin , 10);
  if( contentMarginInt > 0){
    console.log(contentMarginInt);
    $('.content_holder').css({'margin-left' : 0});
    $('.nav').css({'left' : 0});
  }else{
    $('.content_holder').css({'margin-left' : 200});
    $('.nav').css({'left' : 200});
  }
});





$('.content_holder').on('click', function(){
  var contentMargin =  $('.content_holder').css('margin-left');
  var contentMarginInt = parseInt(contentMargin , 10);
  if( contentMarginInt > 0){
    $('.content_holder').css({'margin-left' : 0});
    $('.nav').css({'left' : 0});
  }
})



function positionScroll(foo){
  yPos = $(document).scrollTop();
  scrollPos = (yPos + (percentView * yPos )) + scrollMid;
  $(foo).css({'top' : scrollPos + 'px'})
}


function fadeOut(foo){
  idleTime ++;
  if(idleTime > 2){
      $(foo).css({'opacity' : 0})
  }
}


function fadeIn(foo){
  $(foo).css({'opacity' : 1})
}

function labelContent(foo){
  var label = '';
  if (yPos < sThree.top){
   $(foo).html('Icon Design');
   if (yPos < sTwo.top){
    $(foo).html('UI Design');
      if (yPos < sOne.top){
      $(foo).html('Introduction');
      }
   }
  } else {
    $(foo).html('Implementation');
  }
}


});