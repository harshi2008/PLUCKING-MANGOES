class Tree{
    constructor(x, y, width, height){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("tree.png");
        this.image.scale = 0.01

        World.add(world, this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, width, height)
        pop();
    }
}




