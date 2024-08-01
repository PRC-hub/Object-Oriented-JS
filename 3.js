class Temperature{
    constructor(){
        this.celsius=0;
        this.fahrenheit=32;
    }
    get getCelsius(){
        return this.celsius;
    }
    set setCelsius(value){
        this.celsius=value;
        this.fahrenheit= (value * 9 / 5) + 32;
    }
    get getFahrenheit(){
        return this.fahrenheit;
    }
    set setFahrenheit(value){
        this.celsius=(value - 32) * 5 / 9;;
        this.fahrenheit= value;
    }
}
const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);
temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
