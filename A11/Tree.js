/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Noch immer ich
 */
var ClickyBeach;
(function (ClickyBeach) {
    class Tree extends ClickyBeach.Immoveable {
        // this.position = new Vector(randomInteger(0, canWidth * 0.18), randomInteger(canHeight * 0.2, canHeight * 0.25));
        update() {
            this.draw();
        }
        draw() {
            let sizeFactor = this.position.y / ClickyBeach.crc2.canvas.height;
            ClickyBeach.crc2.strokeStyle = "brown";
            ClickyBeach.crc2.fillStyle = "brown";
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(80 * sizeFactor, 0);
            ClickyBeach.crc2.lineTo(40 * sizeFactor, 380 * sizeFactor);
            ClickyBeach.crc2.lineTo(0, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.closePath();
            ClickyBeach.crc2.strokeStyle = "darkgreen";
            ClickyBeach.crc2.fillStyle = "lightgreen";
            ClickyBeach.crc2.translate(40 * sizeFactor, 0);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(40 * sizeFactor, -40 * sizeFactor);
            ClickyBeach.crc2.lineTo(120 * sizeFactor, 80 * sizeFactor);
            ClickyBeach.crc2.lineTo(0, 0);
            ClickyBeach.crc2.lineTo(-40 * sizeFactor, -40 * sizeFactor);
            ClickyBeach.crc2.lineTo(-120 * sizeFactor, 80 * sizeFactor);
            ClickyBeach.crc2.lineTo(0, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.closePath();
            ClickyBeach.crc2.translate(-40 * sizeFactor, -20 * sizeFactor);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(80 * sizeFactor, 0);
            ClickyBeach.crc2.lineTo(40 * sizeFactor, 140 * sizeFactor);
            ClickyBeach.crc2.lineTo(0, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.fill();
            ClickyBeach.crc2.restore();
        }
    }
    ClickyBeach.Tree = Tree;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Tree.js.map