class Drun {
constructor(x,y){
    this.pos = createVector(x,y)
    this.vel = p5.Vector.random2D()
    this.vel.mult(5)
    this.acc = createVector()
    this.mass = 1   
}

applyForce(force){
    const calcedAcc = p5.Vector.div(force, this.mass)
    this.acc.add(calcedAcc)
}
}