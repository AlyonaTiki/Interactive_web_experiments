  var xpos = 160;
  var ypos = 300;
  var sz = 40;

function setup() {
	  createCanvas(640, 480);
}
function draw() {
	var wh = color(256, 256, 256);
	var pnk = color(214, 0, 57);
	var bl = color(0, 0, 0);
	var pnkLight = color(255, 35, 94);

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
    triangle(255, 185, 220, 186, 200, 315);
    triangle(329, 186, 380, 186, 350, 210);
    triangle(329, 244.5, 380, 244.5, 360, 210);
    textSize(30);
    fill(pnk);
    text("ALYONA PERMINOVA", 160, 325, 300);

		fill(wh);
    xpos = xpos + 2;
    rect(xpos, ypos, 270, sz);


    translate(100, 100);
		rotate(radians(frameCount));
    fill(pnk);
    rect(0, 0, sz, sz);
		rotate(radians(frameCount/2));
    fill(bl);
    rect(0, 0, sz+5, sz+5);
		rotate(radians(frameCount/3));
    fill(pnkLight);
    rect(0, 0, sz-5, sz-5);

		/*translate(100, 100);
		rotate(radians(frameCount));
    fill(pnk);
    rect(0, 0, sz, sz);
		rotate(radians(frameCount/2));
    fill(bl);
    rect(0, 0, sz+5, sz+5);
		rotate(radians(frameCount/3));
    fill(pnkLight);
    rect(0, 0, sz-5, sz-5);
*/
}
