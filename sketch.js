
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(340, 450, "#008080");
	bob2 = new bob(400, 450, "#40E0D0");
	bob3 = new bob(460, 450, "#AFEEEE");
	bob4 = new bob(520, 450, "#40E0D0");
	bob5 = new bob(580, 450, "#008080");
  
	sling1 = new Rope(bob1.body, { x: 340, y: 200 });
	sling2 = new Rope(bob2.body, { x: 400, y: 200 });
	sling3 = new Rope(bob3.body, { x: 460, y: 200 });
	sling4 = new Rope(bob4.body, { x: 520, y: 200 });
	sling5 = new Rope(bob5.body, { x: 580, y: 200 });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ffe6cc");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}


