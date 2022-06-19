/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Richard A. Mukasa
 */
var HeritageBeach;
(function (HeritageBeach) {
    class Cloud extends HeritageBeach.Moveable {
        // this.position = new Vector(randomInteger(0, canWidth), randomInteger(canHeight * 0.046, canHeight * 0.139));
        draw() {
            let r1 = HeritageBeach.randomInteger(5, 15);
            let r2 = HeritageBeach.randomInteger(20, 30);
            let cloudDensity = HeritageBeach.randomInteger(25, 50);
            let cloudWidth = HeritageBeach.randomInteger(25, 100);
            let gradient = HeritageBeach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle = new Path2D;
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
            gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
            HeritageBeach.crc2.fillStyle = gradient;
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < cloudDensity; i++) {
                let x = HeritageBeach.randomInteger(-cloudWidth, cloudWidth);
                let y = HeritageBeach.randomInteger(-5, 20);
                HeritageBeach.crc2.save();
                HeritageBeach.crc2.translate(x, y);
                HeritageBeach.crc2.fill(particle);
                HeritageBeach.crc2.restore();
            }
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.Cloud = Cloud;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Cloud.js.map