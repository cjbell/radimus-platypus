//= require_tree .
var swipeCont = document.getElementById('slider');

if (swipeCont) {
  var swipe = Swipe(swipeCont);

  swipeCont.addEventListener('click', function(){
    swipe.next();
  });

  window.setInterval(function(){
    swipe.next();
  }, 7000);
}