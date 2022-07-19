namespace GardeningSim {
    export class Vector {
        x: number;
        y: number; 

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        public static randomVector(_x1: number, _x2: number, _y1: number, _y2: number): Vector {
            let x: number = Math.floor(Math.random() * (_x2 - _x1) + _x1);
            let y: number = Math.floor(Math.random() * (_y2 - _y1) + _y1);
            return new Vector(x, y);
        }

        public setPosition(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

    }
}