/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: It was I
 */
var HeritageBeach;
(function (HeritageBeach) {
    const golden = 0.62;
    let moveables = [];
    let immoveables = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        const ratio = 0.5625;
        canvas.style.width = `${window.innerWidth}`;
        if (window.innerWidth > window.innerHeight) {
            canvas.style.height = `${window.innerHeight}`;
        }
        else {
            canvas.style.height = `${canvas.width * ratio}`;
        }
        HeritageBeach.canWidth = canvas.width;
        HeritageBeach.canHeight = canvas.height;
        if (!canvas)
            return;
        HeritageBeach.crc2 = canvas.getContext("2d");
        draw();
        window.setInterval(update, 20);
    }
    function randomInteger(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    HeritageBeach.randomInteger = randomInteger;
    function randomFloat(_min, _max) {
        return Math.random() * (_max - _min + 1) + _min;
    }
    HeritageBeach.randomFloat = randomFloat;
    function drawSky() {
        let gradient = HeritageBeach.crc2.createLinearGradient(0, 0, 0, HeritageBeach.crc2.canvas.height * 0.26);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "yellow");
        gradient.addColorStop(1, "orange");
        HeritageBeach.crc2.fillStyle = gradient;
        HeritageBeach.crc2.fillRect(0, 0, HeritageBeach.crc2.canvas.width, HeritageBeach.crc2.canvas.height * 0.26);
    }
    function createMovingBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let position = new HeritageBeach.Vector(randomInteger(0, HeritageBeach.canWidth), randomInteger(HeritageBeach.canHeight * 0.028, HeritageBeach.canHeight * 0.231));
            let velocity = new HeritageBeach.Vector(randomFloat(-position.x, position.x), position.y);
            let speed = randomFloat(1 / 500, 1 / 200);
            let bird = new HeritageBeach.DynamicBird(position, velocity, speed);
            moveables.push(bird);
        }
    }
    function createStaticBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let position = new HeritageBeach.Vector(randomInteger(0, HeritageBeach.canWidth), randomInteger(HeritageBeach.canHeight * 0.028, HeritageBeach.canHeight * 0.231));
            let bird = new HeritageBeach.StaticBird(position);
            immoveables.push(bird);
        }
    }
    function createClouds(_nClouds) {
        for (let i = 0; i < _nClouds; i++) {
            let position = new HeritageBeach.Vector(randomFloat(0, HeritageBeach.canWidth), randomFloat(HeritageBeach.canHeight * 0.046, HeritageBeach.canHeight * 0.139));
            let velocity = new HeritageBeach.Vector(randomFloat(-position.x, position.x), position.y);
            let speed = randomFloat(1 / 5000, 1 / 2000);
            let cloud = new HeritageBeach.Cloud(position, velocity, speed);
            moveables.push(cloud);
        }
    }
    function update() {
        drawSky();
        drawOcean();
        drawSand();
        for (let immoveable of immoveables) {
            immoveable.draw();
        }
        for (let moveable of moveables) {
            moveable.move(moveable.speed);
            moveable.draw();
        }
    }
    function drawSand() {
        HeritageBeach.crc2.save();
        HeritageBeach.crc2.translate(0, 480);
        HeritageBeach.crc2.strokeStyle = "#d2aa58";
        HeritageBeach.crc2.fillStyle = "#d2aa58";
        HeritageBeach.crc2.beginPath();
        HeritageBeach.crc2.moveTo(0, 0);
        HeritageBeach.crc2.bezierCurveTo(420, 280, 1160, 320, 1920, 320);
        HeritageBeach.crc2.lineTo(1920, 600);
        HeritageBeach.crc2.lineTo(0, HeritageBeach.crc2.canvas.height);
        HeritageBeach.crc2.lineTo(0, 0);
        HeritageBeach.crc2.stroke();
        HeritageBeach.crc2.fill();
        HeritageBeach.crc2.restore();
    }
    function drawOcean() {
        let gradient = HeritageBeach.crc2.createLinearGradient(0, 280, HeritageBeach.crc2.canvas.width, 280);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkblue");
        HeritageBeach.crc2.fillStyle = gradient;
        HeritageBeach.crc2.fillRect(0, 280, HeritageBeach.crc2.canvas.width, HeritageBeach.crc2.canvas.height);
        HeritageBeach.crc2.save();
        HeritageBeach.crc2.translate(0, 380);
        HeritageBeach.crc2.strokeStyle = "#967117";
        HeritageBeach.crc2.beginPath();
        HeritageBeach.crc2.moveTo(0, 0);
        HeritageBeach.crc2.bezierCurveTo(40, -80, 500, -100, 760, -100);
        HeritageBeach.crc2.lineTo(0, -100);
        HeritageBeach.crc2.lineTo(0, 0);
        HeritageBeach.crc2.stroke();
        HeritageBeach.crc2.fillStyle = "#967117";
        HeritageBeach.crc2.fill();
        HeritageBeach.crc2.strokeStyle = "gradient";
        HeritageBeach.crc2.translate(760, -100);
        HeritageBeach.crc2.moveTo(0, 0);
        HeritageBeach.crc2.lineTo(1160, 0);
        HeritageBeach.crc2.stroke();
        HeritageBeach.crc2.restore();
    }
    function drawMountain(_position) {
        let mountain = new HeritageBeach.Mountain(_position);
        immoveables.push(mountain);
    }
    function createTrees(_nTrees) {
        for (let i = 0; i < _nTrees; i++) {
            let position = new HeritageBeach.Vector(randomInteger(0, HeritageBeach.canWidth * 0.18), randomInteger(HeritageBeach.canHeight * 0.2, HeritageBeach.canHeight * 0.25));
            let tree = new HeritageBeach.Tree(position);
            immoveables.push(tree);
        }
    }
    function createShip() {
        let position = new HeritageBeach.Vector(randomInteger(HeritageBeach.canWidth * 0.625, HeritageBeach.canWidth * 0.89), randomInteger(HeritageBeach.canHeight * 0.22, HeritageBeach.canHeight * 0.24));
        let ship = new HeritageBeach.Ship(position);
        immoveables.push(ship);
    }
    function createChillers(_nHuman) {
        for (let i = 0; i < _nHuman; i++) {
            let position = new HeritageBeach.Vector(randomInteger(HeritageBeach.canWidth * -0.01, HeritageBeach.canWidth * 0.247), randomInteger(HeritageBeach.canHeight * 0.44, HeritageBeach.canHeight * 0.926));
            let chiller = new HeritageBeach.Chiller(position);
            immoveables.push(chiller);
        }
    }
    function createSurfers(_nHuman) {
        for (let i = 0; i < _nHuman; i++) {
            let chillPosition = new HeritageBeach.Vector(randomInteger(HeritageBeach.canWidth * -0.01, HeritageBeach.canWidth * 0.247), randomInteger(HeritageBeach.canHeight * 0.44, HeritageBeach.canHeight * 0.926));
            let position = new HeritageBeach.Vector(randomInteger(HeritageBeach.canWidth * 0.26, HeritageBeach.canWidth * 0.964), randomInteger(HeritageBeach.canHeight * 0.37, HeritageBeach.canHeight * 0.625));
            let surfer = new HeritageBeach.Surfer(position);
            immoveables.push(surfer);
        }
    }
    function draw() {
        let cloudAmmount = randomInteger(5, 12);
        let treeAmmount = randomInteger(10, 20);
        let birdAmmount = randomInteger(10, 20);
        let surfAmmount = randomInteger(3, 6);
        let chillAmmount = randomInteger(5, 10);
        let initMountain = new HeritageBeach.Vector(0, HeritageBeach.canHeight * 0.12);
        drawSky();
        drawOcean();
        drawSand();
        createTrees(treeAmmount);
        createClouds(cloudAmmount);
        createMovingBirds(birdAmmount);
        createStaticBirds(birdAmmount);
        createChillers(surfAmmount);
        createSurfers(surfAmmount);
        createShip();
    }
})(HeritageBeach || (HeritageBeach = {}));
//# sourceMappingURL=script.js.map