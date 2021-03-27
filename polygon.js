class Polygon{
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        //this.width = width;
       // this.radius = radius;
       this.image = loadImage("polygon.jpg");
        World.add(world, this.body);
        
      }
      
      display(){
        var pos =this.body.position;
        //rectMode(CENTER);
        fill("white");
        //sellipse(pos.x, pos.y, pos.radius);
        //slingShot = new Slingshot(pos.x,{x:100,y:200});
        //slingShot.display();
        push();
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
        pop();
      }

}

