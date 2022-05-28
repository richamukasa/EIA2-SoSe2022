/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Guess who
 */
namespace Beach {
    export class Human {
        position: Vector;
        type: number;
        direction: number;
        skinColor: RGBColor;

        constructor(_type: number) {
            if (_type == 0) {
                this.position = new Vector(randomInteger(canWidth * -0.01, canWidth * 0.247), randomInteger(canHeight * 0.44, canHeight * 0.926));
            } else {
                let x: number = randomInteger(0, 1);
                if (x == 0)
                    this.direction = 1;
                else
                    this.direction = -1;
                this.position = new Vector(randomInteger(canWidth * 0.26, canWidth * 0.964), randomInteger(canHeight * 0.37, canHeight * 0.625));
            }
            this.type = _type;
            this.skinColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };
            this.draw();
        }

        draw(): void {
            let head: Path2D = new Path2D;
            if (this.type == 0) {
                crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                head.arc(0, 0, 20, 0, 2 * Math.PI);
                crc2.fill(head);
                crc2.stroke(head);
                crc2.beginPath();
                crc2.moveTo(0, 20);
                crc2.lineTo(0, 30);
                crc2.lineTo(-35, 60);
                crc2.stroke();

                crc2.translate(0, 30);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(20, 30);
                crc2.lineTo(105, 30);
                crc2.stroke();

                crc2.translate(20, 30);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(15, -30);
                crc2.lineTo(35, 0);
                crc2.stroke();

                crc2.restore();
            } else {
                let head: Path2D = new Path2D;
                let surfBoard: Path2D = new Path2D;

                crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                head.arc(0, 0, 20, 0, 2 * Math.PI);
                crc2.stroke(head);
                crc2.fill(head);
                crc2.beginPath();
                crc2.moveTo(0, 20);
                crc2.lineTo(0, 30);
                crc2.lineTo(-15 * this.direction, 70);
                crc2.stroke();

                crc2.translate(-60 * this.direction, 0);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(35 * this.direction, 30);
                crc2.lineTo(85 * this.direction, 30);
                crc2.lineTo(125 * this.direction, 60);
                crc2.stroke();

                crc2.translate(25 * this.direction, 95);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(30 * this.direction, -15);
                crc2.lineTo(0, -25);
                crc2.lineTo(40 * this.direction, -25);
                crc2.lineTo(70 * this.direction, -15);
                crc2.lineTo(40 * this.direction, 0);
                crc2.stroke();
                crc2.closePath();

                crc2.strokeStyle = "HSL(0, 0%, 74%)";
                crc2.fillStyle = "HSL(0, 0%, 74%)";
                crc2.translate(40 * this.direction, 0);
                surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
                crc2.stroke(surfBoard);
                crc2.fill(surfBoard);
                crc2.restore();
            }
        }
    }
}