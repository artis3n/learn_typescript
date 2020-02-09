function merge<T, U>(a: T, b: U): T & U {
    return Object.assign(a, b);
}

const mergedObj = merge({ name: 'Ari', hobbies: ['Sports'] }, { age: 26 });
console.log(mergedObj.name);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['sports', 'cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Ari' }, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    remoteItem(item: T) {
        this.data.splice(this.data.indexOf(item));
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Ari');
textStorage.addItem('Manu');
textStorage.remoteItem('Manu');
console.log(textStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    const courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Ari', 'Anna'];
