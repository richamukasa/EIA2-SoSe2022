/**
 * Aufgabe: L01 Zufallsgedicht
 * Matrikel: 270000
 * Datum: 26.02.2022
 * Quellen: Me, myself and I
 */
var RandomPoemGenerator;
(function (RandomPoemGenerator) {
    let subjects = ["Bert", "Die Katze", "Die Blume", "Isolde", "Der Apfel", "Der Bauer"];
    let verbs = ["bastelt", "isst", "schmückt", "brät", "hängt", "streicht"];
    let objects = ["im Haus", "die Maus", "im Garten", "den Braten", "am Baum", "den Zaun"];
    /**
     * Die Funktion, die dem RandomPoemGenerator möglich macht
     * @param _subject Das Array in dem unsere Subjekte gesammelt sind.
     * @param _verb Das Array in dem unsere Prädikate gesammelt sind.
     * @param _object Das Array in dem unsere Objekte gesammelt sind.
     * @returns Einen zufällig generierten Satz.
     */
    function getVerse(_subject, _verb, _object) {
        let verse = "";
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomVerb = Math.floor(Math.random() * _verb.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        verse = _subject.splice(randomSubject, 1) + " " + _verb.splice(randomVerb, 1) + " " + _object.splice(randomObject, 1);
        return verse;
    }
    for (let i = subjects.length; i > 0; i--) {
        console.log(getVerse(subjects, verbs, objects));
    }
})(RandomPoemGenerator || (RandomPoemGenerator = {}));
//# sourceMappingURL=script.js.map