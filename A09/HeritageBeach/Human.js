/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Guess who
 */
var HeritageBeach;
(function (HeritageBeach) {
    class Human extends HeritageBeach.Immoveable {
        constructor(_position) {
            super(_position);
            this.skinColor = {
                r: HeritageBeach.randomInteger(0, 255),
                g: HeritageBeach.randomInteger(0, 255),
                b: HeritageBeach.randomInteger(0, 255)
            };
            this.draw();
        }
        draw() {
        }
    }
    HeritageBeach.Human = Human;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Human.js.map