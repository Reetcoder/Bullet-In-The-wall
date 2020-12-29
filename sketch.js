var speed,weight;


speed = random(55,99);
weight = random(400,1500);

function setup() {
  createCanvas(1600,400);
 
  car1 = createSprite(50,50,50,20);
  car2 = createSprite(50,110,50,20);
  car3 = createSprite(50,170,50,20);
  car4 = createSprite(50,230,50,20);
  car5 = createSprite(50,290,50,20); 
  car6 = createSprite(50,350,50,20);

 
 
  line1 = createSprite(0, 80, width*2, 5);
  line2 = createSprite(0, 140, width*2, 5);
  line3 = createSprite(0, 200, width*2, 5);
  line4 = createSprite(0, 260, width*2, 5);
  line5 = createSprite(0, 320 , width*2, 5);

//wall1 = createSprite(1500,60,50,height/2)
parking = createSprite(1590,200,30,400);
  
finish = createSprite(10,200,20,400);

  

}


function draw() {      
  background("black");
  
  car1.shapeColor = "red";
  car2.shapeColor = "orange";
  car3.shapeColor = "yellow";
  car4.shapeColor = "green";
  car5.shapeColor = "blue";
  car6.shapeColor = "purple";
 
  line1.shapeColor= "white";
  line2.shapeColor= "white";
  line3.shapeColor= "white";
  line4.shapeColor= "white";
  line5.shapeColor= "white";

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
  car5.velocityX = speed;
  car6.velocityX = speed;

  
//car1.bounceOff(parking);
//car2.bounceOff(parking);
//car3.bounceOff(parking);
//car4.bounceOff(parking);
//car5.bounceOff(parking);
//car6.bounceOff(parking);

 
//isTouching(car1,parking)
//isTouching(car2,parking)
//isTouching(car3,parking)
//isTouching(car4,parking)
//isTouching(car5,parking)
//isTouching(car6,parking)

       
 
    drawSprites();
}