var HeritageBeach;
(function (HeritageBeach) {
    class Immoveable {
        position;
        skinColor;
        constructor(_position) {
            this.position = _position;
            this.skinColor = {
                r: HeritageBeach.randomInteger(0, 255),
                g: HeritageBeach.randomInteger(0, 255),
                b: HeritageBeach.randomInteger(0, 255)
            };
            this.draw();
        }
        draw() {
        }
    }
    HeritageBeach.Immoveable = Immoveable;
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=Immoveable.js.map