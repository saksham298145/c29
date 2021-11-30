const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var watermelon,rope1,ground1,watermelonC
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 watermelon=Bodies.circle(300,300,20)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground1=new Ground(200,680,600,40)
  rope1=new Rope(6,{x: 245,y:30})
  textSize(50)
  Matter.Composite.add(rope1.body,watermelon)
 watermelonC=new Link(rope1,watermelon)
}

function draw() 
{
  background(0,250,255);
  Engine.update(engine);
 ground1.show()  
 rope1.show()
 ellipse(watermelon.position.x,watermelon.position.y,30,30)
}




