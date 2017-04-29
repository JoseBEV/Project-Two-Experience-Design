/*
function open_curtain() {
  $('#curtain1').animate({
    width: 20
  }, 1000);
  $('#curtain2').animate({
    width: 20
  }, 1000);
}

function close_curtain() {
  $('#curtain1').animate({
    width: 200
  }, 1000);
  $('#curtain2').animate({
    width: 191
  }, 1000);
}
*/

var curtain = $('body').curtainify({
  swapModeOnOrientationChange: true,
  landscape: {
    widthRatioCurtainA: 0.5,
    widthRatioCurtainB: 0.5,
  },
  portrait: {
    heightRatioCurtainA: 0.2,
    heightRatioCurtainB: 0.8,
  }
});

var options = {
    /*
     * Initial state of curtains.
     * By default curtains are closed when we "curtainify" an element.
     * If we want to be opened we need to set the initState property to "open"
     */
    initState: 'closed',
    // Curtains opening/closing animation duration
    animationDuration: 360,
    // Curtains opening/closing animation easing
    animationEasing: 'swing',
  };

/*
 *  Reference to left curtain element when in landscape mode
 *  and to top curtain element when in portrait mode
 */
var curtainA = curtain.curtainA;

/*
 * Reference to right curtain element when in landscape mode
 * and to bottom curtain element when in portrait mode
 */
var curtainB = curtain.curtainB;
