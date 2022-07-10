namespace ClickyBeach {
    export class DynamicBird extends Moveable {
        wingspan: number;
        wingVelocity: number;

        constructor(_position: Vector, _velocity: Vector, _speed: number) {
            super(_position, _velocity, _speed);
            this.wingspan = -10;
            this.wingVelocity = .5;
        }

        draw(): void {
            let birdColor: RGBColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };

            crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(30, 0);
            crc2.stroke();

            crc2.translate(10, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(5, this.wingspan);
            crc2.lineTo(15, this.wingspan);
            crc2.stroke();
            crc2.restore();

            if (this.wingspan == 10)
            this.wingVelocity = -1;

            if (this.wingspan == -10)
            this.wingVelocity = 1;

            this.wingspan += this.wingVelocity;
        }
    }

}