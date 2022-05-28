/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Guess who
 */
var Beach;
(function (Beach) {
    class Human {
        position;
        type;
        direction;
        skinColor;
        constructor(_type) {
            if (_type == 0) {
                this.position = new Beach.Vector(Beach.randomInteger(Beach.canWidth * -0.01, Beach.canWidth * 0.247), Beach.randomInteger(Beach.canHeight * 0.44, Beach.canHeight * 0.926));
            }
            else {
                let x = Beach.randomInteger(0, 1);
                if (x == 0)
                    this.direction = 1;
                else
                    this.direction = -1;
                this.position = new Beach.Vector(Beach.randomInteger(Beach.canWidth * 0.26, Beach.canWidth * 0.964), Beach.randomInteger(Beach.canHeight * 0.37, Beach.canHeight * 0.625));
            }
            this.type = _type;
            this.skinColor = {
                r: Beach.randomInteger(0, 255),
                g: Beach.randomInteger(0, 255),
                b: Beach.randomInteger(0, 255)
            };
            this.draw();
        }
        draw() {
            let head = new Path2D;
            if (this.type == 0) {
                Beach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                Beach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                Beach.crc2.save();
                Beach.crc2.translate(this.position.x, this.position.y);
                head.arc(0, 0, 20, 0, 2 * Math.PI);
                Beach.crc2.fill(head);
                Beach.crc2.stroke(head);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 20);
                Beach.crc2.lineTo(0, 30);
                Beach.crc2.lineTo(-35, 60);
                Beach.crc2.stroke();
                Beach.crc2.translate(0, 30);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(20, 30);
                Beach.crc2.lineTo(105, 30);
                Beach.crc2.stroke();
                Beach.crc2.translate(20, 30);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(15, -30);
                Beach.crc2.lineTo(35, 0);
                Beach.crc2.stroke();
                Beach.crc2.restore();
            }
            else {
                let head = new Path2D;
                let surfBoard = new Path2D;
                Beach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                Beach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
                Beach.crc2.save();
                Beach.crc2.translate(this.position.x, this.position.y);
                head.arc(0, 0, 20, 0, 2 * Math.PI);
                Beach.crc2.stroke(head);
                Beach.crc2.fill(head);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 20);
                Beach.crc2.lineTo(0, 30);
                Beach.crc2.lineTo(-15 * this.direction, 70);
                Beach.crc2.stroke();
                Beach.crc2.translate(-60 * this.direction, 0);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(35 * this.direction, 30);
                Beach.crc2.lineTo(85 * this.direction, 30);
                Beach.crc2.lineTo(125 * this.direction, 60);
                Beach.crc2.stroke();
                Beach.crc2.translate(25 * this.direction, 95);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(30 * this.direction, -15);
                Beach.crc2.lineTo(0, -25);
                Beach.crc2.lineTo(40 * this.direction, -25);
                Beach.crc2.lineTo(70 * this.direction, -15);
                Beach.crc2.lineTo(40 * this.direction, 0);
                Beach.crc2.stroke();
                Beach.crc2.closePath();
                Beach.crc2.strokeStyle = "HSL(0, 0%, 74%)";
                Beach.crc2.fillStyle = "HSL(0, 0%, 74%)";
                Beach.crc2.translate(40 * this.direction, 0);
                surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
                Beach.crc2.stroke(surfBoard);
                Beach.crc2.fill(surfBoard);
                Beach.crc2.restore();
            }
        }
    }
    Beach.Human = Human;
})(Beach || (Beach = {}));
//# sourceMappingURL=Human.js.map