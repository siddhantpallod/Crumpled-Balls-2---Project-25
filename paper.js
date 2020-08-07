class Paper{

    constructor(x,y){
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        } 
        
        this.body = Bodies.circle(this.x,this.y,200,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,200);
        pop();
    }
}