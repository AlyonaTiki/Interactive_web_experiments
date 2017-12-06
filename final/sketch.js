var backgroundColor;
var btnStart;
var state = 0;

function preload(){
   btnStart = createImg("img/but1.png") 
}
function setup() {
    createCanvas(800, 500);
    backgroundColor = color(255, 255, 255);
    
}

function start() {
    background(backgroundColor);

  btnStart.position(100, 100).mousePressed(menu_base);

}
function draw(){
        if (state == 0) {
    		start(); //start
    	} else if (state == 1) {
    		menu_base(); //base
    	} else if (state == 2) {
    		menu_flavor(); //flavor
    	} else if (state == 3) {
    		menu_toppings(); //toppings
    	} else if (state == 4) {
    		menu_calories(); //calories
    	} else if (state == 5) {
    		menu_activity(); //activity
    	} else if (state == 6) {
    		menu_result();  //result
    	} else if (state == 7) {
    		retry(); // try again
    	}
    
}



function menu_base() { 
    background(51);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("pick your base", 30, 50);
}
function menu_toppings() { 
    background(51);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("pick your toppings", 30, 50);
    //back button
    if (mouseX >= 60 && mouseX <= 60 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectBack2 = true;
    } else {
        isOverRectBack2 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectBack2 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(60, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("back", 60 +25  , 430+ 30);
    //next button
    if (mouseX >= 640 && mouseX <= 640 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectNext2 = true;
    } else {
        isOverRectNext2 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectNext2 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(640, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("next", 640 +25  , 430+ 30);
}

function menu_calories() { 
    background(51);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("calories", 30, 50);
    //back button
    if (mouseX >= 60 && mouseX <= 60 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectBack3 = true;
    } else {
        isOverRectBack3 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectBack3 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(60, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("back", 60 +25  , 430+ 30);
    //next button
    if (mouseX >= 640 && mouseX <= 640 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectNext3 = true;
    } else {
        isOverRectNext3 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectNext3 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(640, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("next", 640 +25  , 430+ 30);
}

function menu_activity() { 
    background(51);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("pick an activity", 30, 50);
    //back button
    if (mouseX >= 60 && mouseX <= 60 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectBack4 = true;
    } else {
        isOverRectBack4 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectBack4 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(60, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("back", 60 +25  , 430+ 30);
    //next button
    if (mouseX >= 640 && mouseX <= 640 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectNext4 = true;
    } else {
        isOverRectNext4 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectNext4 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(640, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("next", 640 +25  , 430+ 30);
}

function menu_result() { 
    background(51);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("result", 30, 50);
    //back button
    if (mouseX >= 60 && mouseX <= 60 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectBack5 = true;
    } else {
        isOverRectBack5 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectBack5 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(60, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("back", 60 +25  , 430+ 30);
    //next button
    if (mouseX >= 640 && mouseX <= 640 + 100 && mouseY >= 430 && mouseY <= 430 + 50) {
        isOverRectNext5 = true;
    } else {
        isOverRectNext5 = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectNext5 == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(640, 430, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("next", 640 +25  , 430+ 30);
}
function retry() {
    background(backgroundColor);

    // check if mouse is inside the rectangle
    if (mouseX >= width / 2 - 50 && mouseX <= width / 2 - 50 + 100 && mouseY >= height / 2 && mouseY <= height / 2 + 50) {
        isOverRectRetry = true;
    } else {
        isOverRectRetry = false;
    }

    // draw a rectangle
    rectMode(CORNER);
    noStroke();
    strokeWeight(5);
    if (isOverRectRetry == true) {
        fill(100);
        cursor(HAND);
    } else {
        fill(200);
        cursor(ARROW);
    }
    rect(width / 2 - 50, height / 2, 100, 50);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("retry", width / 2 - 25 , height / 2+ 30);

}
function mousePressed() {
  
}
