
function setup() {
createCanvas(518,600)
design();
img = loadImage("Tote-bag.png");
}
    function design() {
      background (56);
      var originx = random(-width/2, width/2);
      var columnSizeBg = 40;
      var rowSizeBg = 40;
      translate(width/2, height/2);
      var numArcs = 10;
      noStroke();
      for (var x = 0; x < width; x += columnSizeBg) {

        for (var y = 0; y < height; y += rowSizeBg) {



      for (var i = 0; i < numArcs; i++) {
        var r = random (0,255);
        var g = random (0,255);
        var b = random (0,255);
        var a = random (0,255);
        fill(r,g,b,a)
      }
      var size = random(9, width);
      var arcFinish = random(0, TWO_PI);
      var arcStart = random(0, TWO_PI);
      var x= 0;
      var y= 0;
      var w = random(width/2, width);
      var c = random(0, 255);

      var pnk = color(239, 141, 151);


      fill(c,a);
      arc(x,y,size,size,arcStart, arcFinish);


      // tote bag image

    }
    }

}
function mouseClicked() {
  design();

  image(img, -width/2, -height/2);
}
