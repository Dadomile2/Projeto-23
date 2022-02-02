var helicopteroImage, helicopteroSprite, pacoteSprite,pacoteImage;
var pacoteBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopteroImage = loadImage("helicopter.png")
	pacoteImage = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	pacoteSprite = createSprite(width/2, 80, 10,10);
	pacoteSprite.addImage(pacoteImage)
	pacoteSprite.scale = 0.2

	helicopteroSprite = createSprite(width/2, 200, 10,10);
	helicopteroSprite.addImage(helicopteroImage)
	helicopteroSprite.scale = 0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	pacoteBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, pacoteBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition = width/2-100
 	boxY = 610;


 	boxleftSprite = createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase = createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor = color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite = createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  pacoteSprite.x = pacoteBody.position.x 
  pacoteSprite.y = pacoteBody.position.y 

  drawSprites();
}  

function keyPressed(){

  if (keyCode === LEFT_ARROW){
	    helicopteroSprite.x = helicopteroSprite.x -20;
	if(pacoteBody.position.y == 200 ) {
		 translation = {x:-20,y:0}
		 Matter.Body.translate(pacoteBody, translation)
  }
}
  if (keyCode === RIGHT_ARROW){
	    helicopteroSprite.x = helicopteroSprite.x +20;
	if(pacoteBody.position.y == 200 ) {
		translation = {x:+20,y:0} 
		Matter.Body.translate(pacoteBody, translation)
  }
}
 
  
  if (keyCode === DOWN_ARROW){
	Matter.Body.setStatic(pacoteBody,false)  
  }
}