
function setup() {
createCanvas(640, 480);
}

var point = false;
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("black");

	/* draw lines for quadrants */
	strokeWeight(3);
	stroke("white");

	if (mouseX > width/2 && mouseY > height/2) {
		if (point) {
		background("lightgreen");
	}
		rect(width/2, height/2, width++, height++);
	} else if (mouseX < width/2 && mouseY > height/2) {
		if (point) {
		background("grey");
	}
		rect(0, height/2, width/2, height++);
	} else if (mouseX > width/2 && mouseY < height/2) {
		if (point) {
		background("lightpink");
	}
		rect(width/2, 0, width++, height/2);
	} else {
		if (point) {
		background("lightblue");
	}
		rect(0, 0, width/2, height/2);
	}
}
