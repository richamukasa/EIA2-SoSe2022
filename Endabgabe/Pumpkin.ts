namespace GardeningSim {
    export class Pumpkin extends Plant {
        constructor(_position?: Vector, _field?: Field) {
            super(_position, _field);
            this.name = "Pumpkin";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
}