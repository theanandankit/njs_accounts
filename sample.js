var moment = require('moment');

function firstPrint(someparam) {
    simplePrint(someparam);
}

function simplePrint (someparam) {
    console.log(someparam)
}

const firstTest = (dog) => {
    console.log(dog.attr2)
};

class BasicDog {
    attr1 = "mammal"
    attr2 = "dog"

    test() {
        const attr3 = "test";
        this.attr1 = this.attr1 + this.attr2;
    }
}

class Dog extends BasicDog {
    constructor(testName) {
        super();
        console.log(testName);
    }
    
    fun(argName) {
        this.test();
        console.log("I'm a", this.attr1)
        console.log(argName);
    }
}

function testone() {
    var name = "Pandurang";
    var Rodger = new Dog(name);
    Rodger.fun(name);

    console.log(name);
    firstPrint(name);
    simplePrint(name);

    ((firstName) => {
        var date = moment().format(firstName);
        console.log(date);
    })(name);

}

testone();

const externalfunc = require('./sampleone')

function testtwo() {
    var name = "Pandurang";
    console.log(name);
    externalfunc(name);
}
testtwo();