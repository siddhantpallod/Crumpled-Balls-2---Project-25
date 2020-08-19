class Paper{

    constructor(x,y){
        
        var options = {
            isStatic : false,
            restitution : 0.1,
            friction : 0,
            density : 1.2
        } 
        
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,70,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70);
        pop();
    }
}