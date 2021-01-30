
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy, boyImg;
var tree, treeImg;
var stone;
var mango1;

function preload()
{
	boyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1320, 575);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(660, 560, 1340, 20);

	stone = new Stone(170, 290, 150);

	boy = createSprite(150, 490, 40, 90);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	tree = new Tree(950, 290, 40, 80);
	//tree.addImage(treeImg);
	tree.scale = 0.01;

	mango1 = new Mango(960, 280, 50);
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  Engine.update(engine);
  
 ground.display();
 tree.display();	
 stone.display();
 mango1.display();

 drawSprites();
}

//function keyPressed(){
//	if(keyCode===32){
  //  Matter.Body.setPosition(stone.body, {x:235, y:420});
//}
	
//function mouseDragged(){

//}