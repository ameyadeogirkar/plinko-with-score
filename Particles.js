class Particle{
    constructor(x, y, radius){
        var options = {
            isStatic:false
        }
        this.radius = radius;
        this.Visiblity=255;
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display(){
        if(this.body.position.y>=750){
            var pos = this.body.position;
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(pos.x, pos.y, this.radius, this.radius);
        }else{
            World.remove(world,this.body);
            push();
            this.Visiblity=this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
        }
    }

    score(){
        if(this.Visiblity<0 && this.Visiblity>-105){
            score++;
        }  
    }
}