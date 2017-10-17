
function setup() {
  var columnSize = 100;
  var rowSize = 130;
  var columnSizeBg = 80;
  var rowSizeBg = 80;
  var shutter_w = 0;
  var shutter_w = 0;
  var yellow = color(255, 248, 214);
  var dark = color(15, 2, 58);
  var pnk = color(239, 141, 151);
  var lightPnk = color(249, 172, 180);
  var brightPnk = color(232, 11, 51);
  var green = color(1, 181, 103);
  var brown = color(142, 78, 4);
  var darkBrown = color(107, 58, 3);
	  createCanvas(640, 480);
    background (pnk);
    
    for (var x = 0; x < width; x += columnSizeBg) {
      //line(, 0, x, height)
      for (var y = 0; y < height; y += rowSizeBg) {
        //line(x, 0, x, height)
        noStroke ();
        fill(lightPnk);
        rect(x,y,20,8,2);
        rect(x,y+11,20,8,2);
        rect(x-23,y+20,20,8,2);
        rect(x+23,y+11,20,8,2);
        rect(x+46,y-11,20,8,2);
    }
  }

    for (var x = 0; x < width; x += columnSize) {
      for (var y = 0; y < height; y += rowSize) {
        //window
        noStroke ();
        fill(yellow);
        ellipse(x,y,50);
        rect(x-25,y,50,85);
        rect(x-35,y+85,70,15);
        fill(dark);
        ellipse(x,y,40);
        rect(x-20,y,40,80);
        fill(yellow);
        rect(x-25,y,50,4);
        rect(x-2,y-25,4,25);
        rect(x-25,y+20,50,4);
        //flowers
        fill(green);
        triangle(x-14,y+75, x-5, y+75, x-8, y+67);
        triangle(x-8,y+75, x+1, y+75, x-2, y+67);
        triangle(x-2,y+75, x+7, y+75, x+4, y+67);
        triangle(x+4,y+75, x+13, y+75, x+10, y+67);
        fill(darkBrown);
        rect(x-15,y+78,30,15,3);
        fill(brown);
        rect(x-17,y+74,34,10,2);

        fill(brightPnk);
        ellipse(x+8, y+65, 5, 5)
        ellipse(x+8, y+60, 5, 5)
        ellipse(x+3, y+65, 5, 5)
        ellipse(x+3, y+60, 5, 5)
        fill(pnk);
        ellipse(x+5, y+62, 5, 5)
    }
  }
}
    function draw() {
}
