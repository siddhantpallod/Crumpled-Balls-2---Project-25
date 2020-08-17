const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper1 = new Paper(400,300);

	ground = new Ground();

	dustbin = new Dustbin();
  
	

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);

  paper1.display();
  ground.display();
  dustbin.display();
  
  
  drawSprites();

  
}


function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x :700, y:-1100});	
	}
}


