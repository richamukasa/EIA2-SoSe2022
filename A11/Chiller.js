var ClickyBeach;
(function (ClickyBeach) {
    class Chiller extends ClickyBeach.Immoveable {
        draw() {
            let head = new Path2D;
            ClickyBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            ClickyBeach.crc2.fill(head);
            ClickyBeach.crc2.stroke(head);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 20);
            ClickyBeach.crc2.lineTo(0, 30);
            ClickyBeach.crc2.lineTo(-35, 60);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(0, 30);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(20, 30);
            ClickyBeach.crc2.lineTo(105, 30);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(20, 30);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(15, -30);
            ClickyBeach.crc2.lineTo(35, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.restore();
        }
    }
    ClickyBeach.Chiller = Chiller;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Chiller.js.map