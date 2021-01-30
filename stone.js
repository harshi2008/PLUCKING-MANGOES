class Stone{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            'restituition': 0,
            'density':1.2,
            'friction':1,
        }

        this.body = Bodies.circle(x, y, 150, options);
        this.x = x;
        this.y = y;
        this.radius = 150;

        this.image = loadImage("stone.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, 150);
        //this.image.scale = 0.2;
        pop();
    }
}