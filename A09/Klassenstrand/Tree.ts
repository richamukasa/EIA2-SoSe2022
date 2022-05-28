/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Noch immer ich
 */
namespace Beach {
    export class Tree {
        position: Vector;

        constructor() {
            this.position = new Vector(randomInteger(0, canWidth * 0.18), randomInteger(canHeight * 0.2, canHeight * 0.25));
        }

        draw(): void {
            let sizeFactor: number = this.position.y / crc2.canvas.height;
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "brown";
    
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(80 * sizeFactor, 0);
            crc2.lineTo(40 * sizeFactor, 380 * sizeFactor);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
    
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "lightgreen";
            crc2.translate(40 * sizeFactor, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(40 * sizeFactor, -40 * sizeFactor);
            crc2.lineTo(120 * sizeFactor, 80 * sizeFactor);
            crc2.lineTo(0, 0);
            crc2.lineTo(-40 * sizeFactor, -40 * sizeFactor);
            crc2.lineTo(-120 * sizeFactor, 80 * sizeFactor);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
    
            crc2.translate(-40 * sizeFactor, -20 * sizeFactor);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(80 * sizeFactor, 0);
            crc2.lineTo(40 * sizeFactor, 140 * sizeFactor);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }
    }
}