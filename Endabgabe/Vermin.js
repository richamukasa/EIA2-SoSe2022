var GardeningSim;
(function (GardeningSim) {
    class Vermin {
        position;
        target;
        action;
        plant;
        constructor(_plants) {
            let x = Math.floor(Math.random() * 40);
            this.plant = _plants[x];
            this.target = this.plant.position;
            this.position = GardeningSim.Vector.randomVector(-50, 1970, -50, 1130);
            this.action = "fly";
        }
        update() {
            switch (this.action) {
                case "fly":
                    this.fly();
                    break;
                case "eat":
                    setTimeout(this.eat, 5000);
                    break;
                case "dead":
                    break;
            }
        }
        die() {
            this.position.setPosition(-10, -10);
            this.action = "dead";
        }
        eat() {
            this.plant.health -= 0.5;
        }
        fly() {
            if (this.position.x < this.target.x)
                this.position.x++;
            if (this.position.x > this.target.x)
                this.position.x--;
            if (this.position.y < this.target.y)
                this.position.y++;
            if (this.position.y > this.target.y)
                this.position.y--;
            if (this.position.x == this.target.x && this.position.y == this.target.y) {
                this.plant.vermins.push(this);
                this.action = "eat";
            }
        }
    }
    GardeningSim.Vermin = Vermin;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Vermin.js.map