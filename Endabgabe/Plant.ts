namespace GardeningSim {
    export abstract class Plant {
        public static price: number;
        public position: Vector;
        public health: number;
        public vermins: Vermin[];
        public name: string;
        public growth: GROWTH;
        public level: number;
        public maxHealth: number;
        public maxWater: number;
        public maxFertilizer: number;
        protected field: Field;
        protected growthRate: number;

        constructor(_position?: Vector, _field?: Field, _price?: number) {
            Plant.price = _price;
            this.position = _position;
            this.field = _field;
            this.growth = GROWTH.SEEDLING;
            this.level = 1;
            this.health = this.maxHealth = 100;
            this.vermins = [];
            this.exist();
        }

        public static setFluctuation(_min: number, _max: number): number {
            return Math.round((Math.random() * (_max - _min) + _max) * 10) / 10;
        }

        public liberate(): void {
            for (let vermin of this.vermins) {
                vermin.die();
            }
            this.vermins = [];
        }
        public die(): void {
            this.position.setPosition(-10, -10);
            this.field.reset();
            this.field.fieldPlant.pop();
        }

        public update(): void {
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

        public exist(): void {
            switch (this.growth) {
                case GROWTH.UNRIPE:
                    this.maxHealth = 150;
                    break;
                case GROWTH.UNRIPE:
                    this.maxHealth = 200;
                    break;
                case GROWTH.UNRIPE:
                    this.rot(this.level - 100);
                    break;
                case GROWTH.UNRIPE:
                    this.die();
                    break;

            }

            if (this.growth != GROWTH.DEAD) {
                if (this.field.fieldWater > 0) {
                    setTimeout(function (): void {
                        if (this.health < this.maxHealth)
                            this.health++;
                        this.field.water--;
                    }, 1000);
                    if (this.field.fieldFertilizer == 0) {
                        setTimeout(function (): void {
                            this.level++;
                        }, this.growthRate);
                    } else if (this.field.fieldFertilizer > 0 && this.field.fieldFertilizer < this.maxFertilizer) {
                        setTimeout(function (): void {
                            this.level++;
                            this.field.fertilizer--;
                        }, this.growthRate * 2);
                    } else if (this.field.fieldFertilizer > this.maxFertilizer)
                        this.rot();
                    if (this.level >= 25)
                        this.growth = GROWTH.UNRIPE;
                    if (this.level >= 75)
                        this.growth = GROWTH.RIPE;
                    if (this.level > 100)
                        this.growth = GROWTH.OVERRIPE;
                } else if (this.field.fieldWater > this.maxWater) {
                    this.rot(0.5);
                } else if (this.field.fieldWater == 0) {
                    this.rot();
                }
            }
        }

        protected rot(_speed: number = 1): void {
            setTimeout(function (): void {
                this.health -= _speed;
            }, this.growthRate);
            if (this.health <= 0)
                this.growth = GROWTH.DEAD;
        }

    }
}