var Beach;
(function (Beach) {
    class Ship {
        position;
        speed;
        constructor(_speed) {
            this.speed = _speed;
            this.position = new Beach.Vector(Beach.randomInteger(Beach.canWidth * 0.625, Beach.canWidth * 0.89), Beach.randomInteger(Beach.canHeight * 0.22, Beach.canHeight * 0.24));
            this.draw();
        }
        draw() {
            Beach.crc2.strokeStyle = "HSL(11, 100%, 36%)";
            Beach.crc2.fillStyle = "HSL(11, 100%, 36%)";
            Beach.crc2.save();
            Beach.crc2.translate(this.position.x, this.position.y);
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(0, 0);
            Beach.crc2.lineTo(600, 0);
            Beach.crc2.lineTo(540, 60);
            Beach.crc2.lineTo(60, 60);
            Beach.crc2.lineTo(0, 0);
            Beach.crc2.stroke();
            Beach.crc2.fill();
            Beach.crc2.closePath();
            Beach.crc2.strokeStyle = "HSL(11, 18%, 91%)";
            Beach.crc2.fillStyle = "HSL(11, 18%, 91%)";
            Beach.crc2.beginPath();
            Beach.crc2.rect(150, -40, 300, 40);
            Beach.crc2.stroke();
            Beach.crc2.fill();
            Beach.crc2.closePath();
            Beach.crc2.strokeStyle = "HSL(11, 0%, 46%)";
            Beach.crc2.fillStyle = "HSL(11, 0%, 46%)";
            Beach.crc2.beginPath();
            Beach.crc2.rect(200, -90, 25, 50);
            Beach.crc2.rect(287.5, -90, 25, 50);
            Beach.crc2.rect(375, -90, 25, 50);
            Beach.crc2.stroke();
            Beach.crc2.fill();
            Beach.crc2.restore();
        }
        move() {
            let offset = new Beach.Vector(this.position.x, this.position.y);
            offset.scale(this.speed);
            this.position.addHor(offset);
        }
    }
    Beach.Ship = Ship;
})(Beach || (Beach = {}));
//# sourceMappingURL=Ship.js.map