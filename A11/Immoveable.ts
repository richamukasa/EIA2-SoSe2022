namespace ClickyBeach {
    export abstract class Immoveable {
        position: Vector;
        skinColor: RGBColor;
        action: ACTION;

        constructor(_position: Vector) {
            this.position = _position;
            this.skinColor = {
                r: randomInteger(0, 255),
                g: randomInteger(0, 255),
                b: randomInteger(0, 255)
            };
            this.action = ACTION.REST;
            this.draw();
        }

        public clicked(_hotspot: Vector): boolean {
            let hitbox: number = 120;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y + 50);
            
            if ((Math.abs(difference.x) < hitbox && Math.abs(difference.y) < hitbox)) {
                console.log("Was klickst du mich an?");
            }

            return (Math.abs(difference.x) < hitbox && Math.abs(difference.y) < hitbox);
        }

        protected abstract draw(): void;
        
        public update(): void {
            
        }
    }
}