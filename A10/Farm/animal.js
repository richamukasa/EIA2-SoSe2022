var Farm;
(function (Farm) {
    class Animal {
        species;
        name;
        sound;
        food;
        quantity;
        constructor(_species, _name, _sound, _food, _quantity) {
            this.species = _species;
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.quantity = _quantity;
        }
        sing() {
            let h1 = document.querySelector("h1");
            let species = document.getElementById("species");
            let sound = document.getElementById("sound");
            h1.innerHTML = this.name;
            species.innerHTML = this.species;
            sound.innerHTML = this.sound;
        }
        eat(_storage) {
            let food = document.getElementById("food");
            let quantity = document.getElementById("quantity");
            food.innerHTML = `${_storage[this.food]}`;
            quantity.innerHTML = `${this.quantity}`;
            _storage[this.food] -= this.quantity;
            quantity.innerHTML = `${_storage[this.food]}`;
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=animal.js.map