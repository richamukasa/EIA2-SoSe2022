var ClickyBeach;
(function (ClickyBeach) {
    class DynamicBird extends ClickyBeach.Moveable {
        wingspan;
        wingVelocity;
        constructor(_position, _velocity, _speed) {
            super(_position, _velocity, _speed);
            this.wingspan = -10;
            this.wingVelocity = .5;
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
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(30, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(10, 0);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(5, this.wingspan);
            ClickyBeach.crc2.lineTo(15, this.wingspan);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.restore();
            if (this.wingspan == 10)
                this.wingVelocity = -1;
            if (this.wingspan == -10)
                this.wingVelocity = 1;
            this.wingspan += this.wingVelocity;
        }
    }
    ClickyBeach.DynamicBird = DynamicBird;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=DynamicBird.js.map