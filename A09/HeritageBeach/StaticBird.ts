/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Same old Richard
 */
namespace HeritageBeach {
    export class StaticBird extends Immoveable {

        wingspan: number;
        wingVelocity: number;

        constructor(_position: Vector) {
            super(_position);
            this.wingspan = -5;
            this.wingVelocity = .25;
        }

        draw(): void {
            let birdColor: RGBColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };

            crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, this.wingspan);
            crc2.lineTo(10, this.wingspan);
            crc2.lineTo(15, 0);
            crc2.lineTo(20, this.wingspan);
            crc2.lineTo(30, this.wingspan);
            crc2.stroke();
            crc2.restore();

            if (this.wingspan == 5)
            this.wingVelocity = -.25;

            if (this.wingspan == -5)
            this.wingVelocity = .25;

            this.wingspan += this.wingVelocity;
        }
    }
}