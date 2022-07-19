var GardeningSim;
(function (GardeningSim) {
    class Cucumber extends GardeningSim.Plant {
        constructor(_position, _field) {
            super(_position, _field);
            this.name = "Cucumber";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
    GardeningSim.Cucumber = Cucumber;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Cucumber.js.map