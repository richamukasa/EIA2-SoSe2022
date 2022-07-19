var GardeningSim;
(function (GardeningSim) {
    class Potato extends GardeningSim.Plant {
        constructor(_position, _field) {
            super(_position, _field);
            this.name = "Potato";
            this.maxWater = 500;
            this.maxFertilizer = 275;
        }
    }
    GardeningSim.Potato = Potato;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Potato.js.map