export const PI = 22 / 7;

export default class Calculator {
    constructor() {
        this.x = 0;
    }

    add(value) {
        this.x += value;
        return this;
    }

    substract(value) {
        this.x -= value;
        return this;
    }

    multiply(value) {
        this.x *= value;
        return this;
    }

    divide(value) {
        this.x /= value;
        return this;
    }

    square() {
        this.x = this.x * this.x;
        return this;
    }

    exponent(power) {
        this.x = Math.pow(this.x, power);
        return this;
    }

    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
    }

    result() {
        console.log(`${this.x}`);
        return this;
    }
}