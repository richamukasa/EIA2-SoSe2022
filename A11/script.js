/**
 * Aufgabe: L11 Strand: Clickable
 * Matrikel: 270000
 * Datum: 09.07.2022
 * Quellen: Ann-Kathrin Pfeffer und ich
 */
var ClickyBeach;
(function (ClickyBeach) {
    const golden = 0.62;
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["REST"] = 0] = "REST";
        ACTION[ACTION["GO"] = 1] = "GO";
        ACTION[ACTION["RETURN"] = 2] = "RETURN";
        ACTION[ACTION["SURF"] = 3] = "SURF";
        ACTION[ACTION["BACKFLIP"] = 4] = "BACKFLIP";
        ACTION[ACTION["STEAM"] = 5] = "STEAM";
    })(ACTION = ClickyBeach.ACTION || (ClickyBeach.ACTION = {}));
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
        ClickyBeach.canWidth = canvas.width;
        ClickyBeach.canHeight = canvas.height;
        if (!canvas)
            return;
        ClickyBeach.crc2 = canvas.getContext("2d");
        draw();
        window.setInterval(update, 20);
        canvas.addEventListener("mousedown", screenClicked);
    }
    function randomInteger(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    ClickyBeach.randomInteger = randomInteger;
    function randomFloat(_min, _max) {
        return Math.random() * (_max - _min + 1) + _min;
    }
    ClickyBeach.randomFloat = randomFloat;
    function drawSky() {
        let gradient = ClickyBeach.crc2.createLinearGradient(0, 0, 0, ClickyBeach.crc2.canvas.height * 0.26);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "yellow");
        gradient.addColorStop(1, "orange");
        ClickyBeach.crc2.fillStyle = gradient;
        ClickyBeach.crc2.fillRect(0, 0, ClickyBeach.crc2.canvas.width, ClickyBeach.crc2.canvas.height * 0.26);
    }
    function createMovingBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let position = new ClickyBeach.Vector(randomInteger(0, ClickyBeach.canWidth), randomInteger(ClickyBeach.canHeight * 0.028, ClickyBeach.canHeight * 0.231));
            let velocity = new ClickyBeach.Vector(randomFloat(-position.x, position.x), position.y);
            let speed = randomFloat(1 / 500, 1 / 200);
            let bird = new ClickyBeach.DynamicBird(position, velocity, speed);
            moveables.push(bird);
        }
    }
    function createStaticBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let position = new ClickyBeach.Vector(randomInteger(0, ClickyBeach.canWidth), randomInteger(ClickyBeach.canHeight * 0.028, ClickyBeach.canHeight * 0.231));
            let bird = new ClickyBeach.StaticBird(position);
            immoveables.push(bird);
        }
    }
    function update() {
        drawSky();
        drawOcean();
        drawSand();
        for (let immoveable of immoveables) {
            immoveable.update();
        }
        for (let moveable of moveables) {
            moveable.move(moveable.speed);
            moveable.draw();
        }
    }
    function drawSand() {
        ClickyBeach.crc2.save();
        ClickyBeach.crc2.translate(0, 480);
        ClickyBeach.crc2.strokeStyle = "#d2aa58";
        ClickyBeach.crc2.fillStyle = "#d2aa58";
        ClickyBeach.crc2.beginPath();
        ClickyBeach.crc2.moveTo(0, 0);
        ClickyBeach.crc2.bezierCurveTo(420, 280, 1160, 320, 1920, 320);
        ClickyBeach.crc2.lineTo(1920, 600);
        ClickyBeach.crc2.lineTo(0, ClickyBeach.crc2.canvas.height);
        ClickyBeach.crc2.lineTo(0, 0);
        ClickyBeach.crc2.stroke();
        ClickyBeach.crc2.fill();
        ClickyBeach.crc2.restore();
    }
    function drawOcean() {
        let gradient = ClickyBeach.crc2.createLinearGradient(0, 280, ClickyBeach.crc2.canvas.width, 280);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkblue");
        ClickyBeach.crc2.fillStyle = gradient;
        ClickyBeach.crc2.fillRect(0, 280, ClickyBeach.crc2.canvas.width, ClickyBeach.crc2.canvas.height);
        ClickyBeach.crc2.save();
        ClickyBeach.crc2.translate(0, 380);
        ClickyBeach.crc2.strokeStyle = "#967117";
        ClickyBeach.crc2.beginPath();
        ClickyBeach.crc2.moveTo(0, 0);
        ClickyBeach.crc2.bezierCurveTo(40, -80, 500, -100, 760, -100);
        ClickyBeach.crc2.lineTo(0, -100);
        ClickyBeach.crc2.lineTo(0, 0);
        ClickyBeach.crc2.stroke();
        ClickyBeach.crc2.fillStyle = "#967117";
        ClickyBeach.crc2.fill();
        ClickyBeach.crc2.strokeStyle = "gradient";
        ClickyBeach.crc2.translate(760, -100);
        ClickyBeach.crc2.moveTo(0, 0);
        ClickyBeach.crc2.lineTo(1160, 0);
        ClickyBeach.crc2.stroke();
        ClickyBeach.crc2.restore();
    }
    function drawMountain(_position) {
        let mountain = new ClickyBeach.Mountain(_position);
        immoveables.push(mountain);
    }
    function createTrees(_nTrees) {
        for (let i = 0; i < _nTrees; i++) {
            let position = new ClickyBeach.Vector(randomInteger(0, ClickyBeach.canWidth * 0.18), randomInteger(ClickyBeach.canHeight * 0.2, ClickyBeach.canHeight * 0.25));
            let tree = new ClickyBeach.Tree(position);
            immoveables.push(tree);
        }
    }
    function createShip() {
        let position = new ClickyBeach.Vector(randomInteger(ClickyBeach.canWidth * 0.625, ClickyBeach.canWidth * 0.89), randomInteger(ClickyBeach.canHeight * 0.22, ClickyBeach.canHeight * 0.24));
        let ship = new ClickyBeach.Ship(position);
        immoveables.push(ship);
    }
    function createHumans(_nHuman) {
        for (let i = 0; i < _nHuman; i++) {
            let position = new ClickyBeach.Vector(randomInteger(ClickyBeach.canWidth * -0.01, ClickyBeach.canWidth * 0.247), randomInteger(ClickyBeach.canHeight * 0.44, ClickyBeach.canHeight * 0.926));
            let chiller = new ClickyBeach.Human(position);
            immoveables.push(chiller);
        }
    }
    function screenClicked(_event) {
        console.log("Screen was clicked");
        let hotspot = new ClickyBeach.Vector(_event.clientX - ClickyBeach.crc2.canvas.offsetLeft, _event.clientY - ClickyBeach.crc2.canvas.offsetTop);
        console.log(hotspot);
        let hit = getHit(hotspot);
        if (hit instanceof ClickyBeach.Ship) {
            console.log("NICHT UNSERE MARINEEEE!");
            hit.action = ACTION.STEAM;
        }
        else if (hit instanceof ClickyBeach.Human) {
            console.log("Stop it.");
            hit.action = ACTION.GO;
        }
    }
    function getHit(_hotspot) {
        for (let immovable of immoveables) {
            if (immovable.clicked(_hotspot)) {
                return immovable;
            }
        }
        return null;
    }
    function draw() {
        let trees = randomInteger(10, 20);
        let birds = randomInteger(10, 20);
        let humans = randomInteger(3, 12);
        let initMountain = new ClickyBeach.Vector(0, ClickyBeach.canHeight * 0.12);
        drawSky();
        drawOcean();
        drawSand();
        createTrees(trees);
        createMovingBirds(birds);
        createStaticBirds(birds);
        createHumans(humans);
        createShip();
    }
})(ClickyBeach || (ClickyBeach = {}));
//# sourceMappingURL=script.js.map