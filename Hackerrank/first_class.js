class Polygon {
    constructor (arr) {
        this.sides = arr;
    }
    perimeter() {
        let count = 0;
        this.sides.forEach(element => {count += element});
        console.log("2");
        debbuger;
        return count;
    }
}

let rectangle = new Polygon([2,3,2,3]);
console.log(rectangle.perimeter())
