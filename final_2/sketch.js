let calories = 0;
let font;
let backgroundColor;
let bg, bg1;
let state = 0;
let scenes = {
//    start:{
//        nextScene: "base",
//    }
    base: {
        
        title: "Pick your base",
        nextScene: "toppings",
        choices: [
            {
                img: "img/base1.png",
                cal: 80,
                x: 65,
                y: 130
            },
            {
                img: "img/base2.png",
                cal: 100,
                x: 290,
                y: 130
            },
            {
                img: "img/base2.png",
                cal: 120,
                x: 515,
                y: 130
            }
        ]
    },
    toppings: {

    }
};
let currentScene = "base";
//var buttons = [btnStart, btnNext, btnReset, btnRetry];
let select_sfx;

function preload() {
    font = loadFont('fonts/Nunito-Bold.ttf');
    // select_sfx = loadSound("sfx/select3.wav");
    bg = loadImage("img/bg.png");
    bg1 = loadImage("img/bg1.png");

    for (var s in scenes) {
        let scene = scenes[s];
        for (var c in scene.choices) {
            let choice = scene.choices[c];
            choice.button = new cItems(choice.img, choice.x, choice.y, choice.cal);

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
        }
    }
}

////items object
function cItems(tImg, tName, tPosX, tPosY, tCal) {
    //Properties
    this.img = loadImage(tImg);
    this.name = tName;
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
            calories += this.cal;

        }
    }
}

function mousePressed() {
    //    for (var i = 0; i < buttons.length; i++) {
    //        console.log(buttons[i])
    //        buttons[i].clicked();
    //    }
    btnStart.clicked();
    btnNext.clicked();
    btnBack.clicked();
    btnReset.clicked();
    btnRetry.clicked();
    
    scenes[currentScene].choices.forEach(function (choice) {
        choice.button.click();
    });

}

function start() {
    background(bg1);
    btnStart.display();
    textFont(font, 20);
    fill(0);
    text("calories = " + calories, 30, 90);
}

function draw() {
    if (state == 0) {
        start(); //start
    } else if (state == 1) {
        menu("base"); // menu_base(); //base
    } else if (state == 2) {
        menu("flavor"); //menu_flavor(); //flavor
    } else if (state == 3) {
        menu("toppings"); //menu_toppings(); //toppings
    } else if (state == 4) {
        menu("calories"); //menu_calories(); //calories
    } else if (state == 5) {
        menu("activity"); //menu_activity(); //activity
    } else if (state == 6) {
        menu("result"); //menu_result(); //result
    } else if (state == 7) {
        retry(); // try again
    }
}



function menu(scene) {
    background(bg);
    fill(255);
    textFont(font, 20);
    fill(0);
    text(scenes[scene].title, 320, 38);
    text("calories = " + calories, 30, 90);
    btnBack.display();
    btnNext.display();
    btnReset.display();
    scenes[scene].choices.forEach(function (choice) {
        choice.button.display();
    });
}

function menu_flavor() {
    background(bg);
    fill(0);
    textFont(font, 20);
    text("PICK YOUR FLAVOR", 320, 38);
    text("calories = " + calories, 30, 90);
    btnBack.display();
    btnNext.display();
    btnReset.display();
}

function menu_toppings() {
    background(bg);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("pick your toppings", 30, 50);
    text("calories = " + calories, 30, 90);
    btnBack.display();
    btnNext.display();
    btnReset.display();
}

function menu_calories() {
    background(bg);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("calories", 30, 50);
    text("calories = " + calories, 30, 90);
    btnBack.display();
    btnNext.display();
    btnReset.display();
}

function menu_activity() {
    background(bg);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("pick an activity", 30, 50);
    text("calories = " + calories, 30, 90);
    btnBack.display();
    btnNext.display();
    btnReset.display();
}

function menu_result() {
    background(bg);
    fill(255);
    textSize(24);
    textFont("sans-serif");
    text("result", 30, 50);
    btnBack.display();
    btnNext.display();
    btnReset.display();
}

function retry() {
    background(backgroundColor);
    btnRetry.display();

}
