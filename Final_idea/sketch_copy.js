/* states
0 start
1 base
2 flavor
3 toppings
4 calories
5 activity
6 result
*/

var menus = [
	{
		titles: [
			"let's start"
		],
		buttons: [
			{
                text: "Start",
				state: 1
			}
		]
	},
	{
		titles: [
			"base",
		],
		buttons: [
            {
                text: "Next",
				state: 2
			}
		]
	},
	{
		titles: [
			"flavor",
		],
		buttons: [
			{
                text: "Back",
				state: 1
			},
            {
				text: "Next",
				state: 3
			}
		]
	},
    {
		titles: [
			"toppings",
		],
		buttons: [
			{
				text: "Back",
				state: 2
			},
            {
				text: "Next",
				state: 4
			}
		]
	},
    {
		titles: [
			"calories",
		],
		buttons: [
			{
				text: "Back",
				state: 3
			},
            {
				text: "Next",
				state: 5
			}
		]
	},
    {
		titles: [
			"activity",
		],
		buttons: [
			{
				text: "Back",
				state: 4
			},
            {
				text: "Next",
				state: 6
			}
		]
	},
    {
		titles: [
			"result",
		],
		buttons: [
			{
				text: "Try again",
				state: 1
			}
		]
	},
];
//var bases = [
//    {
//        base:"ice cream", 
//        calories: 230
//    },
//    {
//        
//    }"milkshake", "frozen yogurt"];
//
//bases[0].base, bases[0].calories
//
//

function setup() {
    createCanvas(800, 500)
    background(0);
    var button;
    button = loadImage("img/but1.png");  // Load the image
    button.addAnimation("idle", "img/but1.png");
    button.addAnimation("hover", "img/but2.png");
    button.addAnimation("click", "img/but3.png");
}

//function start() {
// for (let j = 0; j < menu.buttons.length; j++) {
//			const b = menu.buttons[j];
//			const button_back = createSprite(440, 120 + j * 120);
//			button.addAnimation("idle", "img/but1.png");
//			button.addAnimation("hover", "img/but2.png");
//			button.addAnimation("click", "img/but3.png");
//			button.clicked = false;
//			button.mouseActive = true;
//			button.state = b.state;
//			menu.sprites.add(button_back);
//		} 


//function draw() {
//    if (state == 0) {
//		start(0); //start
//	} else if (state == 1) {
//		menu(1); //base
//	} else if (state == 2) {
//		menu(2); //flavor
//	} else if (state == 3) {
//		menu(3); //toppings
//	} else if (state == 4) {
//		menu(4); //calories
//	} else if (state == 5) {
//		menu(5); //activity
//	} else if (state == 6) {
//		menu(6);  //result
//	} else if (state == 7) {
//		menu(7); // try again
//	}
//}
//function menu(index) {
//	camera.off();
//	background(51);
//	fill(255);
//	textSize(24);
//	textFont("sans-serif");
//	textAlign(LEFT);
//	for (let i = 0; i < menus[index].titles.length; i++) {
//		text(menus[index].titles[i], 40, 40 + i * 60, width/3, height);
//	}
//	
//	for (let i = 0; i < menus[index].sprites.length; i++) {
//		const button = menus[index].sprites[i];
//		button.display();
//		textFont("Monaco");
//		textAlign(CENTER);
//		text(button.text, button.position.x, button.position.y);
//		if (button.mouseIsPressed) {
//			button.changeAnimation("click");
//			button.clicked = true;
//		} else if (button.mouseIsOver) {
//			button.changeAnimation("hover");
//			if (button.clicked) {
//				gameState = button.state;
//				if (index == 2 || index == 3) {
//					reset();
//					buildLevel();
//				}
//			}
//		} else {
//			button.changeAnimation("idle");
//			button.clicked = false;
//		}
//	}
	function changeBG() {
  var val = random(255);
  background(val);
}
//}
//function myfunction(){
//    
//}
//function mouseClicked() {
//    design();
//}