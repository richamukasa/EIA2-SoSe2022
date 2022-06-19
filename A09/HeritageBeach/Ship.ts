/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Das zieht sich
 */
namespace HeritageBeach {
    export class Ship extends Immoveable {

        // this.position = new Vector(randomInteger(canWidth * 0.625, canWidth * 0.89), randomInteger(canHeight * 0.22, canHeight * 0.24));

        draw(): void {
            crc2.strokeStyle = "HSL(11, 100%, 36%)";
            crc2.fillStyle = "HSL(11, 100%, 36%)";

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(600, 0);
            crc2.lineTo(540, 60);
            crc2.lineTo(60, 60);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle = "HSL(11, 18%, 91%)";
            crc2.fillStyle = "HSL(11, 18%, 91%)";
            crc2.beginPath();
            crc2.rect(150, -40, 300, 40);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle = "HSL(11, 0%, 46%)";
            crc2.fillStyle = "HSL(11, 0%, 46%)";
            crc2.beginPath();
            crc2.rect(200, -90, 25, 50);
            crc2.rect(287.5, -90, 25, 50);
            crc2.rect(375, -90, 25, 50);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }
    }
}