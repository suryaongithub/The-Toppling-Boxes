class Box{
    constructor(x,y,width,height){

     this.option=
    {
    restitution:0.8
    }

    this.colors=
    [
     "red",
     "green",
     "yellow",
     "white",
     "black",
     "magenta",
     "pink",
     "blue",
     "brown",
     "grey",
     "purple",
     "lime",
     "silver",
     "gold",
     "maroon",
     "aqua",
     "teal",
     "olive",
     "navy"
    ]

    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,this.option);
    this.color=anyOne(this.colors)
    World.add(world,this.body);

    
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();

    
    }
    }
