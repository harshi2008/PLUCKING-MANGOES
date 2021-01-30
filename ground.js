class Ground{
    constructor(x, y, width, height){
        var options={
          isStatic:true         
        }

        this.body = Bodies.rectangle(x, y, 1340, 20, options);
        this.x = x;
        this.y = y;
        this.width = 1340;
        this.height = 20;

        World.add(world, this.body)
    }

display(){
    push();
    strokeWeight(4);
    stroke("black");
    fill("red");
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
}
}