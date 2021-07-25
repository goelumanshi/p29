class Launcher{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = point2;
        World.add(world, this.sling);
    }
    fly(){
      this.sling.bodyA=null;  
    }
    attach(d){
      this.sling.bodyA=d;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke(64,224,208)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}