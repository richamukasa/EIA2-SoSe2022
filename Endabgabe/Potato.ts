namespace GardeningSim {
    export class Potato extends Plant {
        constructor(_position?: Vector, _field?: Field) {
            super(_position, _field);
            this.name = "Potato";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
}