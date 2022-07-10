var ClickyBeach;
(function (ClickyBeach) {
    class Mountain extends ClickyBeach.Immoveable {
        draw() {
            let endPoint = new ClickyBeach.Vector(ClickyBeach.randomInteger(750, 1200), 155);
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.strokeStyle = "#152109";
            ClickyBeach.crc2.fillStyle = "#152109";
            for (let i = 0; i < endPoint.x; i += 50) {
                let randomHeight = ClickyBeach.randomInteger(-50, 50);
                ClickyBeach.crc2.lineTo(i, randomHeight);
            }
            ClickyBeach.crc2.lineTo(endPoint.x, endPoint.y);
            ClickyBeach.crc2.lineTo(0, endPoint.y);
            ClickyBeach.crc2.lineTo(0, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.restore();
        }
    }
    ClickyBeach.Mountain = Mountain;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Mountain.js.map