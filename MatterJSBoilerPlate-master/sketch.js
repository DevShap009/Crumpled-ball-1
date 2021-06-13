const Engine = Matter.Engine ;
   const World = Matter.World ; 
   const Bodies = Matter.Bodies ;
   const Body = Matter.Body ;
   var dustbinImage , bin ;
   var paperImage , paper ;
   var ground ;
   var engine , world ;

function preload(){
    binImage = loadImage("Images/dustbingreen.png") ;
  }

function setup() {
	  createCanvas(1600, 700);

	  engine = Engine.create();
 	  world = engine.world;
      
    paper = new Paper(600,50,70) ;
	  
    ground = new Ground(800,680,40,1600) ;
    
	  bin = createSprite(1400,580,20,20) ;
	  bin.addImage(binImage)
	  bin.scale = 0.5
    
    Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background(0);
  
   bin.display() ;
   ground.display() ;
   paper.display() ;


   Engine.update(engine)
 
   drawSprites();

}

function keyPressed() {
     if(keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:15 , y:-15})
	 }
}



