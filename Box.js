class Box{
    constructor(x,y,width,height){

    var option=
    {
    restitution:0.8
    }

    this.width=width;
    this.height=height;

    this.body=Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);

    this.ref;
    this.ref=Math.round(random(1,4));
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    
    if(this.ref===1)
    {
     fill("RED");
    }
    else if (this.ref===2) {
        fill("green");
    }
    else if (this.ref===3) 
    {
      fill("blue");  
    }
    else if(ref===4)
    {
       fill("yellow"); 
    }
    else {
        fill("orange")
    }
    rect(0,0,this.width,this.height);
    pop();
    }
    }
