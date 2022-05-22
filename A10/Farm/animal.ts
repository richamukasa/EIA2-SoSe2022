namespace Farm {
    export class Animal {
        species: string;
        name: string;
        sound: string;
        food: string;
        quantity: number;

        constructor(_species: string, _name: string, _sound: string, _food: string, _quantity: number) {
            this.species = _species;
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.quantity = _quantity;
        }

        sing(): void {
            let h1: HTMLHeadingElement = document.querySelector("h1");
            let species: HTMLSpanElement = <HTMLSpanElement> document.getElementById("species");
            let sound: HTMLSpanElement = <HTMLSpanElement> document.getElementById("sound");

            h1.innerHTML = this.name;
            species.innerHTML = this.species;
            sound.innerHTML = this.sound;

        }

        eat(_storage: {}): void {
            let food: HTMLSpanElement | null = <HTMLSpanElement> document.getElementById("food");
            let quantity: HTMLSpanElement | null = <HTMLSpanElement> document.getElementById("quantity");
            food.innerHTML = `${_storage[this.food]}`;
            quantity.innerHTML = `${this.quantity}`;
            _storage[this.food] -= this.quantity;
            quantity.innerHTML = `${_storage[this.food]}`;
        }

    }
}