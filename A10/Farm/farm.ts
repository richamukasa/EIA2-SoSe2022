namespace Farm {
    window.addEventListener("load", function(): void{
        let pig: Animal = new Animal("Peppa", "pig", "oink", "potatoes", 4);
        let foodContainer = { "potatoes": 234 , "carrots": 72364};
        console.log(foodContainer);
        pig.eat(foodContainer);
        console.log(foodContainer);
        pig.sing();
    });
}