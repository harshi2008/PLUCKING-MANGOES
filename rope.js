class Rope{
    constructor(x, y, width, height){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            'stiffness': 0.003,
            'length': 20,
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
      this.rope.bodyA = null;  
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
    }
}
}