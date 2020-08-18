class Dustbin{
    constructor(){
        var options = {
            isStatic : true
        }

        

        this.body = Bodies.rectangle(1085,460,40,40,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
    
        
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,200,200);
        pop();
    }
}