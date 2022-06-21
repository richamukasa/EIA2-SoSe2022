/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Same old Richard
 */
var HeritageBeach;
(function (HeritageBeach) {
    class StaticBird extends HeritageBeach.Immoveable {
        wingspan;
        wingVelocity;
        constructor(_position) {
            super(_position);
            this.wingspan = -5;
            this.wingVelocity = .25;
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
            HeritageBeach.crc2.moveTo(0, this.wingspan);
            HeritageBeach.crc2.lineTo(10, this.wingspan);
            HeritageBeach.crc2.lineTo(15, 0);
            HeritageBeach.crc2.lineTo(20, this.wingspan);
            HeritageBeach.crc2.lineTo(30, this.wingspan);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.restore();
            if (this.wingspan == 5)
                this.wingVelocity = -.25;
            if (this.wingspan == -5)
                this.wingVelocity = .25;
            this.wingspan += this.wingVelocity;
        }
    }
    HeritageBeach.StaticBird = StaticBird;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=StaticBird.js.map