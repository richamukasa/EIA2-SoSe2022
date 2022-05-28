namespace Beach {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        addHor(_addend: Vector): void {
            this.x += _addend.x;
        }
    }
}