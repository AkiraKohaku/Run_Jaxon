var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadAnimation("path.png");
  boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 
}

function setup(){  
  createCanvas(400,400);

  path=createSprite(200,0,400,400);
  path.addAnimation("camino", pathImg);
  path.scale=1.2; 
  
  boy=createSprite(200,390,400,400);
  boy.addAnimation("niño", boyImg);
  boy.scale=0.7;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;
}

function draw (){
  background("black");
  path.velocityY = 4;  
  
//Mover "boy" con el eje X del mouse (no pude lograrlo)

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  if(path.y > 600 ){
    path.y = height/2;
  }
  
  drawSprites();
}
