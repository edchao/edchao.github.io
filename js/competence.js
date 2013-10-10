$(document).ready(function(){

var bodyHeight = $('body').height();
var viewHeight = $(window).height();
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