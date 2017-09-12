
    function setup() { 
	createCanvas(640, 480);
    var base = color(125, 129, 135);
    var lightParts = color(182, 188, 196);
    var darkParts = color(87, 91, 96);
    var white = color(256, 256, 256);    
	background("white");
	noStroke();
	
    //filmReel
    fill(darkParts);
    rect(200, 100, 100, 291, 3);
    fill(white);
    rect(215, 110, 70, 60, 2);
    rect(215, 180, 70, 60, 2); 
    rect(215, 250, 70, 60, 2); 
    rect(215, 320, 70, 60, 2);
    rect(204, 370, 7, 11, 1);
    rect(204, 345, 7, 11, 1);
    rect(204, 320, 7, 11, 1);
    //smallRectsleft    
    rect(204, 250, 7, 11, 1);
    rect(204, 275, 7, 11, 1);
    rect(204, 300, 7, 11, 1);
        
    rect(204, 230, 7, 11, 1);
    rect(204, 205, 7, 11, 1);
    rect(204, 180, 7, 11, 1);
        
    rect(204, 160, 7, 11, 1);
    rect(204, 135, 7, 11, 1);
    rect(204, 110, 7, 11, 1);
        
    //smallRectsRight      
    rect(288.5, 250, 7, 11, 1);
    rect(288.5, 275, 7, 11, 1);
    rect(288.5, 300, 7, 11, 1);
        
    rect(288.5, 230, 7, 11, 1);
    rect(288.5, 205, 7, 11, 1);
    rect(288.5, 180, 7, 11, 1);
        
    rect(288.5, 160, 7, 11, 1);
    rect(288.5, 135, 7, 11, 1);
    rect(288.5, 110, 7, 11, 1);
    
	// body 
	fill(base);
	rect(280, 300, 180, 120, 7);
    rect(345, 285, 50, 25, 6);    
    rect(425, 293, 20, 25, 6);
    rect(360, 273, 20, 15, 8);
    rect(335, 200, 70, 80, 6);
    rect(320, 150, 100, 70, 6);
    fill(white);
    rect(350, 288, 40, 10, 4);
    rect(330, 160, 80, 50, 3);
    fill(lightParts);
    rect(350, 240, 40, 15, 4);
        
    // lens 
	fill(darkParts);
	ellipse(370, 375, 100, 100);
    fill(lightParts);
    ellipse(370, 375, 80, 80);
    fill(white);
    ellipse(350, 360, 10, 10);  
        
    // bodyDetails 
	fill(lightParts);
	rect(290, 308, 25, 15, 3);   
        
    }
function draw() {
   

     
}
