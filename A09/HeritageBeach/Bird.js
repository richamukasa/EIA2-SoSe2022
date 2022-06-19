/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Same old Richard
 */
var HeritageBeach;
(function (HeritageBeach) {
    class StaticBird extends HeritageBeach.Immoveable {
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
            HeritageBeach.crc2.lineTo(10, -5);
            HeritageBeach.crc2.lineTo(15, 0);
            HeritageBeach.crc2.lineTo(20, -5);
            HeritageBeach.crc2.lineTo(30, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.StaticBird = StaticBird;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Bird.js.map