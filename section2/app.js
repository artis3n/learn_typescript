var userInput;
var username;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error occurred', 500);
