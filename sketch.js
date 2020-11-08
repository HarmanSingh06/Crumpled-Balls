
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,500);
	//Engine.run(engine);
	engine = Engine.create();
	world = engine.world;

	//Creating Ground
	ground = new Ground(800,450,9000,10);
	//Create the Bodies Here.
	box1 = new Box(1400,380,20,100,"green");
	box3 = new Box(1327,435,150,20,"green");
	box2 = new Box(1250,380,20,100,"green");
	ball = new Ball(200,200,30,30,PI/7);
	
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(234);
  
  //Displaying Everything
  box1.display();
  ground.display();
  ball.display();
  box2.display();
  box3.display();


  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body, ball.body.position, {x:70,y:-70});
	}
  }




