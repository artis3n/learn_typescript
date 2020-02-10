"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log('Logging');
    console.log(constructor);
}
function LoggerFactory(logString) {
    console.log('Template factory');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hook) {
    console.log('Rendering template');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookElement = document.getElementById(hook);
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Ari';
        console.log('Creating person');
    }
};
Person = __decorate([
    LoggerFactory('LOGGING - PERSON'),
    WithTemplate('<h1>My person</h1>', 'app'),
    __metadata("design:paramtypes", [])
], Person);
const person = new Person();
console.log(person);
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - must be positive');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
//# sourceMappingURL=app.js.map