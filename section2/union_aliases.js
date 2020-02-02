var Combinations;
(function (Combinations) {
    Combinations[Combinations["number"] = 0] = "number";
    Combinations[Combinations["text"] = 1] = "text";
})(Combinations || (Combinations = {}));
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === Combinations.number) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, Combinations.number);
console.log(combinedAges);
var combinedStringAges = combine('30', '26', Combinations.number);
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', Combinations.text);
console.log(combinedNames);
