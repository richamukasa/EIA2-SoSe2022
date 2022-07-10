namespace ClickyBeach {
    export class Moveable {
        position: Vector;
        velocity: Vector;
        speed: number;

        constructor(_position: Vector, _velocity: Vector, _speed: number) {
            this.position = _position;
            this.velocity = _velocity;
            this.speed = _speed;

            this.draw();
        }

        draw(): void {

        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.addHor(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }
    }
}