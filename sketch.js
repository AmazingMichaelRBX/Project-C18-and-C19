//Global Variables
var bananaImage
var obstacleImage
var obstacleGroup


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = 
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  
  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png");
  
  
}


function setup() {
  createCanvas(600,300);
  var background = createSprite(0,0,800,400);
  background.addImage(backImage);
}


function draw(){
 background(255); 
  
  
  
  
  
  
  
  drawSprites();
}

switch(score){
    case 10: player.scale=0.12;
         break;
    case 20: player.scale=0.14;
         break;
    case 30: player.scale=0.16;
         break;
    case 40: player.scale=0.18;
    default: break;







textSize(20);
fill("white");
text("Score: "+ score, 500,50);

if(obstaclesGroup.isTouching(player)){
  player.scale=0.2;
}
}
