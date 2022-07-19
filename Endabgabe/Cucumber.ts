namespace GardeningSim {
    export class Cucumber extends Plant {
        constructor(_position?: Vector, _field?: Field) {
            super(_position, _field);
            this.name = "Cucumber";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
}