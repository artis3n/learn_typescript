type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface AddFnI {
    (a: number, b: number): number;
}
let addI: AddFnI;
addI = (n1: number, n2: number) => n1 + n2;

interface Greetable extends Named {
    outputName?: string;

    greet(phrase: string): void;
}

interface Named {
    readonly name?: string;
}

class Person implements Greetable {
    constructor(public age: number, public name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Greetable;

user1 = new Person(26, 'Ari');
user1.greet('Hi there - I am');

const user2 = new Person(26);

console.log(user1);
console.log(user2);
