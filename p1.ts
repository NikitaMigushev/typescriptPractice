let userInput: unknown;
let userName: string;

userInput = 6;
userInput = 'Max';
if (typeof  userInput === 'string') {
    userName = userInput;
}

function generate(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generate('An error', 500);

const a = 30;

const arrow = (a: number, b: number) => {
    return a + b;
}

const button = (document as Document).querySelector('button');

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const [hobby1, hobby2, ...remaining] = hobbies;

console.log(remaining);














