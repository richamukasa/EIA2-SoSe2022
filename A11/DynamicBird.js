var HeritageBeach;
(function (HeritageBeach) {
    class DynamicBird extends HeritageBeach.Moveable {
        wingspan;
        wingVelocity;
        constructor(_position, _velocity, _speed) {
            super(_position, _velocity, _speed);
            this.wingspan = -10;
            this.wingVelocity = .5;
        }
        draw() {
            let birdColor = {
                r: HeritageBeach.randomInteger(0, 255),
                g: HeritageBeach.randomInteger(0, 255),
                b: HeritageBeach.randomInteger(0, 255)
            };
            HeritageBeach.crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(30, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.translate(10, 0);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(5, this.wingspan);
            HeritageBeach.crc2.lineTo(15, this.wingspan);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.restore();
            if (this.wingspan == 10)
                this.wingVelocity = -1;
            if (this.wingspan == -10)
                this.wingVelocity = 1;
            this.wingspan += this.wingVelocity;
        }
    }
    HeritageBeach.DynamicBird = DynamicBird;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=DynamicBird.js.map