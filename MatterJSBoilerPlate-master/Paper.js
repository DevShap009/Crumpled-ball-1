class Paper {
    constructor(x,y,radius) {
        var options = {
             isStatic : false ,
             'restitution' : 0,
             'friction': 0,
             'density' : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options) ; 
        this.radius = radius ;
        this.image = loadImage("Images/paper.png") ; 
        World.add(world,this.body)
        
    }
     display() {
         imageMode(CENTER)
         fill("blue")
         image(this.image,this.body.position.x,this.body.position.y,this.radius)
         }
}