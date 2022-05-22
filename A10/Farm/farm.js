var Farm;
(function (Farm) {
    window.addEventListener("load", function () {
        let pig = new Farm.Animal("Peppa", "pig", "oink", "potatoes", 4);
        let foodContainer = { "potatoes": 234, "carrots": 72364 };
        console.log(foodContainer);
        pig.eat(foodContainer);
        console.log(foodContainer);
        pig.sing();
    });
})(Farm || (Farm = {}));
//# sourceMappingURL=farm.js.map