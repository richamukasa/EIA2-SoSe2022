var GardeningSim;
(function (GardeningSim) {
    class Spinach extends GardeningSim.Plant {
        constructor(_position, _field) {
            super(_position, _field);
            this.name = "Spinach";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
    GardeningSim.Spinach = Spinach;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Spinach.js.map