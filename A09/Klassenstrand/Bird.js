var Beach;
(function (Beach) {
    class Bird {
        position;
        type;
        speed;
        constructor({ _type, _speed }) {
            this.position = new Beach.Vector(Beach.randomInteger(0, Beach.canWidth), Beach.randomInteger(Beach.canHeight * 0.028, Beach.canHeight * 0.231));
            this.type = _type;
            this.speed = _speed;
        }
        draw() {
            if (this.type == 0) {
                let birdColor = {
                    r: Beach.randomInteger(0, 255),
                    g: Beach.randomInteger(0, 255),
                    b: Beach.randomInteger(0, 255)
                };
                Beach.crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
                Beach.crc2.save();
                Beach.crc2.translate(this.position.x, this.position.y);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(10, -5);
                Beach.crc2.lineTo(15, 0);
                Beach.crc2.lineTo(20, -5);
                Beach.crc2.lineTo(30, 0);
                Beach.crc2.stroke();
                Beach.crc2.restore();
            }
            else {
                let birdColor = {
                    r: Beach.randomInteger(0, 255),
                    g: Beach.randomInteger(0, 255),
                    b: Beach.randomInteger(0, 255)
                };
                Beach.crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
                Beach.crc2.save();
                Beach.crc2.translate(this.position.x, this.position.y);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(30, 0);
                Beach.crc2.stroke();
                Beach.crc2.translate(10, 0);
                Beach.crc2.beginPath();
                Beach.crc2.moveTo(0, 0);
                Beach.crc2.lineTo(5, -10);
                Beach.crc2.lineTo(15, -10);
                Beach.crc2.stroke();
                Beach.crc2.restore();
            }
        }
        move() {
            let offset = new Beach.Vector(this.position.x, this.position.y);
            offset.scale(this.speed * -1);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x -= Beach.canWidth;
            if (this.position.x > Beach.canWidth)
                this.position.x += Beach.canWidth;
        }
    }
    Beach.Bird = Bird;
})(Beach || (Beach = {}));
//# sourceMappingURL=Bird.js.map