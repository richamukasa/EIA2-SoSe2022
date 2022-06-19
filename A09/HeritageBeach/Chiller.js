var HeritageBeach;
(function (HeritageBeach) {
    class Chiller extends HeritageBeach.Immoveable {
        draw() {
            let head = new Path2D;
            HeritageBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            HeritageBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            HeritageBeach.crc2.fill(head);
            HeritageBeach.crc2.stroke(head);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 20);
            HeritageBeach.crc2.lineTo(0, 30);
            HeritageBeach.crc2.lineTo(-35, 60);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.translate(0, 30);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(20, 30);
            HeritageBeach.crc2.lineTo(105, 30);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.translate(20, 30);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(15, -30);
            HeritageBeach.crc2.lineTo(35, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.Chiller = Chiller;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Chiller.js.map