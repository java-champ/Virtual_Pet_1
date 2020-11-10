//Create variables here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dog, happyDog, database, foodS, foodStock, dogImage, dogHappy;

function preload()
{
  //load images here
  
  dogImage = loadImage("dog.png");
  dogHappy = loadImage("happydog.png");

}

function setup() {
  createCanvas(500, 500);
  
  var dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() { 
  background(46, 139, 87);
  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

  textSize(20);
  fill("green");
  stroke("black");
  text(" Note : Press UP_ARROW Key To Feed Drago Milk! ");  

  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}