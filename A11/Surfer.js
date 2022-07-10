var ClickyBeach;
(function (ClickyBeach) {
    class Surfer extends ClickyBeach.Immoveable {
        direction;
        constructor(_position) {
            super(_position);
            let x = ClickyBeach.randomInteger(0, 1);
            if (x == 0)
                this.direction = 1;
            else
                this.direction = -1;
        }
        draw() {
            let head = new Path2D;
            let surfBoard = new Path2D;
            ClickyBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            ClickyBeach.crc2.stroke(head);
            ClickyBeach.crc2.fill(head);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 20);
            ClickyBeach.crc2.lineTo(0, 30);
            ClickyBeach.crc2.lineTo(-15 * this.direction, 70);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(-60 * this.direction, 0);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(35 * this.direction, 30);
            ClickyBeach.crc2.lineTo(85 * this.direction, 30);
            ClickyBeach.crc2.lineTo(125 * this.direction, 60);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(25 * this.direction, 95);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(30 * this.direction, -15);
            ClickyBeach.crc2.lineTo(0, -25);
            ClickyBeach.crc2.lineTo(40 * this.direction, -25);
            ClickyBeach.crc2.lineTo(70 * this.direction, -15);
            ClickyBeach.crc2.lineTo(40 * this.direction, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.closePath();
            ClickyBeach.crc2.strokeStyle = "HSL(0, 0%, 74%)";
            ClickyBeach.crc2.fillStyle = "HSL(0, 0%, 74%)";
            ClickyBeach.crc2.translate(40 * this.direction, 0);
            surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
            ClickyBeach.crc2.stroke(surfBoard);
            ClickyBeach.crc2.fill(surfBoard);
            ClickyBeach.crc2.restore();
        }
    }
    ClickyBeach.Surfer = Surfer;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Surfer.js.map