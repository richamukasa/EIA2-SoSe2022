/**
 * Aufgabe: L01 Zufallsgedicht
 * Matrikel: 270000
 * Datum: 26.02.2022
 * Quellen: Me, myself and I
 */

namespace RandomPoemGenerator {
    let subjects: string[] = ["Bert", "Die Katze", "Die Blume", "Isolde", "Der Apfel", "Der Bauer"];
    let verbs: string[] = ["bastelt", "isst", "schmückt", "brät", "hängt", "streicht"];
    let objects: string[] = ["im Haus", "die Maus", "im Garten", "den Braten", "am Baum", "den Zaun"];

    /**
     * Die Funktion, die dem RandomPoemGenerator möglich macht
     * @param _subject Das Array in dem unsere Subjekte gesammelt sind.
     * @param _verb Das Array in dem unsere Prädikate gesammelt sind.
     * @param _object Das Array in dem unsere Objekte gesammelt sind.
     * @returns Einen zufällig generierten Satz.
     */
    function getVerse(_subject: string[], _verb: string[], _object: string[]): string {
        let verse: string = "";
        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        let randomVerb: number = Math.floor(Math.random() * _verb.length);
        let randomObject: number = Math.floor(Math.random() * _object.length);

        verse = _subject.splice(randomSubject, 1) + " " + _verb.splice(randomVerb, 1) + " " + _object.splice(randomObject, 1);
        return verse;
    }

    for (let i: number = subjects.length; i > 0; i--) {
        console.log(getVerse(subjects, verbs, objects));
    }
}

