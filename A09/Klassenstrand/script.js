var Beach;
(function (Beach) {
    const golden = 0.62;
    let birds = [];
    let clouds = [];
    let trees = [];
    let humans = [];
    let ships = [];
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
        Beach.canWidth = canvas.width;
        Beach.canHeight = canvas.height;
        if (!canvas)
            return;
        Beach.crc2 = canvas.getContext("2d");
        draw();
        window.setInterval(update, 20);
    }
    function randomInteger(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    Beach.randomInteger = randomInteger;
    function randomFloat(_min, _max) {
        return Math.random() * (_max - _min + 1) + _min;
    }
    Beach.randomFloat = randomFloat;
    function drawSky() {
        let gradient = Beach.crc2.createLinearGradient(0, 0, 0, Beach.crc2.canvas.height * 0.26);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "yellow");
        gradient.addColorStop(1, "orange");
        Beach.crc2.fillStyle = gradient;
        Beach.crc2.fillRect(0, 0, Beach.crc2.canvas.width, Beach.crc2.canvas.height * 0.26);
    }
    function createBirds(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let speed = randomFloat(1 / 5, 1 / 2);
            let type = randomInteger(0, 1);
            let bird = new Beach.Bird({ _type: type, _speed: 1 / 500 });
            birds.push(bird);
        }
    }
    function createClouds(_nClouds) {
        for (let i = 0; i < _nClouds; i++) {
            let speed = randomFloat(1 / 500, 1 / 200);
            let cloud = new Beach.Cloud(speed);
            clouds.push(cloud);
        }
    }
    function update() {
        drawSky();
        drawOcean();
        drawSand();
        for (let tree of trees) {
            tree.draw();
        }
        for (let bird of birds) {
            if (bird.type == 1) {
                bird.move();
                bird.draw();
            }
        }
        for (let cloud of clouds) {
            cloud.move();
            cloud.draw();
        }
        for (let human of humans) {
            human.draw();
        }
        ships[0].draw();
    }
    function drawSand() {
        Beach.crc2.save();
        Beach.crc2.translate(0, 480);
        Beach.crc2.strokeStyle = "#d2aa58";
        Beach.crc2.fillStyle = "#d2aa58";
        Beach.crc2.beginPath();
        Beach.crc2.moveTo(0, 0);
        Beach.crc2.bezierCurveTo(420, 280, 1160, 320, 1920, 320);
        Beach.crc2.lineTo(1920, 600);
        Beach.crc2.lineTo(0, Beach.crc2.canvas.height);
        Beach.crc2.lineTo(0, 0);
        Beach.crc2.stroke();
        Beach.crc2.fill();
        Beach.crc2.restore();
    }
    function drawOcean() {
        let gradient = Beach.crc2.createLinearGradient(0, 280, Beach.crc2.canvas.width, 280);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkblue");
        Beach.crc2.fillStyle = gradient;
        Beach.crc2.fillRect(0, 280, Beach.crc2.canvas.width, Beach.crc2.canvas.height);
        Beach.crc2.save();
        Beach.crc2.translate(0, 380);
        Beach.crc2.strokeStyle = "#967117";
        Beach.crc2.beginPath();
        Beach.crc2.moveTo(0, 0);
        Beach.crc2.bezierCurveTo(40, -80, 500, -100, 760, -100);
        Beach.crc2.lineTo(0, -100);
        Beach.crc2.lineTo(0, 0);
        Beach.crc2.stroke();
        Beach.crc2.fillStyle = "#967117";
        Beach.crc2.fill();
        Beach.crc2.strokeStyle = "gradient";
        Beach.crc2.translate(760, -100);
        Beach.crc2.moveTo(0, 0);
        Beach.crc2.lineTo(1160, 0);
        Beach.crc2.stroke();
        Beach.crc2.restore();
    }
    function drawMountain(_position) {
        let endPoint = new Beach.Vector(randomInteger(750, 1200), 155);
        Beach.crc2.save();
        Beach.crc2.translate(_position.x, _position.y);
        Beach.crc2.moveTo(0, 0);
        Beach.crc2.strokeStyle = "#152109";
        Beach.crc2.fillStyle = "#152109";
        for (let i = 0; i < endPoint.x; i += 50) {
            let randomHeight = randomInteger(-50, 50);
            Beach.crc2.lineTo(i, randomHeight);
        }
        Beach.crc2.lineTo(endPoint.x, endPoint.y);
        Beach.crc2.lineTo(0, endPoint.y);
        Beach.crc2.lineTo(0, 0);
        Beach.crc2.stroke();
        Beach.crc2.fill();
        Beach.crc2.restore();
    }
    function createTrees(_nTrees) {
        for (let i = 0; i < _nTrees; i++) {
            let tree = new Beach.Tree;
            trees.push(tree);
        }
    }
    function createShip() {
        let ship = new Beach.Ship(randomFloat(1 / 50, 1 / 100));
        ships.push(ship);
    }
    function createHumans(_nHuman) {
        let type = randomInteger(0, 1);
        let human = new Beach.Human(type);
        humans.push(human);
    }
    function draw() {
        let cloudAmmount = randomInteger(5, 12);
        let treeAmmount = randomInteger(10, 20);
        let birdAmmount = randomInteger(10, 20);
        let humanAmmount = randomInteger(9, 18);
        let initMountain = new Beach.Vector(0, Beach.canHeight * 0.12);
        drawSky();
        drawMountain(initMountain);
        drawOcean();
        drawSand();
        for (let i = 0; i < treeAmmount; i++) {
            createTrees(treeAmmount);
        }
        for (let i = 0; i < cloudAmmount; i++) {
            createClouds(cloudAmmount);
        }
        for (let i = 0; i < birdAmmount; i++) {
            createBirds(birdAmmount);
        }
        for (let i = 0; i < humanAmmount; i++) {
            createHumans(humanAmmount);
        }
        createShip();
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=script.js.map