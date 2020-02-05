type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const el1: ElevatedEmployee = {
    name: 'Ari',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    // This is a type guard
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

console.log(fetchUserData?.job?.title);

const userInput = '';
const store = userInput ?? 'DEFAULT';
console.log(store);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
    console.log(`Name: ${employee.name}`);
    // This is also a type guard
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

    loadCargo(amount: number) {
        console.log(`Loading cargo: ${amount}`);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(5);
    }
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }

    console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

const paragraph = <HTMLParagraphElement>document.getElementById('message-output');
paragraph.innerHTML = 'Look this is added';
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
};
