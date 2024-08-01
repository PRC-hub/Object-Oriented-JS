class Shape{
    area(){
        return "Shape not mentioned";
    }
    perimeter(){
        return "Shape not mentioned";
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}
class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
        super();
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}

const circle = new Circle(5);

console.log(`Circle - Area: ${circle.area()}, Perimeter: ${circle.perimeter()}`);
const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);
const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.area()}, Perimeter: ${triangle.perimeter()}`);