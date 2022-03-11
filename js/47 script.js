'use strict';

class Rectangle {  // Класс
    constructor(height, width) {
        this.height = height;
        this.width =width;
    }

    calcArea() {    //Метод
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{ //наследование
    constructor(height, width, text, bgColor) {
        super(height, width); // суперконструктор родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps () {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());