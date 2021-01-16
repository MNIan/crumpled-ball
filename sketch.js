
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(1200, 650)
	dustbin = new Dustbin(200, 400, 40)
	ground = new Ground(width/2, 670, width, 20)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {width: 1200,
			height: 700,
			wireframes: false
		}
	})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}



