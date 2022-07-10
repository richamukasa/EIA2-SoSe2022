/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Same old Richard
 */
var ClickyBeach;
(function (ClickyBeach) {
    class StaticBird extends ClickyBeach.Immoveable {
        wingspan;
        wingVelocity;
        constructor(_position) {
            super(_position);
            this.wingspan = -5;
            this.wingVelocity = .25;
        }
        draw() {
            let birdColor = {
                r: ClickyBeach.randomInteger(0, 255),
                g: ClickyBeach.randomInteger(0, 255),
                b: ClickyBeach.randomInteger(0, 255)
            };
            ClickyBeach.crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, this.wingspan);
            ClickyBeach.crc2.lineTo(10, this.wingspan);
            ClickyBeach.crc2.lineTo(15, 0);
            ClickyBeach.crc2.lineTo(20, this.wingspan);
            ClickyBeach.crc2.lineTo(30, this.wingspan);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.restore();
            if (this.wingspan == 5)
                this.wingVelocity = -.25;
            if (this.wingspan == -5)
                this.wingVelocity = .25;
            this.wingspan += this.wingVelocity;
        }
    }
    ClickyBeach.StaticBird = StaticBird;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=StaticBird.js.map