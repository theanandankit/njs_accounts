class Person {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my username is ${this.username} and I'm ${this.age} years old.`);
    }

    haveBirthday() {
        this.age++;
        console.log(`Happy birthday, ${this.username}! You are now ${this.age} years old.`);
    }
}

// Create a new person object and call its methods
const person = new Person('Alice', 25);
person.greet();        // "Hello, my username is Alice and I'm 25 years old."
person.haveBirthday(); // "Happy birthday, Alice! You are now 26 years old."
person.greet();        // "Hello, my username is Alice and I'm 26 years old."
