class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:25
         } // properties of a constraint
        this.pointB=pointB
        this.sling=Constraint.create(options); // creating a constraint
    World.add(world,this.sling); //adding constraint to the world

    }
    display(){
        if(this.sling.bodyA!=null){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB
        push()
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()
        }
        
    }
    fly(){
    this.sling.bodyA=null

    }
    attach(body){
        this.sling.bodyA=body
    }
}