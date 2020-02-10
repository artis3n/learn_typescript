function Logger(constructor: Function) {
    console.log('Logging');
    console.log(constructor);
}

function LoggerFactory(logString: string) {
    console.log('Template factory');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hook: string) {
    console.log('Rendering template');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookElement = document.getElementById(hook);
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@LoggerFactory('LOGGING - PERSON')
// @Logger
@WithTemplate('<h1>My person</h1>', 'app')
class Person {
    name = 'Ari';

    constructor() {
        console.log('Creating person');
    }
}

const person = new Person();
console.log(person);

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - must be positive');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
