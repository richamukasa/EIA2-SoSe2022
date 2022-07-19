namespace GardeningSim {
    export class Vermin {
        private position: Vector;
        private target: Vector;
        private action: string;
        private plant: Plant;

        constructor(_plants: Plant[]) {
            let x: number = Math.floor(Math.random() * 40);
            this.plant = _plants[x];
            this.target = this.plant.position;
            this.position = Vector.randomVector(-50, 1970, -50, 1130);
            this.action = "fly";
        }

        public update(): void {
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

        public die(): void {
            this.position.setPosition(-10, -10);
            this.action = "dead";
        }

        private eat(): void {
            this.plant.health -= 0.5;
        }

        private fly(): void {
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
}