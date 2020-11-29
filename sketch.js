
var car = [], wall, weight = [], speed = [], de = [], soo = 100;


function setup() {
  createCanvas(800,400);
  for (var cars = 0; cars < 3; cars++) {
   car[cars] = createSprite(200, soo, 20, 20);
   soo += 100;
  }

  weight[0] = 2260;
  weight[1] = 1522;
  weight[2] = 3000;

  speed[0] = 60;
  speed[1] = 50;
  speed[2] = 45;

  car[0].velocityX = speed[0];
  car[1].velocityX = speed[1];
  car[2].velocityX = speed[2];
  
  wall = createSprite(700, 200, 50, 400);

  de[0] = 0.5 * speed[0] * speed[0] * weight[0] / 22500;
de[1] = 0.5 * speed[1] * speed[1] * weight[1] / 22500;
de[2] = 0.5 * speed[1] * speed[2] * weight[2] / 22500;
}

function draw() {
  background("lightblue"); 
  
  

  if (car[0].collide(wall)) {
    car[0].velocityX = 0;
    if (de[0] >= 80 || de[0] <= 100) {
      car[0].shapeColor = "green";
    } else if (de[0] >= 101 || de[0] <= 160) {
      car[0].shapeColor = "yellow";
    } else if (de[0] >= 161 || de[0] <= 180) {
      car[0].shapeColor = "darkyellow";
    } else if (de[0] >= 181) {
      car[0].shapeColor = "red";
    }
  }
  if (car[1].collide(wall)) {
    car[1].velocityX = 0;

    if (de[1] >= 80 || de[1] <= 100) {
      car[1].shapeColor = "green";
    } else if (de[1] >= 101 || de[1] <= 160) {
      car[1].shapeColor = "yellow";
    } else if (de[1] >= 161 || de[1] <= 180) {
      car[1].shapeColor = "darkyellow";
    } else if (de[1] >= 181) {
      car[1].shapeColor = "red";
    }
  }
  if (car[2].collide(wall)) {
    car[2].velocityX = 0;
    if (de[2] >= 80 || de[2] <= 100) {
      car[2].shapeColor = "green";
    } else if (de[2] >= 101 || de[2] <= 160) {
      car[2].shapeColor = "yellow";
    } else if (de[2] >= 161 || de[2] <= 180) {
      car[2].shapeColor = "darkyellow";
    } else if (de[2] >= 181) {
      car[2].shapeColor = "red";
    }
  }
  drawSprites();
}
