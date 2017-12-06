/* states
0 start
1 base
2 flavor
3 toppings
4 calories
5 activity
6 result
*/



var imgBtn;
 
function preload() {
  imgBtn = loadImage("img/but3.png");
}
 
function setup() {
  createCanvas(800, 500)
  background(0);
  imgBtn.position(100, 100).mousePressed(gotoGame);
}
 
function gotoGame() {
  // blah, blah, blah...
}