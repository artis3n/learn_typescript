const username = 'Ari';

let anAge = 30;
anAge = 29;

let result;

const add = (a: number, b: number = 1) => a + b;
const printOutput: (a: string | number) => void = output => console.log(output);

printOutput(add(2, 5));
printOutput(add(5));

const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstName: 'Ari',
    age: '26',
};

const copiedPerson = { ...person };

const otherAdd = (...nums: number[]) => {
    return nums.reduce((curResult: number, curValue: number) => curResult + curValue, 0);
};

console.log(otherAdd(5, 10, 2, 3.7));

const [hobby1, hobby2, ...otherHobbies] = hobbies;
const { firstName, age } = person;

console.log(hobbies, hobby1, hobby2);
console.log(firstName, age);
