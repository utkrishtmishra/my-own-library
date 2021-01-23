var fixedRect, movingRect;
var obj1,obj2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(500, 100,50,100);
  obj1 = "green";
  obj1.debug = true;

  obj2 = createSprite(500, 700,50,100);
  obj2 = "green";
  obj2.debug = true;

  obj1.velocityY = -5;
  obj2.velocityY = +5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(obj1,obj2);
  drawSprites();
}

