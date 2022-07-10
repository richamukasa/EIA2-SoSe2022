namespace ClickyBeach {
    export class Mountain extends Immoveable {

        draw(): void {
            let endPoint: Vector = new Vector(randomInteger(750, 1200), 155);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(0, 0);
            crc2.strokeStyle = "#152109";
            crc2.fillStyle = "#152109";
            for (let i: number = 0; i < endPoint.x; i += 50) {
                let randomHeight: number = randomInteger(-50, 50);
                crc2.lineTo(i, randomHeight);
            }
            crc2.lineTo(endPoint.x, endPoint.y);
            crc2.lineTo(0, endPoint.y);
            crc2.lineTo(0, 0);
            crc2.stroke();
            crc2.fill();
            crc2.restore();
        }
    }
}