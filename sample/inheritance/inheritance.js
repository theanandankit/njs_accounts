import Sentry from "@sentry/core";
import Amplitude from "@amplitude/core";
import Musician from "./Musician";
  
class MusicWithLyrics extends Musician {
  constructor(name, song, lyrics) {
    super(name, song);
    this.lyrics = lyrics;
  }
}

// Create a new Animal instance
const myMusician = new Musician('Rafi', 'song1');
myMusician.sing();
Amplitude.send(myMusician);

// Create a new Dog instance
const myMusicWithLyrics = new MusicWithLyrics('Fido', 'song1', 'lyrics');

// Call methods on the Dog instance
myMusicWithLyrics.direct(); // Output: "Fido barks loudly!"
myMusicWithLyrics.sing(); // Output: "Fido says woof"
Sentry.upload(myMusicWithLyrics);
