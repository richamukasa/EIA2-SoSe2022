namespace GardeningSim {
    export class Spinach extends Plant {
        constructor(_position?: Vector, _field?: Field) {
            super(_position, _field);
            this.name = "Spinach";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
}