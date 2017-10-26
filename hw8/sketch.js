var myFonts = [
		'Lobster',
		'Gloria Hallelujah',
		'Fascinate Inline'
];
function setup() {
    createCanvas(518, 600)
    design();
    img = loadImage("Tote-bag.png");
}

function design() {
    noStroke();
    var w = width;
    var h = height;
    var x = random(0, 190);
    var rad = random(110, 130);
    var r = random(0, 255);
    var g = random(0, 40);
    var g1 = random(0, 190);
    var b = random(0, 73);
    var a = random(0, 255);
    var x = random(30, 300);
    var y = random(30, 300);
    var eye1X = random(w/2+15, w/2+5);
    var eyeY = random(h/2+75, h/2+65);
    var eye2X = random(w/2+25, w/2+35);
    
    var pumpkinEye1X = random(w/2-10, w/2-20);
    var pumpkinEye2X = random(w/2+10, w/2+20);
    var pumpkinEye1Y = random(h/2+58, h/2+73);
    var pumpkinEye2Y = random(h/2+58, h/2+73);
    
    var eyeSkullx1 = random(w/2+11, w/2+35);
    var eyeSkullx2 = random(w/2-11, w/2-35);
    var eyeSkullY = random(h/2+64, h/2+34);
    
    var randomFont = myFonts[floor(random(0,3))];
    
    textFont(randomFont);
    textAlign(CENTER);

    var shape = Math.floor(random(0, 4));
if (shape == 0) {
// pumpkin color
        var f = Math.floor(random(0, 3));
		if (f == 0) {
				fill(247,g, 27);
			} else if (f == 1) {
				fill(255,g1, 0);
			} else if (f == 2) {
				fill(185,2, b);
			}
        background(0);
// pumpkin
        noStroke();
        ellipse(w/2, h/2+115, rad, rad+40);
        ellipse(w/2-40, h/2+105, rad-10, rad+50);
        ellipse(w/2+40, h/2+105, rad-10, rad+50);
        ellipse(w/2+70, h/2+105, rad-10, rad+50);
        ellipse(w/2-70, h/2+105, rad-10, rad+50);
        fill("green");
        rect(w/2-10, h/2+13, 15, 30, 3);
// mouth
        fill("black");
        rect(w/2-140, h/2+105, 270, 27);
        rect(w/2-140, h/2+90, 40, 27);
        rect(w/2-60, h/2+90, 40, 27);
        rect(w/2, h/2+90, 40, 27);
        rect(w/2+70, h/2+90, 60, 27);
        rect(w/2-140, h/2+120, 40, 27);
        rect(w/2-20, h/2+120, 40, 27);
        rect(w/2, h/2+120, 30, 27);
        rect(w/2+70, h/2+120, 40, 27);
// eyes
        triangle(w/2-50, h/2+40,pumpkinEye1X,pumpkinEye1Y,w/2-60,h/2+60)
        triangle(w/2+50, h/2+40,pumpkinEye2X,pumpkinEye2Y,w/2+60,h/2+60)
// text
        noStroke();
        fill("orange");
        textSize(29);
        text("TRICK OR TREAT", w/2 , h/2 + 129);
    } else if (shape == 1) {
// spider's web
        strokeWeight(1)
        background(255);
        stroke(0);
        line(w/2-40, h/2+155, w/2+160, h/2+130);
        line(w/2-40, h/2+155, w/2+160, h/2+80);
        line(w/2-40, h/2+155, w/2+160, h/2+30);
        line(w/2-40, h/2+155, w/2+160, h/2-20);
        line(w/2-40, h/2+155, w/2+90, h/2-20);
        line(w/2-40, h/2+155, w/2+40, h/2-20);
        line(w/2-40, h/2+155, w/2-10, h/2-20);
        line(w/2-40, h/2+155, w/2-50, h/2-20);
        line(w/2-40, h/2+155, w/2-100, h/2-20);
        line(w/2-40, h/2+155, w/2-170, h/2-20);
        line(w/2-40, h/2+155, w/2-170, h/2+50);
        line(w/2-40, h/2+155, w/2-170, h/2+100);
        line(w/2-40, h/2+155, w/2-170, h/2+150);
        noFill();
        arc(w/2-40, h/2+155, 50 , 50, PI, TWO_PI);
        arc(w/2-40, h/2+155, 110 , 110, PI, TWO_PI);
        arc(w/2-40, h/2+155, 170 , 170, PI, TWO_PI);
        arc(w/2-40, h/2+155, 240 , 240, PI, TWO_PI);
        arc(w/2-40, h/2+155, 320 , 320, PI, TWO_PI);
        arc(w/2-40, h/2+155, 400 , 400, PI, TWO_PI);
// spider small
        fill(0);
        ellipse(w/2+80, h/2+200, 20, 20);
        ellipse(w/2+80, h/2+215, 10, 10);
        line(w/2+80, h/2+215, w/2+95, h/2+218);
        line(w/2+95, h/2+218, w/2+103, h/2+225);
        line(w/2+80, h/2+215, w/2+93, h/2+211);
        line(w/2+93, h/2+211, w/2+103, h/2+217);
        line(w/2+80, h/2+215, w/2+93, h/2+206);
        line(w/2+93, h/2+206, w/2+103, h/2+210);
        
        line(w/2+80, h/2+215, w/2+65, h/2+218);
        line(w/2+65, h/2+218, w/2+57, h/2+225);
        line(w/2+80, h/2+215, w/2+63, h/2+211);
        line(w/2+63, h/2+211, w/2+57, h/2+217);
        line(w/2+80, h/2+215, w/2+63, h/2+206);
        line(w/2+63, h/2+206, w/2+55, h/2+210);
        line(w/2+80, h/2+215, w/2+80, h/2-40);
// spider big
        ellipse(w/2+20, h/2+70, 50, 47);
        strokeWeight(2)
        line(w/2+20, h/2+70, w/2+60, h/2+65);
        line(w/2+60, h/2+65, w/2+75, h/2+85);
        line(w/2+20, h/2+70, w/2+60, h/2+75);
        line(w/2+60, h/2+75, w/2+75, h/2+95);
        line(w/2+20, h/2+70, w/2+60, h/2+85);
        line(w/2+60, h/2+85, w/2+75, h/2+105);
        
        line(w/2+20, h/2+70, w/2-20, h/2+65);
        line(w/2-20, h/2+65, w/2-35, h/2+85);
        line(w/2+20, h/2+70, w/2-20, h/2+75);
        line(w/2-20, h/2+75, w/2-35, h/2+95);
        line(w/2+20, h/2+70, w/2-20, h/2+85);
        line(w/2-20, h/2+85, w/2-35, h/2+105);
// spider's eyes
        noStroke();
        fill(255)
        ellipse(w/2+10, h/2+70, 20, 20);
        ellipse(w/2+30, h/2+74, 20, 20);
        fill(0)
        ellipse(eye1X, eyeY, 5, 5);
        ellipse(eye2X, eyeY, 5, 5); 
// text
        fill("orange");
        textSize(27);
        text("TRICK OR TREAT", w / 2, h / 2 + 179);
        
    } else if (shape == 2) {
        var f2 = Math.floor(random(0, 3));
		if (f2 == 0) {
				fill(247,g, 27);
			} else if (f2 == 1) {
				fill(255,g1, 0);
			} else if (f2 == 2) {
				fill(185,2, b);
			}
        background(200);
        rect(w/2-105, h/2+225, 210, 35);
        rect(w/2-85, h/2+185, 170, 45);
        rect(w/2-65, h/2+95, 130, 125, 45);
        rect(w/2-10, h/2+5, 21, 120, 9);
        rect(w/2-50, h/2+45, 100, 21, 9);
// text
        fill(0);
        textSize(37);
        text("RIP", w / 2, h / 2 + 150);
// spider small
        fill(0);
        stroke(0)
        strokeWeight(1)
        ellipse(w/2+80, h/2+200, 20, 20);
        ellipse(w/2+80, h/2+215, 10, 10);
        line(w/2+80, h/2+215, w/2+95, h/2+218);
        line(w/2+95, h/2+218, w/2+103, h/2+225);
        line(w/2+80, h/2+215, w/2+93, h/2+211);
        line(w/2+93, h/2+211, w/2+103, h/2+217);
        line(w/2+80, h/2+215, w/2+93, h/2+206);
        line(w/2+93, h/2+206, w/2+103, h/2+210);
// spider's legs      
        line(w/2+80, h/2+215, w/2+65, h/2+218);
        line(w/2+65, h/2+218, w/2+57, h/2+225);
        line(w/2+80, h/2+215, w/2+63, h/2+211);
        line(w/2+63, h/2+211, w/2+57, h/2+217);
        line(w/2+80, h/2+215, w/2+63, h/2+206);
        line(w/2+63, h/2+206, w/2+55, h/2+210);
        line(w/2+80, h/2+215, w/2+80, h/2-40);
        
    } else if (shape == 3) {
// skull
        background(0);
        noStroke();
        fill(255)
        rect(w/2-40, h/2+90, 80, 100, 9)
        ellipse(w/2, h/2+80, 150, 160);
        fill(0);
        ellipse(w/2+90, h/2+90, 50, 60);
        ellipse(w/2-90, h/2+90, 50, 60);
        ellipse(w/2+80, h/2+140, 60, 60);
        ellipse(w/2-80, h/2+140, 60, 60);
// skull's neck
        fill(255)
        rect(w/2-15, h/2+195, 35, 22,5);
        rect(w/2-15, h/2+225, 35, 22,5);
// skull's mouth
        fill("black");
        rect(w/2-140, h/2+125, 270, 27);
       
        rect(w/2-40, h/2+110, 15, 27);
        rect(w/2-10, h/2+110, 15, 27);
        rect(w/2+20, h/2+110, 15, 27);
        
        rect(w/2-30, h/2+140, 15, 27);
        rect(w/2-10, h/2+140, 15, 27);
        rect(w/2+20, h/2+140, 15, 27);

// skull's eyes
        ellipse(w/2+30, h/2+50, 40, 45);
        ellipse(w/2-30, h/2+50, 40, 45);
        fill(255);
        ellipse(eyeSkullx1, eyeSkullY, 6, 6);
        ellipse(eyeSkullx2, eyeSkullY, 6, 6);
// skull's nose
        fill(0)
        triangle(w/2+3, h/2+100,w/2+3, h/2+70, w/2+13, h/2+100)
        triangle(w/2-3, h/2+100, w/2-3, h/2+70, w/2-13, h/2+100)
// text
        noStroke();
        fill("orange");
        textSize(27);
        text("TRICK OR TREAT", w/2, h/2+149);
    }
        fill(r, g, b)
        rect(0, 0, w, h/2-18);
}

function draw() {
    image(img, 0, 0);
}
function mouseClicked() {
    design();
}