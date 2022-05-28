/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Same old Richard
 */
namespace Beach {
    export class Bird {
        position: Vector;
        type: number;
        speed: number;

        constructor({ _type, _speed }: { _type: number; _speed: number; }) {
            this.position = new Vector(randomInteger(0, canWidth), randomInteger(canHeight * 0.028, canHeight * 0.231));
            this.type = _type;
            this.speed = _speed;
        }

        draw(): void {
            if (this.type == 0) {
                let birdColor: RGBColor = {
                    r: randomInteger(0, 255),
                    g: randomInteger(0, 255),
                    b: randomInteger(0, 255)
                };

                crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;

                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(10, -5);
                crc2.lineTo(15, 0);
                crc2.lineTo(20, -5);
                crc2.lineTo(30, 0);
                crc2.stroke();
                crc2.restore();
            } else {
                let birdColor: RGBColor = {
                    r: randomInteger(0, 255),
                    g: randomInteger(0, 255),
                    b: randomInteger(0, 255)
                };

                crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(30, 0);
                crc2.stroke();

                crc2.translate(10, 0);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(5, -10);
                crc2.lineTo(15, -10);
                crc2.stroke();
                crc2.restore();
            }
        }

        move(): void {
            let offset: Vector = new Vector(this.position.x, this.position.y);
            offset.scale(this.speed * -1);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x -= canWidth;
            if (this.position.x > canWidth)
                this.position.x += canWidth;
        }
    }
}