/**
 * Aufgabe: L11 Strand: Clickable
 * Matrikel: 270000
 * Datum: 09.07.2022
 * Quellen: Arno von der Regie
 */
var ClickyBeach;
(function (ClickyBeach) {
    class Ship extends ClickyBeach.Immoveable {
        // this.position = new Vector(randomInteger(canWidth * 0.625, canWidth * 0.89), randomInteger(canHeight * 0.22, canHeight * 0.24));
        chimneyOne;
        chimneyTwo;
        chimneyThree;
        chimneys;
        constructor(_position) {
            super(_position);
            this.chimneyOne = new ClickyBeach.Vector(212.5, -90);
            this.chimneyTwo = new ClickyBeach.Vector(300, -90);
            this.chimneyThree = new ClickyBeach.Vector(387.5, -90);
            this.chimneys = [this.chimneyOne, this.chimneyTwo, this.chimneyThree];
        }
        update() {
            switch (this.action) {
                case ClickyBeach.ACTION.REST:
                    this.draw();
                    break;
                case ClickyBeach.ACTION.STEAM:
                    this.blowSteam();
                    this.draw();
                    window.setTimeout(this.reset, 5000);
                    break;
            }
        }
        draw() {
            ClickyBeach.crc2.strokeStyle = "HSL(11, 100%, 36%)";
            ClickyBeach.crc2.fillStyle = "HSL(11, 100%, 36%)";
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(600, 0);
            ClickyBeach.crc2.lineTo(540, 60);
            ClickyBeach.crc2.lineTo(60, 60);
            ClickyBeach.crc2.lineTo(0, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.closePath();
            ClickyBeach.crc2.strokeStyle = "HSL(11, 18%, 91%)";
            ClickyBeach.crc2.fillStyle = "HSL(11, 18%, 91%)";
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.rect(150, -40, 300, 40);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.closePath();
            ClickyBeach.crc2.strokeStyle = "HSL(11, 0%, 46%)";
            ClickyBeach.crc2.fillStyle = "HSL(11, 0%, 46%)";
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.rect(200, -90, 25, 50);
            ClickyBeach.crc2.rect(287.5, -90, 25, 50);
            ClickyBeach.crc2.rect(375, -90, 25, 50);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.restore();
        }
        blowSteam() {
            let r1 = ClickyBeach.randomInteger(5, 15);
            let r2 = ClickyBeach.randomInteger(20, 30);
            let steamDensity = ClickyBeach.randomInteger(10, 15);
            let gradient = ClickyBeach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle = new Path2D;
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
            gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
            ClickyBeach.crc2.fillStyle = gradient;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            for (let chimney of this.chimneys) {
                for (let i = 0; i < steamDensity; i++) {
                    let x = ClickyBeach.randomInteger(chimney.x - 5, chimney.x + 5);
                    let y = ClickyBeach.randomInteger(chimney.y - 30, chimney.y);
                    ClickyBeach.crc2.save();
                    ClickyBeach.crc2.translate(x, y);
                    ClickyBeach.crc2.fill(particle);
                    ClickyBeach.crc2.restore();
                }
            }
            ClickyBeach.crc2.restore();
        }
        reset() {
            this.action = ClickyBeach.ACTION.REST;
        }
    }
    ClickyBeach.Ship = Ship;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Ship.js.map