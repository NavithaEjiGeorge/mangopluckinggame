//class mango{
//    constructor(x,y,width,height){
//        var options = {
//            isStatic : true,
//            restitutions : 0.03,
//            density:0.4,
//            friction:0.1
//        }
//        this.body = Bodies.rectangle(x,y,width,height,options)
//        this.width = width
//        this.height = height
//        this.image = loadImage("mango.png")
//        World.add(world,this.body)
//    }
//    display(){
//      var pos = this.body.position
//      var angle = this.body.angle
//      push()
//      imageMode(CENTER)
//      rotate(angle)
//      translate(pos.x,pos.y)
//      fill("rgb(20,21,24)")
//      image(this.image,0,0,this.width,this.height)
//      pop()
//    }
//}
class Mango{
	constructor(x,y,r){
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}