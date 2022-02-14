var engine;
var world

var ground;
var boxes;
var group_1;

var boxes=[];

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

  console.log(boxes.length);
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
  boxes[boxes.length] = new Box (mouseX,mouseY,Math.round(random(10,30)),Math.round(random(10,30)));
 }

function anyOne(array)
{
  return array[Math.round(random(0,array.length-1))];
  
}

// MADE BY SURYA 
