
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height-20,800,20)
	paperBall = new Garbage(100,height-30)
	leftBin = new Dustbin(490, 620, 20, 100)
	downBin = new Dustbin(550, 670, 150, 20)
	rightBin = new Dustbin(610, 620, 20, 100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBall.display();
  ground.display();
  leftBin.display();
  rightBin.display();
  downBin.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	 Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:53,y:-58})  
	 }
   }
   
