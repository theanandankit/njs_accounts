class Musician {
    constructor(name, song) {
        this.username = name;
        this.song = song;
    }
    sing() {
        console.log(`${this.username} says ${this.song}`);
    }
}

export default Musician;