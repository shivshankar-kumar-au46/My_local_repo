// Q1. Create a Circle class and initialize it with radius. Make two methods
// getArea and getCircumference inside this class.

class Circle {
    constructor (radius) {
        this.radius = radius;
        this.pie = 3.14;
    }
getArea () {
    console.log(`The area of Circle is ${this.pie*this.radius*this.radius}`)

}

getCircumference () {
    console.log(`The Circumference of Circle is ${2*this.pie*this.radius}`)
    
}

}
let areaCircle = new Circle (4);
areaCircle.getArea();
areaCircle.getCircumference();


// Q2. Create a Temperature class.
// Make two methods :
// 1. convertFahrenheit - It will take celsius and will print it into Fahrenheit.
// 2. convertCelsius - It will take Fahrenheit and will convert it into Celsius.

class Temperature {
    constructor (temp) {
        this.temp = temp;
    }
    convertFahrenheit () {
        var outputFahrenheit = (this.temp * 9)/5 + 32;
        console.log(this.temp + '\u00B0 Celsious is ' + outputFahrenheit + '\u00B0 Fahrenheit');

    }

    convertCelsius () {
        var outputCelsius = (this.temp - 32)*5/9;
        console.log(this.temp + '\u00B0 Fahrenheit is ' + outputCelsius + '\u00B0 Celsious');
  

    }
}
let convertTemp = new Temperature (32);
convertTemp.convertFahrenheit();
convertTemp.convertCelsius();