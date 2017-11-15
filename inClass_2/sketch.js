var catImage;
var catVideo;

function setup() {
	createCanvas(640, 360, WEBGL);
//    catVideo = createVideo("img/cat.mp4");
    catImage = loadImage("img/cat.jpg");
//    catVideo.loop();
//    catVideo.hide();
}

function draw() {
    background(51);
    texture(catImage);
    rotateX(1);
    rotateY(1);
    box(100, 100, 100);
    
}

