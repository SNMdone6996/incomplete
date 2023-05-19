class Ground
{
    constructor(x,y,w,h){
        var opt={
            isStatic:true
        };

        this.body = Bodies.rectangle(x,y,w,h,opt);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }


    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        stroke(255);
        fill("yellow");
        rect(pos.x,pos.y,this.w,this.h);
       
    }
}