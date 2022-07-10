var ClickyBeach;
(function (ClickyBeach) {
    class Immoveable {
        position;
        skinColor;
        action;
        constructor(_position) {
            this.position = _position;
            this.skinColor = {
                r: ClickyBeach.randomInteger(0, 255),
                g: ClickyBeach.randomInteger(0, 255),
                b: ClickyBeach.randomInteger(0, 255)
            };
            this.action = ClickyBeach.ACTION.REST;
            this.draw();
        }
        clicked(_hotspot) {
            let hitbox = 120;
            let difference = new ClickyBeach.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y + 50);
            if ((Math.abs(difference.x) < hitbox && Math.abs(difference.y) < hitbox)) {
                console.log("Was klickst du mich an?");
            }
            return (Math.abs(difference.x) < hitbox && Math.abs(difference.y) < hitbox);
        }
        update() {
        }
    }
    ClickyBeach.Immoveable = Immoveable;
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=Immoveable.js.map