/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Das zieht sich
 */
var HeritageBeach;
(function (HeritageBeach) {
    class Ship extends HeritageBeach.Immoveable {
        // this.position = new Vector(randomInteger(canWidth * 0.625, canWidth * 0.89), randomInteger(canHeight * 0.22, canHeight * 0.24));
        draw() {
            HeritageBeach.crc2.strokeStyle = "HSL(11, 100%, 36%)";
            HeritageBeach.crc2.fillStyle = "HSL(11, 100%, 36%)";
            HeritageBeach.crc2.save();
            HeritageBeach.crc2.translate(this.position.x, this.position.y);
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.moveTo(0, 0);
            HeritageBeach.crc2.lineTo(600, 0);
            HeritageBeach.crc2.lineTo(540, 60);
            HeritageBeach.crc2.lineTo(60, 60);
            HeritageBeach.crc2.lineTo(0, 0);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.closePath();
            HeritageBeach.crc2.strokeStyle = "HSL(11, 18%, 91%)";
            HeritageBeach.crc2.fillStyle = "HSL(11, 18%, 91%)";
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.rect(150, -40, 300, 40);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.closePath();
            HeritageBeach.crc2.strokeStyle = "HSL(11, 0%, 46%)";
            HeritageBeach.crc2.fillStyle = "HSL(11, 0%, 46%)";
            HeritageBeach.crc2.beginPath();
            HeritageBeach.crc2.rect(200, -90, 25, 50);
            HeritageBeach.crc2.rect(287.5, -90, 25, 50);
            HeritageBeach.crc2.rect(375, -90, 25, 50);
            HeritageBeach.crc2.stroke();
            HeritageBeach.crc2.fill();
            HeritageBeach.crc2.restore();
        }
    }
    HeritageBeach.Ship = Ship;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Ship.js.map