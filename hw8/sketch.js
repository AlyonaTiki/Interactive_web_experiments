
function setup() {
createCanvas(518,600)
design();
img = loadImage("Tote-bag.png");
}
    function design() {
      background (200);
      
      //translate(width/2, height/2);
      var numRect = 10;
      var w = random(0, 300);
      var x = 0;
      noStroke();
       //for (var x = 0; x < width; x += columnSizeBg) {
      //  for (var y = 0; y < height; y += rowSizeBg) {

      
        var r= random (0,255);
        var g = random (27,200);
        var b = random (0,73);
        var a = random (0,255);
        var x = random (30,300);
        var y = random (30,300);
        font = loadFont('fonts/Lobster.ttf', 'fonts/Gloria.ttf', 'FascinateInline.ttf');
        fill(r,g,b,a)
      
         /* var fill = Math.floor(random(0, 4));
		if (fill == 0) {
				fill(247,g, 27);
			} else if (fill == 1) {
				fill(255,g, 0);
			} else if (fill == 2) {
				fill(73,1, b);
			} else if (fill == 3) {
				fill(120,2, b);
			}*/
		
        var shape = Math.floor(random(0, 4));
			if (shape == 0) {
				arc(x, y, w*2, w*2, 0, HALF_PI);
			} else if (shape == 1) {
				rect(x, x, w, w);
			} else if (shape == 2) {
				arc(x + w, y + x, w*2, w*2, PI, PI + HALF_PI);
			} else if (shape == 3) {
				rect(x, x, w, w);
			}
		fill(r,g,b)
        rect(0, 0, width, height/2-18);
		x += w;
        textSize(30);
        textFont(font);
        text("TRICK OR TREAT", width/2-120, height/2+25);
     
}
    //}
    //}


function mouseClicked() {
  design();

 
  image(img, 0, 0);
}
