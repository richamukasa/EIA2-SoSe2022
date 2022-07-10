/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Noch immer ich
 */
var HeritageBeach;
(function (HeritageBeach) {
    class Tree extends HeritageBeach.Immoveable {
        // this.position = new Vector(randomInteger(0, canWidth * 0.18), randomInteger(canHeight * 0.2, canHeight * 0.25));
        constructor(_position) {
            super(_position);
        }
        draw() {
            let sizeFactor = this.position.y / HeritageBeach.crc2.canvas.height;
            HeritageBeach.crc2.strokeStyle = "brown";
            HeritageBeach.crc2.fillStyle = "brown";
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(80 * sizeFactor, 0);
            HeritageBeach.crc2.lineTo(40 * sizeFactor, 380 * sizeFactor);
            HeritageBeach.crc2.lineTo(0, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.closePath();
            HeritageBeach.crc2.strokeStyle = "darkgreen";
            HeritageBeach.crc2.fillStyle = "lightgreen";
            HeritageBeach.crc2.translate(40 * sizeFactor, 0);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(40 * sizeFactor, -40 * sizeFactor);
            HeritageBeach.crc2.lineTo(120 * sizeFactor, 80 * sizeFactor);
            HeritageBeach.crc2.lineTo(0, 0);
            HeritageBeach.crc2.lineTo(-40 * sizeFactor, -40 * sizeFactor);
            HeritageBeach.crc2.lineTo(-120 * sizeFactor, 80 * sizeFactor);
            HeritageBeach.crc2.lineTo(0, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.closePath();
            HeritageBeach.crc2.translate(-40 * sizeFactor, -20 * sizeFactor);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(80 * sizeFactor, 0);
            HeritageBeach.crc2.lineTo(40 * sizeFactor, 140 * sizeFactor);
            HeritageBeach.crc2.lineTo(0, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.Tree = Tree;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Tree.js.map