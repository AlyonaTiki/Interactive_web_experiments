let calories = 0;
let font;
let backgroundColor;
let bg, bg1;
let state = 0;
var circles = [];

var numShapes = 20;
let scenes = {
    start: {
        nextScene: "base",
    },
    base: {
        titles: [
            {
                text: "Pick your base",
                x: 320,
                y: 38
            }
        ],
        nextScene: "flavor",
        cal: 0,
        indicator: "img/ind5.png",
        choices: [
            {
                img: "img/base1.png",
                cal: 80,
                x: 65,
                y: 160
            },
            {
                img: "img/base2.png",
                cal: 100,
                x: 290,
                y: 160
            },
            {
                img: "img/base3.png",
                cal: 120,
                x: 515,
                y: 160
            }
        ]
    },
    flavor: {
        titles: [
            {
                text: "Pick your flavor",
                x: 320,
                y: 38
            }
        ],
        nextScene: "toppings",
        cal: 0,
        indicator: "img/ind4.png",
        choices: [
            {
                img: "img/vanilla.png",
                cal: 130,
                x: 90,
                y: 150
            },
            {
                img: "img/coconut.png",
                cal: 135,
                x: 315,
                y: 150
            },
            {
                img: "img/mint.png",
                cal: 140,
                x: 540,
                y: 150
            },
            {
                img: "img/mango.png",
                cal: 135,
                x: 200,
                y: 260
            },
            {
                img: "img/lemon.png",
                cal: 140,
                x: 425,
                y: 260
            }
        ]
    },
    toppings: {
        titles: [
            {
                text: "Pick your toppings",
                x: 320,
                y: 38
            },
            {
                text: "click to add sprinkles",
                x: 400,
                y: 200
            },
        ],
        nextScene: "calories",
        indicator: "img/ind3.png",
        cal: 0,
        choices: [
            {
                img: "img/ice_1.png",
                cal: 0,
                x: 265,
                y: 160
            },
        ]
    },
    calories: {
        titles: "Here is your calories",
        //        text: "click to add sprinkles",
        nextScene: "activity",
        indicator: "img/ind2.png",
        cal: 0,

    },

};
let sprinkles = 0;
let currentScene = "start";
//var buttons = [btnStart, btnNext, btnReset, btnRetry];
let select_sfx;

function preload() {
    font = loadFont('fonts/Nunito-Bold.ttf');
    select_sfx = loadSound("sfx/select3.wav");
    bg = loadImage("img/bg.png");
    bg1 = loadImage("img/bg1.png");


    for (var s in scenes) {
        let scene = scenes[s];
        if (scene.indicator) {
            scene.indicatorImage = loadImage(scene.indicator);
        }

        for (var c in scene.choices) {
            let choice = scene.choices[c];
            choice.button = new cItems(choice.img, choice.x, choice.y, choice.cal, s);

        }
    }
}

function setup() {
    createCanvas(800, 500);
    background(bg);
    //buttons
    btnStart = new cButtons("img/start.png", "Start", 340, 240);
    btnBack = new cButtons("img/back.png", "Back", 40, 420);
    btnNext = new cButtons("img/next.png", "Next", 640, 420);
    btnReset = new cButtons("img/reset.png", "Reset", 340, 420);
    btnRetry = new cButtons("img/retry.png", "Retry", 400, 250);
    btnClick = new cButtons("img/click_here.png", "Click_here", 340, 300);
}


//buttons object
function cButtons(tImg, tName, tPosX, tPosY) {
    //Properties
    this.img = loadImage(tImg);
    this.name = tName;
    this.PosX = tPosX;
    this.PosY = tPosY;
    //Methonds
    //Draw the button based on Properties
    this.display = function () {
        image(this.img, this.PosX, this.PosY);
    }
    //Type of button based on name
    this.clicked = function () {
        //Calculate clicable position
        if (mouseX >= this.PosX && mouseX <= this.PosX + 115 && mouseY >= this.PosY && mouseY <= this.PosY + 46) {
            //callback();

            if (this.name == "Next") {
                state++;
            }
            if (this.name == "Back") {
                state--;
            }
            if (this.name == "Reset") {
                state = 0;
            }
            if (this.name == "Start") {
                state = 1;
            }
            if (this.name == "Retry") {
                state = 1;
            }
            if (this.name == "Click_here") {
                for (var i = 10; i < numShapes; i++) {
                    var x = new Circle();
                    x.addCal();
                    circles.push(x);
                       
                }
                
            }
        }
    }
}
//items object
function cItems(tImg, tPosX, tPosY, tCal, s) {
    //Properties
    this.img = loadImage(tImg);
    this.PosX = tPosX;
    this.PosY = tPosY;
    this.cal = tCal;
    //Methonds
    //Draw items based on Properties
    this.display = function () {
        image(this.img, this.PosX, this.PosY);
    }
    //Type of item based on name
    this.clicked = function () {
        select_sfx.play();
        //Calculate clicable position
        if (mouseX >= this.PosX && mouseX <= this.PosX + 244 && mouseY >= this.PosY && mouseY <= this.PosY + 244) {
            // calories += this.cal;
            scenes[s].cal = this.cal;
        }
    }
}

function mouseReleased() {
    if (scenes[currentScene].choices) {
        scenes[currentScene].choices.forEach(function (choice) {
            choice.button.clicked();
        });
    }

    btnStart.clicked();
    btnNext.clicked();
    btnBack.clicked();
    btnReset.clicked();
    btnRetry.clicked();
    btnClick.clicked();
}

function start() {
    background(bg1);
    btnStart.display();
    textFont(font, 20);
    fill(0);
}

function draw() {
    if (state == 0) {
        start(); //start
    } else if (state == 1) {
        if (currentScene != "base") currentScene = "base";
        menu("base"); // menu_base(); //base
    } else if (state == 2) {
        if (currentScene != "flavor") currentScene = "flavor";
        menu("flavor"); //menu_flavor(); //flavor
    } else if (state == 3) {
        if (currentScene != "toppings") currentScene = "toppings";
        menu("toppings"); //menu_toppings(); //toppings
    } else if (state == 4) {
        if (currentScene != "calories") currentScene = "calories";
        menu("calories"); //menu_calories(); //calories
    } else if (state == 5) {
        menu("activity"); //menu_activity(); //activity
    } else if (state == 6) {
        menu("result"); //menu_result(); //result
    } else if (state == 7) {
        retry(); // try again
    }
    //debug(sprinkles);
}



function menu(scene) {
    background(bg);
    //    addToping() 
    fill(255);
    textFont(font, 23);
    image(scenes[scene].indicatorImage, 65, 75);
    for (let i = 0; i < scenes[scene].titles.length; i++) {
        text(scenes[scene].titles[i].text, 320, 38);
    }

    //    text(scenes[toppings].instructions, 320, 38);
    fill(0);
    text("calories = " + (scenes["base"].cal + scenes["flavor"].cal + scenes["toppings"].cal + sprinkles), 40, 60);
    btnBack.display();
    btnNext.display();
    btnReset.display();

    if (scene == "toppings") {
        btnClick.display();
        for (var i = 0; i < circles.length; i++) {
            circles[i].display();
        }
    }
    scenes[scene].choices.forEach(function (choice) {
        choice.button.display();
    });
}

function retry() {
    background(backgroundColor);
    btnRetry.display();
}

function Circle() {
    this.x = random(320, 480);
    this.y = random(160, 300);
    this.clr = random(["red", "black", "green"]);
    this.size = random(3, 6);
    this.cal = 20;
    this.addCal = function (){
        sprinkles = + this.cal;
    }
    noStroke();
    this.display = function () {
        fill(this.clr);
        ellipse(this.x, this.y, this.size);
    }
}

//    noStroke();
//    for (var i = 10; i < numShapes; i++) {
//        fill(232, 41, 59);
//        ellipse(pX1, pY1, 3, 3);
//        fill(6, 219, 84);
//        ellipse(pX2, pY2, 6, 6);
//        fill(64, 222, 247);
//        ellipse(pX3, pY3, 6, 6);
//        fill(249, 208, 0);
//        ellipse(pX4, pY4, 6, 6);
//        fill(249, 9, 73);
//        ellipse(pX, pY, 4, 4);
//        fill(2, 122, 226);
//        ellipse(pX5, pY5, 4, 4);
//    }
//}
function debug(deb){
   console.log(deb);
}