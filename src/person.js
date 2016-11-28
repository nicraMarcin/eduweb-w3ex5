class Person {

    constructor(firstName, lastName) {
        if (!(this instanceof Person)) {
            return new Person(firstName, lastName);
        }

        this.firstName = firstName;
        this.lastName = lastName;
    }


    sayHello() {

        document.write(`Cześć, nazywam się ${this.firstName} ${this.lastName}!`);

    }
}

class Programmer extends Person {

    constructor(firstName, lastName, lang) {
        lang = lang || "JavaScript";

        super(firstName, lastName);

        this.lang = lang;

    }

    work() {

        this.sayHello();
        document.write(`<br />Piszę właśnie kod w moim ulubionym języku, którym jest ${this.lang}.`);

    }
}

export {
    Programmer
};
