/**
 * Aufgabe: L11 Strand: Clickable
 * Matrikel: 270000
 * Datum: 09.07.2022
 * Quellen: Richard A. Mukasa
 */
var ClickyBeach;
(function (ClickyBeach) {
    class Human extends ClickyBeach.Immoveable {
        headAngle;
        shoulder;
        elbow;
        pelvis;
        knee;
        leftHand;
        rightHand;
        leftFoot;
        rightFoot;
        flipAngle;
        flipCenter;
        surfPos;
        currentPos;
        walking;
        constructor(_position) {
            super(_position);
            this.skinColor = {
                r: ClickyBeach.randomInteger(0, 255),
                g: ClickyBeach.randomInteger(0, 255),
                b: ClickyBeach.randomInteger(0, 255)
            };
            this.headAngle = 0;
            this.shoulder = 51;
            this.elbow = 0;
            this.pelvis = 104;
            this.knee = 74;
            this.leftHand = this.rightHand = this.leftFoot = this.rightFoot = 0;
            this.flipAngle = 0;
            this.flipCenter = new ClickyBeach.Vector(this.position.x - 90, this.position.y + 40);
            this.currentPos = new ClickyBeach.Vector(this.position.x, this.position.y - 110);
            this.walking = false;
            this.surfPos = new ClickyBeach.Vector(ClickyBeach.randomInteger(ClickyBeach.canWidth * 0.26, ClickyBeach.canWidth * 0.964), ClickyBeach.randomInteger(ClickyBeach.canHeight * 0.37, ClickyBeach.canHeight * 0.625));
            this.draw();
        }
        // Malt jetzt per default einen Chiller
        update() {
            switch (this.action) {
                case ClickyBeach.ACTION.REST:
                    this.draw();
                    break;
                case ClickyBeach.ACTION.BACKFLIP:
                    this.backflip();
                    this.flipAngle += 1.5;
                    this.headAngle += 3;
                    this.shoulder = 0;
                    if (this.headAngle <= 90) {
                        this.elbow += 2.47;
                        this.pelvis += 1.43;
                        this.knee += 1.23;
                    }
                    else if (this.headAngle < 178 && this.headAngle > 90) {
                        this.elbow -= 2.47;
                        this.pelvis -= 1.43;
                        this.knee -= 1.23;
                    }
                    this.action = ClickyBeach.ACTION.GO;
                    break;
                case ClickyBeach.ACTION.GO:
                    this.walk(this.surfPos);
                    if (!this.walking)
                        this.action = ClickyBeach.ACTION.SURF;
                    break;
                case ClickyBeach.ACTION.RETURN:
                    this.walk(this.position);
                    this.action = ClickyBeach.ACTION.REST;
                    break;
                case ClickyBeach.ACTION.SURF:
                    this.surf();
                    this.action = ClickyBeach.ACTION.RETURN;
                    break;
            }
        }
        draw() {
            let head = new Path2D;
            ClickyBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.position.x, this.position.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            ClickyBeach.crc2.fill(head);
            ClickyBeach.crc2.stroke(head);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 20);
            ClickyBeach.crc2.lineTo(0, 30);
            ClickyBeach.crc2.lineTo(-35, 60);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(0, 30);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(20, 30);
            ClickyBeach.crc2.lineTo(105, 30);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(20, 30);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(15, -30);
            ClickyBeach.crc2.lineTo(35, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.restore();
        }
        /**
         * Something is definitely happening... just not what I wanted.
         */
        backflip() {
            let head = new Path2D;
            ClickyBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.flipCenter.x, this.flipCenter.y);
            // berechnet den Saltowinkel
            ClickyBeach.crc2.rotate(this.flipAngle / 180 * Math.PI);
            ClickyBeach.crc2.save();
            // Kopf
            ClickyBeach.crc2.translate(90, 0);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            ClickyBeach.crc2.fill(head);
            ClickyBeach.crc2.stroke(head);
            ClickyBeach.crc2.rotate(this.headAngle / 360 * Math.PI);
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(0, 50);
            ClickyBeach.crc2.rotate(this.pelvis / 180 * Math.PI);
            ClickyBeach.crc2.lineTo(0, 100);
            ClickyBeach.crc2.rotate(this.knee / 180 * Math.PI);
            ClickyBeach.crc2.lineTo(0, 150);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.restore();
            ClickyBeach.crc2.moveTo(0, 10);
            ClickyBeach.crc2.rotate(this.shoulder / 180 * Math.PI);
            ClickyBeach.crc2.lineTo(50, 0);
            ClickyBeach.crc2.rotate(this.elbow / 180 * Math.PI);
            ClickyBeach.crc2.lineTo(100, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.restore();
            ClickyBeach.crc2.restore();
        }
        surf() {
            let head = new Path2D;
            let surfBoard = new Path2D;
            let direction;
            let x = ClickyBeach.randomInteger(0, 1);
            if (x == 0)
                direction = 1;
            else
                direction = -1;
            ClickyBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.surfPos.x, this.surfPos.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            ClickyBeach.crc2.stroke(head);
            ClickyBeach.crc2.fill(head);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 20);
            ClickyBeach.crc2.lineTo(0, 30);
            ClickyBeach.crc2.lineTo(-15 * direction, 70);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(-60 * direction, 0);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(35 * direction, 30);
            ClickyBeach.crc2.lineTo(85 * direction, 30);
            ClickyBeach.crc2.lineTo(125 * direction, 60);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.translate(25 * direction, 95);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(30 * direction, -15);
            ClickyBeach.crc2.lineTo(0, -25);
            ClickyBeach.crc2.lineTo(40 * direction, -25);
            ClickyBeach.crc2.lineTo(70 * direction, -15);
            ClickyBeach.crc2.lineTo(40 * direction, 0);
            ClickyBeach.crc2.stroke();
            ClickyBeach.crc2.closePath();
            ClickyBeach.crc2.strokeStyle = "HSL(0, 0%, 74%)";
            ClickyBeach.crc2.fillStyle = "HSL(0, 0%, 74%)";
            ClickyBeach.crc2.translate(40 * direction, 0);
            surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
            ClickyBeach.crc2.stroke(surfBoard);
            ClickyBeach.crc2.fill(surfBoard);
            ClickyBeach.crc2.restore();
        }
        walk(_target) {
            let head = new Path2D;
            ClickyBeach.crc2.strokeStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            ClickyBeach.crc2.fillStyle = `rgb(${this.skinColor.r}, ${this.skinColor.g}, ${this.skinColor.b})`;
            this.walking = true;
            ClickyBeach.crc2.save();
            ClickyBeach.crc2.translate(this.currentPos.x, this.currentPos.y);
            head.arc(0, 0, 20, 0, 2 * Math.PI);
            ClickyBeach.crc2.fill(head);
            ClickyBeach.crc2.stroke(head);
            ClickyBeach.crc2.beginPath();
            ClickyBeach.crc2.moveTo(0, 0);
            ClickyBeach.crc2.lineTo(0, 60);
            ClickyBeach.crc2.moveTo(0, 10);
            ClickyBeach.crc2.lineTo(this.leftHand, 110);
            ClickyBeach.crc2.moveTo(0, 10);
            ClickyBeach.crc2.lineTo(this.rightHand, 110);
            ClickyBeach.crc2.moveTo(0, 60);
            ClickyBeach.crc2.lineTo(this.leftFoot, 160);
            ClickyBeach.crc2.moveTo(0, 60);
            ClickyBeach.crc2.lineTo(this.rightFoot, 160);
            ClickyBeach.crc2.stroke();
            if (this.currentPos.x != _target.x)
                this.currentPos.x++;
            else if (this.currentPos.y != _target.y)
                this.currentPos.y++;
            else
                this.walking = false;
        }
    }
    ClickyBeach.Human = Human;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Human.js.map