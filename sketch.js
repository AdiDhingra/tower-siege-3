
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6;
var ground1,ground2
var backgroundImg
var attacker1,slingshot;
var score=1;
var bg = "sprites/1.jpg";
function preload()
{
	getBackgroundImg();
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	 ground1=new Ground(800,690,10000,10)
	 ground2=new Ground(500,400,300,10)
	 box1=new Box(450,380,50,50);
	 box2=new Box(500,380,50,50);
	 box3=new Box(550,380,50,50);
	 box4=new Box(530,330,50,50);
	 box5=new Box(480,330,50,50);
	 box6=new Box(510,280,50,50);
	 attacker1=new Attacker(200,400,60,60);
	 slingshot=new SlingShot(attacker1.body,{x:200, y:400});



	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  
  text("SCORE :"+score,750,40);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ground1.display();
  ground2.display();
  
  slingshot.display();
  attacker1.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(attacker1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(attacker1.body)
      score=score-10;
    
      
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/1.jpg";
  }
  else{
      bg = "sprites/2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}



