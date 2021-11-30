class Ground{
    constructor(x,y,w,h){
      var options={
isStatic:true   

      }
      this.body=Bodies.rectangle(x,y,w,h,options)
         this.w=w
this.h=h
World.add(world,this.body)


    }
   show(){
       var position=this.body.position
       push()
       rectMode(CENTER)
       noStroke()
       fill(148,127,146)
       rect(position.x,position.y,this.w,this.h)
       pop()
   } 
}