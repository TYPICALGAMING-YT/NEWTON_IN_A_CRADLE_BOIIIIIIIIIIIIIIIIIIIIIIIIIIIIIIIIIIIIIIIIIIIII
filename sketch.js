
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  ground1 = new Ground(400,100,300,40);
  sling1= new rope(bob1.body,ground1.body,-50*2,0);
  sling2= new rope(bob2.body,ground1.body,-25*2,0);
  sling3= new rope(bob3.body,ground1.body,-0*2,0);
  sling4= new rope(bob4.body,ground1.body,25*2,0);
  sling5= new rope(bob5.body,ground1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  background("white");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  

  keyPressed();
  drawSprites ();
}
 
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20 ,y:-20}); } 
} 




