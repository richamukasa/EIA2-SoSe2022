var HeritageBeach;
(function (HeritageBeach) {
    class Moveable {
        position;
        velocity;
        speed;
        constructor(_position, _velocity, _speed) {
            this.position = _position;
            this.velocity = _velocity;
            this.speed = _speed;
            this.draw();
        }
        draw() {
        }
        move(_timeslice) {
            let offset = new HeritageBeach.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += HeritageBeach.crc2.canvas.width;
            if (this.position.x > HeritageBeach.crc2.canvas.width)
                this.position.x -= HeritageBeach.crc2.canvas.width;
        }
    }
    HeritageBeach.Moveable = Moveable;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Moveable.js.map