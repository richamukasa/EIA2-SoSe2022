var HeritageBeach;
(function (HeritageBeach) {
    class Surfer extends HeritageBeach.Immoveable {
        direction;
        constructor(_position) {
            super(_position);
            let x = HeritageBeach.randomInteger(0, 1);
            if (x == 0)
                this.direction = 1;
            else
                this.direction = -1;
        }
        draw() {
            let head = new Path2D;
            let surfBoard = new Path2D;
            HeritageBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            HeritageBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            HeritageBeach.crc2.stroke(head);
            HeritageBeach.crc2.fill(head);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 20);
            HeritageBeach.crc2.lineTo(0, 30);
            HeritageBeach.crc2.lineTo(-15 * this.direction, 70);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.translate(-60 * this.direction, 0);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(35 * this.direction, 30);
            HeritageBeach.crc2.lineTo(85 * this.direction, 30);
            HeritageBeach.crc2.lineTo(125 * this.direction, 60);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.translate(25 * this.direction, 95);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(30 * this.direction, -15);
            HeritageBeach.crc2.lineTo(0, -25);
            HeritageBeach.crc2.lineTo(40 * this.direction, -25);
            HeritageBeach.crc2.lineTo(70 * this.direction, -15);
            HeritageBeach.crc2.lineTo(40 * this.direction, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.closePath();
            HeritageBeach.crc2.strokeStyle = "HSL(0, 0%, 74%)";
            HeritageBeach.crc2.fillStyle = "HSL(0, 0%, 74%)";
            HeritageBeach.crc2.translate(40 * this.direction, 0);
            surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
            HeritageBeach.crc2.stroke(surfBoard);
            HeritageBeach.crc2.fill(surfBoard);
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.Surfer = Surfer;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Surfer.js.map