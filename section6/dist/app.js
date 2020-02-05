"use strict";
var _a, _b;
const el1 = {
    name: 'Ari',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(3, 'K');
result.split(' ');
const numResult = add(2, 5);
const fetchUserData = {
    id: 'u1',
    name: 'Ari',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};
console.log((_b = (_a = fetchUserData) === null || _a === void 0 ? void 0 : _a.job) === null || _b === void 0 ? void 0 : _b.title);
const userInput = '';
const store = (userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT');
console.log(store);
function printEmployeeInformation(employee) {
    console.log(`Name: ${employee.name}`);
    if ('privileges' in employee) {
        console.log(`Privileges: ${employee.privileges}`);
    }
    if ('startDate' in employee) {
        console.log(`Start date: ${employee.startDate}`);
    }
}
printEmployeeInformation(el1);
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(5);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log(`Moving with speed: ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const paragraph = document.getElementById('message-output');
paragraph.innerHTML = 'Look this is added';
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there';
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
};
//# sourceMappingURL=app.js.map