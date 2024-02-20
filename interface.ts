interface Greetable {
    name: string;
    age: number;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {
        console.log(phrase)
    }

}

let personA = new Person('Max', 25);

personA.greet('hi')
