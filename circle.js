class Circle{
    radius;
    constructor(radius){
        this.radius=radius;
    }
    getPerimeter(){
        return this.radius*2*Math.PI;
    }
    getAria(){
        return this.radius*this.radius*Math.PI;
    }
}