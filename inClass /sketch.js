var numSpaceShips = 20
var spaceShipX = [];
var spaceShipY = [];
var spaceShipS = [];
var spaceShipSpeed = [];
var spaceShipColor = [];
var speed = 2;
function setup() {
	createCanvas(640, 360);
	
	noStroke();
	
    for (var i=0; i<numSpaceShips; i++)
	{
      var x = random(0, width);
      spaceShipX.push(x);
      var y = random( 0, height);
      spaceShipY.push(y);
      var s = random(20, 50);
      spaceShipS.push(s);
      spaceShipColor.push(color(
      random(0,255),
      random(0,255),
      random(0,255)
      ));
      spaceShipSpeed.push(random(2,10));
        
      
    }
}
function draw(){
    background(0);
//     for (var i=0; i<numSpaceShips; i++) {
//      fill(spaceShipColor[i]);
//      ellipse(spaceShipX[i],spaceShipY[i],spaceShipS[i]);
//      spaceShipX[i] += spaceShipSpeed [i];
//      if (spaceShipX[i]-spaceShipS[i]/2>width){
//          spaceShipX[i] = -spaceShipS[i]/2
//      }
//     }
    spaceship(100,100,50);
    spaceship(300,200,90);
}

function spaceship(x,y,s){
   rect(x,y,s*2,s);
}

