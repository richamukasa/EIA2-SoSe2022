var Beach;
(function (Beach) {
    class Tree {
        position;
        constructor() {
            this.position = new Beach.Vector(Beach.randomInteger(0, Beach.canWidth * 0.18), Beach.randomInteger(Beach.canHeight * 0.2, Beach.canHeight * 0.25));
        }
        draw() {
            let sizeFactor = this.position.y / Beach.crc2.canvas.height;
            Beach.crc2.strokeStyle = "brown";
            Beach.crc2.fillStyle = "brown";
            Beach.crc2.save();
            Beach.crc2.translate(this.position.x, this.position.y);
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(0, 0);
            Beach.crc2.lineTo(80 * sizeFactor, 0);
            Beach.crc2.lineTo(40 * sizeFactor, 380 * sizeFactor);
            Beach.crc2.lineTo(0, 0);
            Beach.crc2.stroke();
            Beach.crc2.fill();
            Beach.crc2.closePath();
            Beach.crc2.strokeStyle = "darkgreen";
            Beach.crc2.fillStyle = "lightgreen";
            Beach.crc2.translate(40 * sizeFactor, 0);
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(0, 0);
            Beach.crc2.lineTo(40 * sizeFactor, -40 * sizeFactor);
            Beach.crc2.lineTo(120 * sizeFactor, 80 * sizeFactor);
            Beach.crc2.lineTo(0, 0);
            Beach.crc2.lineTo(-40 * sizeFactor, -40 * sizeFactor);
            Beach.crc2.lineTo(-120 * sizeFactor, 80 * sizeFactor);
            Beach.crc2.lineTo(0, 0);
            Beach.crc2.stroke();
            Beach.crc2.fill();
            Beach.crc2.closePath();
            Beach.crc2.translate(-40 * sizeFactor, -20 * sizeFactor);
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(0, 0);
            Beach.crc2.lineTo(80 * sizeFactor, 0);
            Beach.crc2.lineTo(40 * sizeFactor, 140 * sizeFactor);
            Beach.crc2.lineTo(0, 0);
            Beach.crc2.stroke();
            Beach.crc2.fill();
            Beach.crc2.restore();
        }
    }
    Beach.Tree = Tree;
})(Beach || (Beach = {}));
//# sourceMappingURL=Tree.js.map