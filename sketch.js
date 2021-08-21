var ship,sea;
var shipImg,seaImg1;

function preload(){
seaImg1 = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background('blue');
 
 
  sea = createSprite(200,200,30,30)
  sea.addImage(seaImg1);
  sea.velocityX = 3;
  sea.scale = 0.25;
  
 
 
  ship  = createSprite(200,200,20,20);
  ship.addAnimation("moving ship",shipImg);
   ship.scale = 0.25;
}

function draw(){
 background(0)
  
  if(sea.x < 0) {
    sea.x = sea.width/8;
  }
  
   drawSprites();
}

















