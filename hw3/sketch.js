function setup() {
	  createCanvas(640, 480);
      }
function draw() {

    var tp = 186;
    var wh = color(256, 256, 256);
    var pnk = color(214, 0, 57);

    background(wh);
  	noStroke();

    fill(pnk);
    ellipse(290, 230, 140, 140);
    fill(wh);
    textSize(130);
    textFont("Trebuchet MS");
    text("AP", 215, 280, 300);
    fill(wh);
    rect(220, 290, 120, 59);
    triangle(255, 185, 220, tp, 200, 315);
    triangle(329, tp, 380, tp, 350, 210);
    triangle(329, 244.5, 380, 244.5, 360, 210);
    textSize(30);
    fill(pnk);
    text("ALYONA PERMINOVA", 160, 325, 300);


}
