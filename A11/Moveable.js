var ClickyBeach;
(function (ClickyBeach) {
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
            let offset = new ClickyBeach.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);
            if (this.position.x < 0)
                this.position.x += ClickyBeach.crc2.canvas.width;
            if (this.position.x > ClickyBeach.crc2.canvas.width)
                this.position.x -= ClickyBeach.crc2.canvas.width;
        }
    }
    ClickyBeach.Moveable = Moveable;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Moveable.js.map