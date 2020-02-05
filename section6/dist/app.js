"use strict";
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
//# sourceMappingURL=app.js.map