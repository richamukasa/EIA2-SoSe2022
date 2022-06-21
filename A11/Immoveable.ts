namespace HeritageBeach {
    export class Immoveable {
        position: Vector;
        skinColor: RGBColor;

        constructor(_position: Vector) {
            this.position = _position;
            this.skinColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };
            this.draw();
        }

        draw(): void {

        }
    }
}