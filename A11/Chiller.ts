namespace HeritageBeach {
    export class Chiller extends Immoveable {
        draw(): void {
            let head: Path2D = new Path2D;

            crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fill(head);
            crc2.stroke(head);
            crc2.beginPath();
            crc2.moveTo(0, 20);
            crc2.lineTo(0, 30);
            crc2.lineTo(-35, 60);
            crc2.stroke();

            crc2.translate(0, 30);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(20, 30);
            crc2.lineTo(105, 30);
            crc2.stroke();

            crc2.translate(20, 30);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(15, -30);
            crc2.lineTo(35, 0);
            crc2.stroke();

            crc2.restore();
        }
    }
}