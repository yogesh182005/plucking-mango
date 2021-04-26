
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree,treeimg;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,amngo8,mango9,mango10;
var attach;

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();
	stone=new Stone(100,460,50);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,225,35);
	mango3=new Mango(870,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(920,305,35);

	

	attach=new Throw(stone.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42

	boy=createSprite(160,550)
	boy.addImage(boyimg)
	boy.scale=0.125

	Engine.run(engine);
  
}


function draw() {
  
  background(105);
  
  fill("black")
  textSize(18);
 

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);


 





  ground.display();
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


function detectCollision(lstone,lmango){
	if(lstone.body.position.x-lmango.body.position.x<lmango.diametre+lstone.diametre && 
		lmango.body.position.x-lstone.body.position.x<lmango.diametre+lstone.diametre && 
		lstone.body.position.y-lmango.body.position.y<lmango.diametre+lstone.diametre && 
		lmango.body.position.y-lstone.body.position.y<lmango.diametre+lstone.diametre ){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465})
		attach.Launch(stone.body);
	}
}