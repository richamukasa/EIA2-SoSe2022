/**
 * Aufgabe: L11 Strand: Clickable
 * Matrikel: 270000
 * Datum: 09.07.2022
 * Quellen: Richard A. Mukasa
 */
namespace ClickyBeach {
    export class Human extends Immoveable {
        headAngle: number;
        shoulder: number;
        elbow: number;
        pelvis: number;
        knee: number;
        leftHand: number;
        rightHand: number;
        leftFoot: number;
        rightFoot: number;
        flipAngle: number;
        flipCenter: Vector;
        surfPos: Vector;
        currentPos: Vector;
        walking: boolean;

        constructor(_position: Vector) {
            super(_position);
            this.skinColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };
            this.headAngle = 0;
            this.shoulder = 51;
            this.elbow = 0;
            this.pelvis = 104;
            this.knee = 74;
            this.leftHand = this.rightHand = this.leftFoot = this.rightFoot = 0;
            this.flipAngle = 0;
            this.flipCenter = new Vector(this.position.x - 90, this.position.y + 40);
            this.currentPos = new Vector(this.position.x, this.position.y - 110);
            this.walking = false;
            this.surfPos = new Vector(randomInteger(canWidth * 0.26, canWidth * 0.964), randomInteger(canHeight * 0.37, canHeight * 0.625));
            this.draw();
        }

        // Malt jetzt per default einen Chiller
        
        public update(): void {
            switch (this.action) {
                case ACTION.REST:
                    this.draw();
                    break;
                case ACTION.BACKFLIP:
                    this.backflip();
                    this.flipAngle += 1.5;
                    this.headAngle += 3;
                    this.shoulder = 0;
                    if (this.headAngle <= 90) {
                        this.elbow += 2.47;
                        this.pelvis += 1.43;
                        this.knee += 1.23;
                    } else if (this.headAngle < 178 && this.headAngle > 90) {
                        this.elbow -= 2.47;
                        this.pelvis -= 1.43;
                        this.knee -= 1.23;
                    }
                    this.action = ACTION.GO;
                    break;
                case ACTION.GO:
                    this.walk(this.surfPos);
                    if (!this.walking)
                    this.action = ACTION.SURF;
                    break;
                case ACTION.RETURN:
                    this.walk(this.position);
                    this.action = ACTION.REST;
                    break;
                case ACTION.SURF:
                    this.surf();
                    this.action = ACTION.RETURN;
                    break;
                    
            }
        }

        protected draw(): void {
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

        /**
         * Something is definitely happening... just not what I wanted.
         */
        private backflip(): void {
            let head: Path2D = new Path2D;
            crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;

            crc2.save();
            crc2.translate(this.flipCenter.x, this.flipCenter.y);
            // berechnet den Saltowinkel
            crc2.rotate(this.flipAngle / 180 * Math.PI);
            crc2.save();
            // Kopf
            crc2.translate(90, 0);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fill(head);
            crc2.stroke(head);
            crc2.rotate(this.headAngle / 360 * Math.PI);
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 50);

            crc2.rotate(this.pelvis / 180 * Math.PI);
            crc2.lineTo(0, 100);
            crc2.rotate(this.knee / 180 * Math.PI);
            crc2.lineTo(0, 150);
            crc2.stroke();
            crc2.restore();

            crc2.moveTo(0, 10);
            crc2.rotate(this.shoulder / 180 * Math.PI);
            crc2.lineTo(50, 0);
            crc2.rotate(this.elbow / 180 * Math.PI);
            crc2.lineTo(100, 0);
            crc2.stroke();

            crc2.restore();
            crc2.restore();
        }

        private surf(): void { 
            let head: Path2D = new Path2D;
            let surfBoard: Path2D = new Path2D;
            let direction: number;
            let x: number = randomInteger(0, 1);
            if (x == 0)
                direction = 1;
            else
                direction = -1;

            crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            crc2.save();
            crc2.translate(this.surfPos.x, this.surfPos.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.stroke(head);
            crc2.fill(head);
            crc2.beginPath();
            crc2.moveTo(0, 20);
            crc2.lineTo(0, 30);
            crc2.lineTo(-15 * direction, 70);
            crc2.stroke();

            crc2.translate(-60 * direction, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(35 * direction, 30);
            crc2.lineTo(85 * direction, 30);
            crc2.lineTo(125 * direction, 60);
            crc2.stroke();

            crc2.translate(25 * direction, 95);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(30 * direction, -15);
            crc2.lineTo(0, -25);
            crc2.lineTo(40 * direction, -25);
            crc2.lineTo(70 * direction, -15);
            crc2.lineTo(40 * direction, 0);
            crc2.stroke();
            crc2.closePath();

            crc2.strokeStyle = "HSL(0, 0%, 74%)";
            crc2.fillStyle = "HSL(0, 0%, 74%)";
            crc2.translate(40 * direction, 0);
            surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
            crc2.stroke(surfBoard);
            crc2.fill(surfBoard);
            crc2.restore();
        }

        private walk(_target: Vector): void {
            let head: Path2D = new Path2D;
            crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            this.walking = true;

            crc2.save();
            crc2.translate(this.currentPos.x, this.currentPos.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fill(head);
            crc2.stroke(head);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 60);
            crc2.moveTo(0, 10);
            crc2.lineTo(this.leftHand, 110);
            crc2.moveTo(0, 10);
            crc2.lineTo(this.rightHand, 110);
            crc2.moveTo(0, 60);
            crc2.lineTo(this.leftFoot, 160);
            crc2.moveTo(0, 60);
            crc2.lineTo(this.rightFoot, 160);
            crc2.stroke();

            if (this.currentPos.x != _target.x)
                this.currentPos.x++;
            else if (this.currentPos.y != _target.y)
                this.currentPos.y++;
            else
                this.walking = false;
        }

    }
}