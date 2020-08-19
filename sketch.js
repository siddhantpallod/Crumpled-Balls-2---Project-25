const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin;
var wall;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	wall = createSprite(1200,460,20,200);
   
   wall.shapeColor = "green";	

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
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x :800, y:-950});	
	}
}


