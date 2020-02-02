enum Combinations { number, text}

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable, resultType: Combinations) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === Combinations.number) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30, 26, Combinations.number);
console.log(combinedAges);

const combinedStringAges = combine('30', '26', Combinations.number);
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', Combinations.text);
console.log(combinedNames);
