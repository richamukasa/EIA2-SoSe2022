var GardeningSim;
(function (GardeningSim) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        static randomVector(_x1, _x2, _y1, _y2) {
            let x = Math.floor(Math.random() * (_x2 - _x1) + _x1);
            let y = Math.floor(Math.random() * (_y2 - _y1) + _y1);
            return new Vector(x, y);
        }
        setPosition(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    GardeningSim.Vector = Vector;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Vector.js.map