var engine;
var world

var ground;
var boxes;
var group_1;

var boxes=[];

var box1 = {
  width : 25,
  heigth : 25,
  colour : "white"
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  createCanvas(400,400);

  

  engine = Engine.create();
  world = engine.world;

  ground=Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(world,ground);
  rectMode(CENTER);

 console.log("hey there");
 console.log("welcome to toppling boxes");
 console.log("if you want to change the colour of the box then you can use the command 'changeColour(name of your colour in quotes)'");
console.log('if you want to change the size of the box then you can use the command "changeSize(width,heigth)"')
}




function draw() 
{
  background(51);

  fill("green");
  rect(ground.position.x,ground.position.y,400,10);

  Engine.update(engine);
  
  
    for (var i = 0 ;boxes.length>i;i++)
    {
      boxes[i].display()
    }
  
}

function mousePressed()
{
  boxes[boxes.length] = new Box (mouseX,mouseY,box1.width,box1.heigth,box1.colour);
 }

function anyOne(array)
{
  return array[Math.round(random(0,array.length-1))];
  
}

function changeSize(width,heigth)
{
  box1.width=width;
  box1.heigth=heigth;
  

  return 'okay';
}

function changeColour(colour)
{
  
  box1.colour = colour;
  return "nice"
  
}

function changesize(width,heigth)
{
  box1.width=width;
  box1.heigth=heigth;
  

  return 'okay';
}

function changecolour(colour)
{
  
  box1.colour = colour;
  return "nice"
  
}
// MADE BY SURYA 
