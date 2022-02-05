class Fruit 
{
  constructor(x, y,r) 
  {
    let options = {
     isStatic:false
    };
    
    this.body = Bodies.circle(x, y,r, options);
    this.w = r;
    this.h = r;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill("green");
    ellipse(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
