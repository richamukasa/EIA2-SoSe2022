namespace GardeningSim {
    export class Carrot extends Plant {
        constructor(_position?: Vector, _field?: Field) {
            super(_position, _field);
            this.name = "Carrot";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
}