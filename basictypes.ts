function add (n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(`${resultPhrase} ${n1 + n2}`);
    } else return n1 + n2;
}

const num1 = 5;
const num2 = 1;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(num1, num2, printResult, resultPhrase);

enum Role {ADMIN, READ_ONLY, USER}

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role
} = {
    name: 'Max',
    age: 30,
    hobbies: ['A', 'B', 'C'],
    role: Role.ADMIN
};

console.log(person.toString())

