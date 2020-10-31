var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = 223;

}

function draw() {
  background("BLUE");  
  drawSprites();



  bullet.velocityX = speed;
  wall.shapeColor(80,80,80);

  bullet.collide(wall);


    if(deformation<10)
    {
      bullet.shapeColor = "GREEN";
    }

    if(deformation<10){
      bullet.shapeColor = "RED";
    }


  }
 
