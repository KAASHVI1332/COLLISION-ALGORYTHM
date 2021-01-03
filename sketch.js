var movingRect,fixedRect;

function setup() {

  createCanvas(800,1200);
  fixedRect=createSprite(400, 200, 70, 50);
  movingRect=createSprite(200,200,50,70);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(200); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2
    )
    
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  }
  drawSprites();
}