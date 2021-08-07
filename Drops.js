class createDrops{

    constructor(x,y){

        var options={
            restitution:0.1,
            friction:0.01
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 5;
        World.add(world,this.body);

    }

    createDropsupdateY(){
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y,this.radius,this.radius);
    }

    display(){
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }




}