import Sentry from "@sentry/core";
import Amplitude from "@amplitude/core";

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

export default Animal;