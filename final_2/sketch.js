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
                text: "Pick your base"
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
                text: "Pick your flavor"
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
                img: "img/green.png",
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
                img: "img/coffe.png",
                cal: 140,
                x: 425,
                y: 260
            }
        ]
    },
    toppings: {
        titles: [
            {
                text: "Add toppings"
            }
        ],
        nextScene: "calories",
        indicator: "img/ind3.png",
        cal: 0,
        choices: [
            {
                img: "img/base_sp.png",
                cal: 0,
                x: 365,
                y: 157
            },
        ]
    },
    calories: {
        titles: [
            {
                text: "Your calories"
            }
        ],
        nextScene: "result",
        indicator: "img/ind2.png",
        cal: 0,
        choices: [
            {
                img: "img/kcal.png",
                cal: 0,
                x: 130,
                y: 240
            }
        ]

    },
    retry: {
        nextScene: "base",
    },
};
let sprinkles = 0;
let currentScene = "start";
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
    btnStart = new cButtons("img/start.png", "Start", 340, 150);
    btnBack = new cButtons("img/back.png", "Back", 40, 420);
    btnNext = new cButtons("img/next.png", "Next", 640, 420);
    btnReset = new cButtons("img/reset.png", "Reset", 340, 420);
    btnRetry = new cButtons("img/retry.png", "Retry", 340, 420);
    btnClick = new cButtons("img/add.png", "Click_here", 130, 230);
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
    textFont(font, 25);
    fill(81, 4, 22);
    text("Ice cream customizer + Calories calculator", 170, 260)
    textFont(font, 20);
    text("Press start to begin", 300, 300)
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
    fill(81, 4, 22);
    textFont(font, 23);
    image(scenes[scene].indicatorImage, 185, 75);
    for (let i = 0; i < scenes[scene].titles.length; i++) {
        text(scenes[scene].titles[i].text, 330, 38);
    }
   
    text("calories = " + (scenes["base"].cal + scenes["flavor"].cal + sprinkles), 50, 60);

    if (scene == "base") {

        btnNext.display();
        btnReset.display();
    }

if (scene == "flavor") {
    btnBack.display();
    btnNext.display();
    btnReset.display();
}
if (scene == "toppings") {
    btnBack.display();
    btnNext.display();
    btnReset.display();
    btnClick.display();
    for (var i = 0; i < circles.length; i++) {
        circles[i].display();
    }
}
if (scene == "calories") {
    text("suggestions how to burn calories", 200, 190)
    textFont(font, 50);
    text("" + (scenes["base"].cal + scenes["flavor"].cal + sprinkles), 230, 300);
    textFont(font, 23);
    btnRetry.display();
    btnBack.display();
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
    c1 = color(232, 41, 59);
    c2 = color(6, 219, 84);
    c3 = color(64, 222, 247);
    c4 = color(249, 208, 0);
    c5 = color(132, 64, 33);
    c6 = color(2, 122, 226);
    c7 = color(255, 73, 122);
    this.x = random(420, 610);
    this.y = random(165, 390);
    this.clr = random([c1, c2, c3, c4, c5, c6, c7]);
    this.size = random(2, 6);
    this.cal = 20;
    this.addCal = function () {
        sprinkles += this.cal;
    }
    noStroke();
    this.display = function () {
        fill(this.clr);
        ellipse(this.x, this.y, this.size);
    }
}

function debug(deb) {
    console.log(deb);
}
