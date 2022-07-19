namespace GardeningSim {
    export let account: Account = new Account(100);
    export let clickedField: Field[] = [];
    let garden: Field[] = [];
    let carrotPriceMin: number;
    let carrotPriceMax: number;
    let cucPriceMin: number;
    let cucPriceMax: number;
    let potPriceMin: number;
    let potPriceMax: number;
    let pumpPriceMin: number;
    let pumpPriceMax: number;
    let spinPriceMin: number;
    let spinPriceMax: number;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.getElementById("start").addEventListener("click", createGarden);
        document.getElementById("buy").addEventListener("click", buy);
        document.getElementById("shop").addEventListener("input", shoppingCart);
        document.getElementById("carrot").addEventListener("click", carrot);
        document.getElementById("cucumber").addEventListener("click", cucumber);
        document.getElementById("potato").addEventListener("click", potato);
        document.getElementById("pumpkin").addEventListener("click", pumpkin);
        document.getElementById("spinach").addEventListener("click", spinach);
        window.setInterval(stonkSwing, 20000);
        window.setInterval(update);
    }

    function createGarden(_event: MouseEvent): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
        let field: Field;
        let waterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("water");
        let fertilizeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("fertilize");
        let formData: FormData = new FormData(document.forms[1]);

        account.money = parseInt(`${formData.get("setMoney")}`);
        carrotPriceMin = parseInt(`${formData.get("setCarrotMin")}`);
        carrotPriceMax = parseInt(`${formData.get("setCarrotMax")}`);
        cucPriceMin = parseInt(`${formData.get("setCucMin")}`);
        cucPriceMax = parseInt(`${formData.get("setCucMax")}`);
        potPriceMin = parseInt(`${formData.get("setPotMin")}`);
        potPriceMax = parseInt(`${formData.get("setPotMax")}`);
        pumpPriceMin = parseInt(`${formData.get("setPumpMin")}`);
        pumpPriceMax = parseInt(`${formData.get("setPumpMax")}`);
        spinPriceMin = parseInt(`${formData.get("setSpinMin")}`);
        spinPriceMax = parseInt(`${formData.get("setSpinMax")}`);


        document.getElementById("info").style.visibility = "visible";
        document.getElementById("shop").style.visibility = "visible";
        document.getElementById("wallet").innerHTML = `Wallet: ${account.money} TSh.`;

        wrapper.innerHTML = "";

        for (let i: number = 0; i < 5; i++) {
            for (let j: number = 0; j < 8; j++) {
                let x: number = 125 * j;
                let y: number = 150 * i;
                field = new Field(wrapper, x, y, account);
                field.div.style.left = `${x}px`;
                field.div.style.top = `${y}px`;
                garden.push(field);
                waterButton.addEventListener("click", field.water);
                fertilizeButton.addEventListener("click", field.fertilize);
                console.log(field.fieldWater);
            }
        }

        stonkSwing();
    }

    function shoppingCart(_event: Event): void {
        let formData: FormData = new FormData(document.forms[1]);
        let carrots: number = parseInt(`${formData.get("carrotSeeds")}`) * Carrot.price;
        let cucumbers: number = parseInt(`${formData.get("cucumberSeeds")}`) * Cucumber.price;
        let potatos: number = parseInt(`${formData.get("potatoSeeds")}`) * Potato.price;
        let pumpkins: number = parseInt(`${formData.get("pumpkinSeeds")}`) * Pumpkin.price;
        let spinaches: number = parseInt(`${formData.get("spinachSeeds")}`) * Spinach.price;
        let fertilizer: number = parseInt(`${formData.get("fertilizer")}`) * 5;
        let pesticide: number = parseInt(`${formData.get("pesticide")}`) * 10;

        document.getElementById("shoppingCart").innerHTML = `Total: ${(carrots + cucumbers + potatos + pumpkins + spinaches) / 2 + fertilizer + pesticide} TSh.`;
    }

    function buy(_event: MouseEvent): void {
        let formData: FormData = new FormData(document.forms[1]);
        let carrots: number = parseInt(`${formData.get("carrotSeeds")}`);
        let cucmbers: number = parseInt(`${formData.get("cucumberSeeds")}`);
        let potatos: number = parseInt(`${formData.get("potatoSeeds")}`);
        let pumpkins: number = parseInt(`${formData.get("pumpkinSeeds")}`);
        let spinaches: number = parseInt(`${formData.get("spinachSeeds")}`);
        let fertilizer: number = parseInt(`${formData.get("fertilizer")}`);
        let pesticide: number = parseInt(`${formData.get("pesticide")}`);

        account.carrots += carrots;
        account.cucmber += cucmbers;
        account.potatos += potatos;
        account.pumpkins += pumpkins;
        account.spinach += spinaches;
        account.fertilizer += fertilizer;
        account.pesticide += pesticide;
        account.money -= (carrots * Carrot.price + cucmbers * Cucumber.price + potatos * Potato.price + pumpkins * Pumpkin.price + spinaches * Spinach.price) / 2 + fertilizer * 5 + pesticide * 10;

        document.getElementById("wallet").innerHTML = `Wallet: ${account.money} TSh.`;
        document.getElementById("carrot").innerHTML = `Carrot: ${account.carrots}`;
        document.getElementById("cucumberLabel").innerHTML = `Cucumber: ${account.cucmber}`;
        document.getElementById("potatoLabel").innerHTML = `Potato: ${account.potatos}`;
        document.getElementById("pumpkinLabel").innerHTML = `Pumpkin: ${account.pumpkins}`;
        document.getElementById("spinachLabel").innerHTML = `Spinach: ${account.spinach}`;
        document.getElementById("fertilize").innerHTML = `Fertilize: ${account.fertilizer}`;
        document.getElementById("liberate").innerHTML = `Liberate: ${account.pesticide}`;
    }

    function stonkSwing(): void {
        Carrot.price = Carrot.setFluctuation(carrotPriceMin, carrotPriceMax);
        Cucumber.price = Cucumber.setFluctuation(cucPriceMin, cucPriceMax);
        Potato.price = Potato.setFluctuation(potPriceMin, potPriceMax);
        Pumpkin.price = Pumpkin.setFluctuation(pumpPriceMin, pumpPriceMax);
        Spinach.price = Spinach.setFluctuation(spinPriceMin, spinPriceMax);

        document.getElementById("carrotSeedPrice").innerHTML = `${Carrot.price / 2} TSh.`;
        document.getElementById("cucumberSeedPrice").innerHTML = `${Cucumber.price / 2} TSh.`;
        document.getElementById("potatoSeedPrice").innerHTML = `${Potato.price / 2} TSh.`;
        document.getElementById("pumpkinSeedPrice").innerHTML = `${Pumpkin.price / 2} TSh.`;
        document.getElementById("spinachSeedPrice").innerHTML = `${Spinach.price / 2} TSh.`;
    }

    function carrot(_event: MouseEvent): void {
        let carrot: Plant = new Carrot(clickedField[0].position, clickedField[0]);
        clickedField[0].pictures = ["sprossling.png", "", "", ""];
        clickedField[0].fieldPlant.push(carrot);
        clickedField[0].occupied = true;
        account.carrots--;
        document.getElementById("carrot").innerHTML = `Carrot: ${account.carrots}`;
    }

    function cucumber(_event: MouseEvent): void {
        let cucumber: Plant = new Cucumber(clickedField[0].position, clickedField[0]);
        clickedField[0].pictures = ["sprossling.png", "", "", ""];
        clickedField[0].occupied = true;
        account.cucmber--;
        document.getElementById("cucumberLabel").innerHTML = `Cucumber: ${account.cucmber}`;
    }

    function potato(_event: MouseEvent): void {
        let potato: Plant = new Potato(clickedField[0].position, clickedField[0]);
        clickedField[0].pictures = ["sprossling.png", "", "", ""];
        clickedField[0].occupied = true;
        account.potatos--;
        document.getElementById("potato").innerHTML = `Potato: ${account.potatos}`;
    }

    function pumpkin(_event: MouseEvent): void {
        let pumpkin: Plant = new Pumpkin(clickedField[0].position, clickedField[0]);
        clickedField[0].pictures = ["sprossling.png", "Kürbis-unreif.png", "Kürbis-reif.png", "Kürbis-überreif.png"];
        clickedField[0].occupied = true;
        account.pumpkins--;
        document.getElementById("pumpkin").innerHTML = `Pumpkin: ${account.pumpkins}`;
    }


    function spinach(_event: MouseEvent): void {
        let spinach: Plant = new Spinach(clickedField[0].position, clickedField[0]);
        clickedField[0].pictures = ["sprossling.png", "spinat-unreif.png", "spinat-reif.png", "spinat-überreif.png"];
        clickedField[0].occupied = true;
        account.spinach--;
        document.getElementById("spinach").innerHTML = `Spinach: ${account.spinach}`;
    }

    function update(): void {
        for (let field of garden) {
            field.update();
        }
    }

}