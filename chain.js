class Chain {

    constructor (bodyA,bodyB) {
    var options= {
        //'key' : value
        'bodyA': bird.body,
        'bodyB': log6.body,
        'length': 10,
        'stiffness': 0.004
    }

    this.chain = Matter.Constraint.create(options);
    World.add(world, this.chain);

    }

display(){
    var posA = this.chain.bodyA.position;
    var posB = this.chain.bodyB.position;
    stroke("brown");
    strokeWeight(4);

    line(posA.x, posA.y, posB.x, posB.y );
}

}