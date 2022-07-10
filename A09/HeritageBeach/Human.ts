/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Guess who
 */
namespace HeritageBeach {
    export class Human extends Immoveable {
        constructor(_position: Vector) {
            super(_position);
            this.skinColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };
            this.draw();
        }

        draw(): void {
            
        }
    }
}