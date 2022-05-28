namespace Beach {
    export class Ship {
        position: Vector;
        speed: number;

        constructor(_speed: number) {
            this.speed = _speed;
            this.position = new Vector(randomInteger(canWidth * 0.625, canWidth * 0.89), randomInteger(canHeight * 0.22, canHeight * 0.24));
            this.draw();

        }

        draw(): void {
            crc2.strokeStyle = "HSL(11, 100%, 36%)";
            crc2.fillStyle = "HSL(11, 100%, 36%)";

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(600, 0);
            crc2.lineTo(540, 60);
            crc2.lineTo(60, 60);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle = "HSL(11, 18%, 91%)";
            crc2.fillStyle = "HSL(11, 18%, 91%)";
            crc2.beginPath();
            crc2.rect(150, -40, 300, 40);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle = "HSL(11, 0%, 46%)";
            crc2.fillStyle = "HSL(11, 0%, 46%)";
            crc2.beginPath();
            crc2.rect(200, -90, 25, 50);
            crc2.rect(287.5, -90, 25, 50);
            crc2.rect(375, -90, 25, 50);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }

        move(): void {
            let offset: Vector = new Vector(this.position.x, this.position.y);
            offset.scale(this.speed);
            this.position.addHor(offset);
        }
    }
}