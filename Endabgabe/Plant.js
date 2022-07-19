var GardeningSim;
(function (GardeningSim) {
    class Plant {
        static price;
        position;
        health;
        vermins;
        name;
        growth;
        level;
        maxHealth;
        maxWater;
        maxFertilizer;
        field;
        growthRate;
        constructor(_position, _field, _price) {
            Plant.price = _price;
            this.position = _position;
            this.field = _field;
            this.growth = GardeningSim.GROWTH.SEEDLING;
            this.level = 1;
            this.health = this.maxHealth = 100;
            this.vermins = [];
            this.exist();
        }
        static setFluctuation(_min, _max) {
            return Math.round((Math.random() * (_max - _min) + _max) * 10) / 10;
        }
        liberate() {
            for (let vermin of this.vermins) {
                vermin.die();
            }
            this.vermins = [];
        }
        die() {
            this.position.setPosition(-10, -10);
            this.field.reset();
            this.field.fieldPlant.pop();
        }
        update() {
            this.field.div.style.backgroundColor = "brown";
            if (this.level < 25)
                this.field.div.style.backgroundImage = this.field.pictures[0];
            else if (this.level >= 25 && this.level < 74)
                this.field.div.style.backgroundImage = this.field.pictures[1];
            else if (this.level >= 75 && this.level <= 100)
                this.field.div.style.backgroundImage = this.field.pictures[2];
            else if (this.level > 100)
                this.field.div.style.backgroundImage = this.field.pictures[3];
            if (this.field.recovering)
                this.field.div.style.backgroundColor = "lightbrown";
        }
        exist() {
            switch (this.growth) {
                case GardeningSim.GROWTH.UNRIPE:
                    this.maxHealth = 150;
                    break;
                case GardeningSim.GROWTH.UNRIPE:
                    this.maxHealth = 200;
                    break;
                case GardeningSim.GROWTH.UNRIPE:
                    this.rot(this.level - 100);
                    break;
                case GardeningSim.GROWTH.UNRIPE:
                    this.die();
                    break;
            }
            if (this.growth != GardeningSim.GROWTH.DEAD) {
                if (this.field.fieldWater > 0) {
                    setTimeout(function () {
                        if (this.health < this.maxHealth)
                            this.health++;
                        this.field.water--;
                    }, 1000);
                    if (this.field.fieldFertilizer == 0) {
                        setTimeout(function () {
                            this.level++;
                        }, this.growthRate);
                    }
                    else if (this.field.fieldFertilizer > 0 && this.field.fieldFertilizer < this.maxFertilizer) {
                        setTimeout(function () {
                            this.level++;
                            this.field.fertilizer--;
                        }, this.growthRate * 2);
                    }
                    else if (this.field.fieldFertilizer > this.maxFertilizer)
                        this.rot();
                    if (this.level >= 25)
                        this.growth = GardeningSim.GROWTH.UNRIPE;
                    if (this.level >= 75)
                        this.growth = GardeningSim.GROWTH.RIPE;
                    if (this.level > 100)
                        this.growth = GardeningSim.GROWTH.OVERRIPE;
                }
                else if (this.field.fieldWater > this.maxWater) {
                    this.rot(0.5);
                }
                else if (this.field.fieldWater == 0) {
                    this.rot();
                }
            }
        }
        rot(_speed = 1) {
            setTimeout(function () {
                this.health -= _speed;
            }, this.growthRate);
            if (this.health <= 0)
                this.growth = GardeningSim.GROWTH.DEAD;
        }
    }
    GardeningSim.Plant = Plant;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Plant.js.map