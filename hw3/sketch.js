
    function setup() {
	createCanvas(640, 480);
  
    var base = color(125, 129, 135);
    var lightParts = color(182, 188, 196);
    var darkParts = color(214, 0, 57);
    var wh = color(256, 256, 256);
	background("white");
	noStroke();

  fill(darkParts);
  ellipse(290, 230, 140, 140);
  fill(wh);
  textSize(130);
  textFont("Trebuchet MS");
  text("AP", 215, 280, 300);
  fill(wh);
  rect(220, 290, 120, 59);
  triangle(255, 185, 220, 186, 200, 315);
  triangle(329, 186, 380, 186, 350, 210);
  triangle(329, 244.5, 380, 244.5, 360, 210);
  textSize(30);
  fill(darkParts);
  text("ALYONA PERMINOVA", 160, 325, 300);
  //triangle(100, 100, 100, 260, 310, 100);
  //triangle(230, 180, 100, 280, 330, 280);
    }
function draw() {



}
