//= require_tree .
var swipeCont = document.getElementById('slider');

if (swipeCont) {
  var swipe = Swipe(swipeCont);

  swipeCont.addEventListener('click', function(){
    swipe.next();
  });
}