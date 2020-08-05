var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,20);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.shapeColor = "white";
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  console.log(damage);
}

function draw() {
  background(0,0,0);  
  //it looks like for some reason the bullet can sometimes only be detected after it goes past the wall when going too fast. It doesn't look like I can fix it.
  if(wall.x - bullet.x <= bullet.width/2 + wall.width/2){
    if(damage < 10){
      wall.shapeColor = "lime";
    }
    else if(damage > 10){
      wall.shapeColor = "red";
    }
    bullet.velocityX = 0;
  } 
  drawSprites();
}