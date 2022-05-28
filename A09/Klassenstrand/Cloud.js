/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Richard A. Mukasa
 */
var Beach;
(function (Beach) {
    class Cloud {
        position;
        speed;
        constructor(_speed) {
            this.position = new Beach.Vector(Beach.randomInteger(0, Beach.canWidth), Beach.randomInteger(Beach.canHeight * 0.046, Beach.canHeight * 0.139));
            this.speed = _speed;
        }
        draw() {
            let r1 = Beach.randomInteger(5, 15);
            let r2 = Beach.randomInteger(20, 30);
            let cloudDensity = Beach.randomInteger(25, 50);
            let cloudWidth = Beach.randomInteger(25, 100);
            let gradient = Beach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle = new Path2D;
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
            gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
            Beach.crc2.fillStyle = gradient;
            Beach.crc2.save();
            Beach.crc2.translate(this.position.x, this.position.y);
            for (let i = 0; i < cloudDensity; i++) {
                let x = Beach.randomInteger(-cloudWidth, cloudWidth);
                let y = Beach.randomInteger(-5, 20);
                Beach.crc2.save();
                Beach.crc2.translate(x, y);
                Beach.crc2.fill(particle);
                Beach.crc2.restore();
            }
            Beach.crc2.restore();
        }
        move() {
            let offset = new Beach.Vector(this.position.x, this.position.y);
            offset.scale(this.speed);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += Beach.canWidth;
            if (this.position.x > Beach.canWidth)
                this.position.x -= Beach.canWidth;
        }
    }
    Beach.Cloud = Cloud;
})(Beach || (Beach = {}));
//# sourceMappingURL=Cloud.js.map