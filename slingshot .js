class Slingshot{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            length:30,
            stiffness:0.5

        }
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot);
    }
    display(){
        var pointA =this.slingshot.bodyA.position
        var pointB =this.slingshot.bodyB.position
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}