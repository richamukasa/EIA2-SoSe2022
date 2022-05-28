/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Richard A. Mukasa
 */
namespace Beach {
    export class Cloud {
        position: Vector;
        speed: number;

        constructor(_speed: number) {
            this.position = new Vector(randomInteger(0, canWidth), randomInteger(canHeight * 0.046, canHeight * 0.139));
            this.speed = _speed;
        }

        draw(): void {
            let r1: number = randomInteger(5, 15);
            let r2: number = randomInteger(20, 30);
            let cloudDensity: number = randomInteger(25, 50);
            let cloudWidth: number = randomInteger(25, 100);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle: Path2D = new Path2D;
    
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
            gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
            crc2.fillStyle = gradient;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            for (let i: number = 0; i < cloudDensity; i++) {
                let x: number = randomInteger(-cloudWidth, cloudWidth);
                let y: number = randomInteger(- 5, 20);
    
                crc2.save();
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

        move(): void {
            let offset: Vector = new Vector(this.position.x, this.position.y);
            offset.scale(this.speed);
            this.position.addHor(offset);

            if (this.position.x < 0)
                this.position.x += canWidth;
            if (this.position.x > canWidth)
                this.position.x -= canWidth;
        }
    }
}