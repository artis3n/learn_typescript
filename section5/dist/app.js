"use strict";
let add;
add = (n1, n2) => n1 + n2;
let addI;
addI = (n1, n2) => n1 + n2;
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person(26, 'Ari');
user1.greet('Hi there - I am');
const user2 = new Person(26);
console.log(user1);
console.log(user2);
//# sourceMappingURL=app.js.map