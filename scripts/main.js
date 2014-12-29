console.log('The Iron Yard Rocks');


$(window).scroll( function(){
  $scroll = $(window).scrollTop() * -0.3;
  $('.intro').css('background-positionY', ($scroll) + 'px');

});
