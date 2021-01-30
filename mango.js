class Mango{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            restituition:0,
            friction:1,
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.x = x;
        this.y = y;  
        this.radius = 150; 

        this.image = loadImage("mango.png");

        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;  

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius); 
        image.scale = 0.02;
        pop();
    }
}