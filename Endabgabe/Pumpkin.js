var GardeningSim;
(function (GardeningSim) {
    class Pumpkin extends GardeningSim.Plant {
        constructor(_position, _field) {
            super(_position, _field);
            this.name = "Pumpkin";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
    GardeningSim.Pumpkin = Pumpkin;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Pumpkin.js.map