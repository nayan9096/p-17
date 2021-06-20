
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground;
var survivalTime =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
  
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
 
}



function setup() {
  

  score = 0;
  survivalTime =0;
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
}


function draw() {
  background(225);
  background("green");
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  
  if(monkey.isTouching(bananaGroup)){
   bananaGroup.destroyEach();
    score=score+1;
  }
  
  if(monkey.isTouching(obstaclesGroup)){
    monkey.destroyEach();
  }
  
  
  stroke("white");
  textSize(15);
  fill("white");
  text("score:" + score,300,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+ survivalTime,100,50);
  
  food();
  obstacles();
 drawSprites() ;
}

function food(){
  if(frameCount % 100==0){
  banana =createSprite(400,100,20,20);
  banana.y=Math.round(random(100,150));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  banana.lifeTime = 400;
    
   monkey.lifetime=500;
    
  banana.depth=monkey.depth;
  monkey.depth=monkey.depth -1;
    
    bananaGroup.add(banana); 
  } 
}

function obstacles(){
 if(frameCount % 110===0) {
  obstacle = createSprite(250,328,20,20);
   obstacle.addImage(obstaclesImage);
   obstacle.velocityX =-6; 
   obstacle.scale=0.1;
   obstacles.lifeTime=200;
 }
}


