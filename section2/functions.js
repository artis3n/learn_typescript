function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("result: " + num);
}
function addAndHandle(n1, n2, cb) {
    cb(n1 + n2);
}
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
printResult(add(5, 12));
addAndHandle(10, 20, function (result) { return console.log(result); });
