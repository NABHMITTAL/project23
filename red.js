class Red{
    constructor(x,y,w,h){
        var opt = {
            restitiution : 0
        }
        this.body = Bodies.rectangle(x,y,w,h,opt)

        World.add(world,this.body)
    }

    display(){
            rectMode(CENTER)
            fill("red")
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}