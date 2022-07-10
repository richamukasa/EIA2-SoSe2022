/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Richard A. Mukasa
 */
var ClickyBeach;
(function (ClickyBeach) {
    class Cloud extends ClickyBeach.Moveable {
        // this.position = new Vector(randomInteger(0, canWidth), randomInteger(canHeight * 0.046, canHeight * 0.139));
        draw() {
            let r1 = ClickyBeach.randomInteger(5, 15);
            let r2 = ClickyBeach.randomInteger(20, 30);
            let cloudDensity = ClickyBeach.randomInteger(25, 50);
            let cloudWidth = ClickyBeach.randomInteger(25, 100);
            let gradient = ClickyBeach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle = new Path2D;
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
            gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
            ClickyBeach.crc2.fillStyle = gradient;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < cloudDensity; i++) {
                let x = ClickyBeach.randomInteger(-cloudWidth, cloudWidth);
                let y = ClickyBeach.randomInteger(-5, 20);
                ClickyBeach.crc2.save();
                ClickyBeach.crc2.translate(x, y);
                ClickyBeach.crc2.fill(particle);
                ClickyBeach.crc2.restore();
            }
            ClickyBeach.crc2.restore();
        }
    }
    ClickyBeach.Cloud = Cloud;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Cloud.js.map