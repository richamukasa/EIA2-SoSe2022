var HeritageBeach;
(function (HeritageBeach) {
    class Mountain extends HeritageBeach.Immoveable {
        draw() {
            let endPoint = new HeritageBeach.Vector(HeritageBeach.randomInteger(750, 1200), 155);
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.strokeStyle = "#152109";
            HeritageBeach.crc2.fillStyle = "#152109";
            for (let i = 0; i < endPoint.x; i += 50) {
                let randomHeight = HeritageBeach.randomInteger(-50, 50);
                HeritageBeach.crc2.lineTo(i, randomHeight);
            }
            HeritageBeach.crc2.lineTo(endPoint.x, endPoint.y);
            HeritageBeach.crc2.lineTo(0, endPoint.y);
            HeritageBeach.crc2.lineTo(0, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.Mountain = Mountain;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Mountain.js.map