/**
 * Aufgabe: L11 Strand: Clickable
 * Matrikel: 270000
 * Datum: 09.07.2022
 * Quellen: Arno von der Regie
 */
namespace ClickyBeach {
    export class Ship extends Immoveable {

        // this.position = new Vector(randomInteger(canWidth * 0.625, canWidth * 0.89), randomInteger(canHeight * 0.22, canHeight * 0.24));
        chimneyOne: Vector;
        chimneyTwo: Vector;
        chimneyThree: Vector;
        chimneys: Vector[];

        constructor(_position: Vector) {
            super(_position);
            this.chimneyOne = new Vector(212.5, -90);
            this.chimneyTwo = new Vector(300, -90);
            this.chimneyThree = new Vector(387.5, -90);
            this.chimneys = [this.chimneyOne, this.chimneyTwo, this.chimneyThree];
        }

        public update(): void {
            switch (this.action) {
                case ACTION.REST:
                    this.draw();
                    break;
                case ACTION.STEAM:
                    this.blowSteam();
                    this.draw();
                    window.setTimeout(this.reset, 5000);
                    break;
            }
        }

        protected draw(): void {
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

        private blowSteam(): void {
            let r1: number = randomInteger(5, 15);
            let r2: number = randomInteger(20, 30);
            let steamDensity: number = randomInteger(10, 15);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle: Path2D = new Path2D;

            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
            gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
            crc2.fillStyle = gradient;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            for (let chimney of this.chimneys) {
                for (let i: number = 0; i < steamDensity; i++) {
                    let x: number = randomInteger(chimney.x - 5, chimney.x + 5);
                    let y: number = randomInteger(chimney.y - 30, chimney.y);

                    crc2.save();
                    crc2.translate(x, y);
                    crc2.fill(particle);
                    crc2.restore();
                }
            }
            crc2.restore();
        }

        private reset(): void {
            this.action = ACTION.REST;
        }


    }
}