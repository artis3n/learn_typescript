function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(`result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    cb(n1 + n2);
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;

console.log(combinedValues(8, 8));

printResult(add(5, 12));

addAndHandle(10, 20, result => console.log(result));
