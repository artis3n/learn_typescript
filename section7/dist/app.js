"use strict";
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObj = merge({ name: 'Ari', hobbies: ['Sports'] }, { age: 26 });
console.log(mergedObj.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['sports', 'cooking']));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Ari' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    remoteItem(item) {
        this.data.splice(this.data.indexOf(item));
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Ari');
textStorage.addItem('Manu');
textStorage.remoteItem('Manu');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Ari', 'Anna'];
//# sourceMappingURL=app.js.map