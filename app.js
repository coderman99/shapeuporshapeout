class Shape {
    constructor(width, height) {
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.radius = height/2;
        this.div.style.background = "red";
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";
        this.div.left = Math.floor(Math.random() * (600 - width)) + "px";
        this.div.top = Math.floor(Math.random() * (600 - height)) + "px";
        document.getElementById("box").appendChild(this.div);
    }
}

class Square extends Shape {
    constructor(width,height) {
        super(width, height);
    }
    squareFunc(width, height) {
        var square = document.getElementById("len").value;
        this.square = this.height;
        this.square = this.width;
        this.div = this.height * this.width;
        this.name = "square";
        this.radius = "undefined";
        this.div.style.background = "yellow";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
    }
}


let bts = document.getElementById("bts");
bts.addEventListener("click", function(){
    
    new Square;
    console.log(square);
});

// class Rectangle extends Shape {
//     constructor() {
//         super();
//     }
//     rectFunc() {

//     }
// }

// let btr = document.getElementById("btr");
// btr.addEventListener("click", function(){
//     var rec = new Rectangle;
// });

// class Circle extends Shape {
//     constructor() {
//         super();
//     }
//     circFunc() {

//     }
// }

// let btc = document.getElementById("btc");
// btc.addEventListener("click", function(){
//     var circ = new Circle;
// })

// class Triangle extends Shape {
//     constructor() {
//         super();
//     }
//     triFunc() {

//     }
// }

// let btt = document.getElementById("btt");
// btt.addEventListener("click", function(){
//     var tri = new Triangle;
// })