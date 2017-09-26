
function setup() {
createCanvas(640, 480);
}

function draw() {
background("white");
strokeWeight(7);

fill("lightblue");

if (mouseX > width/2) {
		fill("red");
	} else {
		fill(0,255,84);
	}
/*up*/
stroke(20,255,0);
line(mouseX, mouseY, 40, 0);
stroke(55,255,0);
line(mouseX, mouseY, 80, 0);
stroke(126,232,12);
line(mouseX, mouseY, 120, 0);
stroke(209,255,0);
line(mouseX, mouseY, width/4, 0);
stroke(232,224,0);
line(mouseX, mouseY, 200, 0);
stroke(255,234,0);
line(mouseX, mouseY, 240, 0);
stroke(255,221,0);
line(mouseX, mouseY, 280, 0);
stroke(255,200,0);
line(mouseX, mouseY, width/2, 0);
stroke(255,178,0);
line(mouseX, mouseY, 360, 0);
stroke(255,168,0);
line(mouseX, mouseY, 400, 0);
stroke(232,129,0);
line(mouseX, mouseY, 440, 0);
stroke(255,108,0);
line(mouseX, mouseY, 480, 0);
stroke(232,68,0);
line(mouseX, mouseY, 520, 0);
stroke(255,40,0);
line(mouseX, mouseY, 560, 0);
stroke(255,27,0);
line(mouseX, mouseY, 600, 0);
stroke(255,0,0);
line(mouseX, mouseY, width, 0);
/*left*/
stroke(0,255,84);
line(mouseX, mouseY, 0, 0);
stroke(0,255,129);
line(mouseX, mouseY, 0, 30);
stroke(0,255,154);
line(mouseX, mouseY, 0, height/8);
stroke(0,232,202);
line(mouseX, mouseY, 0, 90);
stroke(0,222,255);
line(mouseX, mouseY, 0, height/4);
stroke(0,144,232);
line(mouseX, mouseY, 0, 150);
stroke(1,95,255);
line(mouseX, mouseY, 0, 180);
stroke(3,58,255);
line(mouseX, mouseY, 0, 210);
stroke(1,25,255);
line(mouseX, mouseY, 0, height/2);
stroke(30,0,255);
line(mouseX, mouseY, 0, 270);
stroke(89,0,255);
line(mouseX, mouseY, 0, 300);
stroke(141,0,232);
line(mouseX, mouseY, 0, 330);
stroke(221,0,255);
line(mouseX, mouseY, 0, 360);
stroke(232,0,179);
line(mouseX, mouseY, 0, 390);
stroke(255,1,77);
line(mouseX, mouseY, 0, 420);
stroke(255,1,60);
line(mouseX, mouseY, 0, 450);
stroke(255,0,0);
line(mouseX, mouseY, 0, height);

ellipse(mouseX, mouseY - 10, 70, 70);


}
