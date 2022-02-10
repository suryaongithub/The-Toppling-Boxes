var engine;
var world

var ground;
var boxes;
var group_1;
var ref;
var boxes=[];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  createCanvas(400,400);

  ref=0;
  // group_1 = new Group();

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
  
  if(ref===1)
  {
    for (var i = 0 ;boxes.length>i;i++)
    {
      boxes[i].display()
    }
  }
}

function mousePressed ()
{
  boxes[boxes.length] = new Box (mouseX,mouseY,20,20);
 ref=1;
}