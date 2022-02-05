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
var ground;
var fruit,rope,fruitcon

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope=new Rope(7,{x:248,y:30})
  fruit=new Fruit(300,300,30)
  //rectMode(CENTER);
  //ellipseMode(RADIUS);
  Matter.Composite.add(rope.body,fruit.body)
  fruitcon=new Link(rope,fruit.body)
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show() 
  fruit.show()
  Engine.update(engine);
  

 
   
}
