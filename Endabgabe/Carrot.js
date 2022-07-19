var GardeningSim;
(function (GardeningSim) {
    class Carrot extends GardeningSim.Plant {
        constructor(_position, _field) {
            super(_position, _field);
            this.name = "Carrot";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
    GardeningSim.Carrot = Carrot;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Carrot.js.map