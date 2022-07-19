var GardeningSim;
(function (GardeningSim) {
    GardeningSim.account = new GardeningSim.Account(100);
    GardeningSim.clickedField = [];
    let garden = [];
    let carrotPriceMin;
    let carrotPriceMax;
    let cucPriceMin;
    let cucPriceMax;
    let potPriceMin;
    let potPriceMax;
    let pumpPriceMin;
    let pumpPriceMax;
    let spinPriceMin;
    let spinPriceMax;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function createGarden(_event) {
        let wrapper = document.getElementById("wrapper");
        let field;
        let waterButton = document.getElementById("water");
        let fertilizeButton = document.getElementById("fertilize");
        let formData = new FormData(document.forms[1]);
        GardeningSim.account.money = parseInt(`${formData.get("setMoney")}`);
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
        document.getElementById("wallet").innerHTML = `Wallet: ${GardeningSim.account.money} TSh.`;
        wrapper.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                let x = 125 * j;
                let y = 150 * i;
                field = new GardeningSim.Field(wrapper, x, y, GardeningSim.account);
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
    function shoppingCart(_event) {
        let formData = new FormData(document.forms[1]);
        let carrots = parseInt(`${formData.get("carrotSeeds")}`) * GardeningSim.Carrot.price;
        let cucumbers = parseInt(`${formData.get("cucumberSeeds")}`) * GardeningSim.Cucumber.price;
        let potatos = parseInt(`${formData.get("potatoSeeds")}`) * GardeningSim.Potato.price;
        let pumpkins = parseInt(`${formData.get("pumpkinSeeds")}`) * GardeningSim.Pumpkin.price;
        let spinaches = parseInt(`${formData.get("spinachSeeds")}`) * GardeningSim.Spinach.price;
        let fertilizer = parseInt(`${formData.get("fertilizer")}`) * 5;
        let pesticide = parseInt(`${formData.get("pesticide")}`) * 10;
        document.getElementById("shoppingCart").innerHTML = `Total: ${(carrots + cucumbers + potatos + pumpkins + spinaches) / 2 + fertilizer + pesticide} TSh.`;
    }
    function buy(_event) {
        let formData = new FormData(document.forms[1]);
        let carrots = parseInt(`${formData.get("carrotSeeds")}`);
        let cucmbers = parseInt(`${formData.get("cucumberSeeds")}`);
        let potatos = parseInt(`${formData.get("potatoSeeds")}`);
        let pumpkins = parseInt(`${formData.get("pumpkinSeeds")}`);
        let spinaches = parseInt(`${formData.get("spinachSeeds")}`);
        let fertilizer = parseInt(`${formData.get("fertilizer")}`);
        let pesticide = parseInt(`${formData.get("pesticide")}`);
        GardeningSim.account.carrots += carrots;
        GardeningSim.account.cucmber += cucmbers;
        GardeningSim.account.potatos += potatos;
        GardeningSim.account.pumpkins += pumpkins;
        GardeningSim.account.spinach += spinaches;
        GardeningSim.account.fertilizer += fertilizer;
        GardeningSim.account.pesticide += pesticide;
        GardeningSim.account.money -= (carrots * GardeningSim.Carrot.price + cucmbers * GardeningSim.Cucumber.price + potatos * GardeningSim.Potato.price + pumpkins * GardeningSim.Pumpkin.price + spinaches * GardeningSim.Spinach.price) / 2 + fertilizer * 5 + pesticide * 10;
        document.getElementById("wallet").innerHTML = `Wallet: ${GardeningSim.account.money} TSh.`;
        document.getElementById("carrot").innerHTML = `Carrot: ${GardeningSim.account.carrots}`;
        document.getElementById("cucumberLabel").innerHTML = `Cucumber: ${GardeningSim.account.cucmber}`;
        document.getElementById("potatoLabel").innerHTML = `Potato: ${GardeningSim.account.potatos}`;
        document.getElementById("pumpkinLabel").innerHTML = `Pumpkin: ${GardeningSim.account.pumpkins}`;
        document.getElementById("spinachLabel").innerHTML = `Spinach: ${GardeningSim.account.spinach}`;
        document.getElementById("fertilize").innerHTML = `Fertilize: ${GardeningSim.account.fertilizer}`;
        document.getElementById("liberate").innerHTML = `Liberate: ${GardeningSim.account.pesticide}`;
    }
    function stonkSwing() {
        GardeningSim.Carrot.price = GardeningSim.Carrot.setFluctuation(carrotPriceMin, carrotPriceMax);
        GardeningSim.Cucumber.price = GardeningSim.Cucumber.setFluctuation(cucPriceMin, cucPriceMax);
        GardeningSim.Potato.price = GardeningSim.Potato.setFluctuation(potPriceMin, potPriceMax);
        GardeningSim.Pumpkin.price = GardeningSim.Pumpkin.setFluctuation(pumpPriceMin, pumpPriceMax);
        GardeningSim.Spinach.price = GardeningSim.Spinach.setFluctuation(spinPriceMin, spinPriceMax);
        document.getElementById("carrotSeedPrice").innerHTML = `${GardeningSim.Carrot.price / 2} TSh.`;
        document.getElementById("cucumberSeedPrice").innerHTML = `${GardeningSim.Cucumber.price / 2} TSh.`;
        document.getElementById("potatoSeedPrice").innerHTML = `${GardeningSim.Potato.price / 2} TSh.`;
        document.getElementById("pumpkinSeedPrice").innerHTML = `${GardeningSim.Pumpkin.price / 2} TSh.`;
        document.getElementById("spinachSeedPrice").innerHTML = `${GardeningSim.Spinach.price / 2} TSh.`;
    }
    function carrot(_event) {
        let carrot = new GardeningSim.Carrot(GardeningSim.clickedField[0].position, GardeningSim.clickedField[0]);
        GardeningSim.clickedField[0].pictures = ["sprossling.png", "", "", ""];
        GardeningSim.clickedField[0].fieldPlant.push(carrot);
        GardeningSim.clickedField[0].occupied = true;
        GardeningSim.account.carrots--;
        document.getElementById("carrot").innerHTML = `Carrot: ${GardeningSim.account.carrots}`;
    }
    function cucumber(_event) {
        let cucumber = new GardeningSim.Cucumber(GardeningSim.clickedField[0].position, GardeningSim.clickedField[0]);
        GardeningSim.clickedField[0].pictures = ["sprossling.png", "", "", ""];
        GardeningSim.clickedField[0].occupied = true;
        GardeningSim.account.cucmber--;
        document.getElementById("cucumberLabel").innerHTML = `Cucumber: ${GardeningSim.account.cucmber}`;
    }
    function potato(_event) {
        let potato = new GardeningSim.Potato(GardeningSim.clickedField[0].position, GardeningSim.clickedField[0]);
        GardeningSim.clickedField[0].pictures = ["sprossling.png", "", "", ""];
        GardeningSim.clickedField[0].occupied = true;
        GardeningSim.account.potatos--;
        document.getElementById("potato").innerHTML = `Potato: ${GardeningSim.account.potatos}`;
    }
    function pumpkin(_event) {
        let pumpkin = new GardeningSim.Pumpkin(GardeningSim.clickedField[0].position, GardeningSim.clickedField[0]);
        GardeningSim.clickedField[0].pictures = ["sprossling.png", "Kürbis-unreif.png", "Kürbis-reif.png", "Kürbis-überreif.png"];
        GardeningSim.clickedField[0].occupied = true;
        GardeningSim.account.pumpkins--;
        document.getElementById("pumpkin").innerHTML = `Pumpkin: ${GardeningSim.account.pumpkins}`;
    }
    function spinach(_event) {
        let spinach = new GardeningSim.Spinach(GardeningSim.clickedField[0].position, GardeningSim.clickedField[0]);
        GardeningSim.clickedField[0].pictures = ["sprossling.png", "spinat-unreif.png", "spinat-reif.png", "spinat-überreif.png"];
        GardeningSim.clickedField[0].occupied = true;
        GardeningSim.account.spinach--;
        document.getElementById("spinach").innerHTML = `Spinach: ${GardeningSim.account.spinach}`;
    }
    function update() {
        for (let field of garden) {
            field.update();
        }
    }
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Main.js.map