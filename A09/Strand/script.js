var Beach;
(function (Beach) {
    let crc2;
    const golden = 0.62;
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
        const canWidth = canvas.width;
        const canHeight = canvas.height;
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let cloudAmmount = randomNumber(5, 12);
        let treeAmmount = randomNumber(10, 20);
        let birdAmmount = randomNumber(25, 40);
        let beachChillers = randomNumber(5, 10);
        let surferAmmount = randomNumber(4, 8);
        let shipPos = {
            x: randomNumber(canWidth * 0.625, canWidth * 0.89),
            y: randomNumber(canHeight * 0.22, canHeight * 0.24)
        };
        drawSky();
        drawMountain({ x: 0, y: canHeight * 0.12 });
        drawOcean();
        drawSand();
        for (let i = 0; i < treeAmmount; i++) {
            let treePos = {
                x: randomNumber(0, canWidth * 0.18),
                y: randomNumber(canHeight * 0.2, canHeight * 0.25)
            };
            drawTree(treePos);
        }
        drawShip(shipPos);
        for (let i = 0; i < cloudAmmount; i++) {
            let cloudPos = {
                x: randomNumber(0, canWidth),
                y: randomNumber(canHeight * 0.046, canHeight * 0.139)
            };
            drawCloud(cloudPos);
        }
        for (let i = 0; i < birdAmmount; i++) {
            let birdType = randomNumber(0, 1);
            let birdPos = {
                x: randomNumber(0, canWidth),
                y: randomNumber(canHeight * 0.028, canHeight * 0.231)
            };
            drawBird(birdPos, birdType);
        }
        for (let i = 0; i < beachChillers; i++) {
            let chillPos = {
                x: randomNumber(canWidth * -0.01, canWidth * 0.247),
                y: randomNumber(canHeight * 0.44, canHeight * 0.926)
            };
            drawChiller(chillPos);
        }
        for (let i = 0; i < surferAmmount; i++) {
            let surfPos = {
                x: randomNumber(canWidth * 0.26, canWidth * 0.964),
                y: randomNumber(canHeight * 0.37, canHeight * 0.625)
            };
            let direction;
            let x = randomNumber(0, 1);
            if (x == 0)
                direction = 1;
            else
                direction = -1;
            drawSurfer(surfPos, direction);
        }
    }
    const widthFactor = 1 / crc2.canvas.width;
    const heightFactor = 1 / crc2.canvas.height;
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    function drawSky() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height * 0.26);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "yellow");
        gradient.addColorStop(1, "orange");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.26);
    }
    function drawCloud(_position) {
        let r1 = randomNumber(5, 15);
        let r2 = randomNumber(20, 30);
        let cloudDensity = randomNumber(25, 50);
        let cloudWidth = randomNumber(25, 100);
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        let particle = new Path2D;
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(240, 3%, 100%, 0.2)");
        gradient.addColorStop(1, "HSLA(240, 3%, 100%, 0.1)");
        crc2.fillStyle = gradient;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        for (let i = 0; i < cloudDensity; i++) {
            let x = randomNumber(-cloudWidth, cloudWidth);
            let y = randomNumber(-5, 20);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountain(_position) {
        let endPoint = {
            x: randomNumber(750, 1200),
            y: 155
        };
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(0, 0);
        crc2.strokeStyle = "#152109";
        crc2.fillStyle = "#152109";
        for (let i = 0; i < endPoint.x; i += 50) {
            let randomHeight = randomNumber(-50, 50);
            crc2.lineTo(i, randomHeight);
        }
        crc2.lineTo(endPoint.x, endPoint.y);
        crc2.lineTo(0, endPoint.y);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.restore();
    }
    function drawSand() {
        crc2.save();
        crc2.translate(0, 480);
        crc2.strokeStyle = "#d2aa58";
        crc2.fillStyle = "#d2aa58";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(420, 280, 1160, 320, 1920, 320);
        crc2.lineTo(1920, 600);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.restore();
    }
    function drawTree(_position) {
        let sizeFactor = _position.y / crc2.canvas.height;
        crc2.strokeStyle = "brown";
        crc2.fillStyle = "brown";
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(80 * sizeFactor, 0);
        crc2.lineTo(40 * sizeFactor, 380 * sizeFactor);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "lightgreen";
        crc2.translate(40 * sizeFactor, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(40 * sizeFactor, -40 * sizeFactor);
        crc2.lineTo(120 * sizeFactor, 80 * sizeFactor);
        crc2.lineTo(0, 0);
        crc2.lineTo(-40 * sizeFactor, -40 * sizeFactor);
        crc2.lineTo(-120 * sizeFactor, 80 * sizeFactor);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.translate(-40 * sizeFactor, -20 * sizeFactor);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(80 * sizeFactor, 0);
        crc2.lineTo(40 * sizeFactor, 140 * sizeFactor);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.restore();
    }
    function drawOcean() {
        let gradient = crc2.createLinearGradient(0, 280, crc2.canvas.width, 280);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkblue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 280, crc2.canvas.width, crc2.canvas.height);
        crc2.save();
        crc2.translate(0, 380);
        crc2.strokeStyle = "#967117";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(40, -80, 500, -100, 760, -100);
        crc2.lineTo(0, -100);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fillStyle = "#967117";
        crc2.fill();
        crc2.strokeStyle = "gradient";
        crc2.translate(760, -100);
        crc2.moveTo(0, 0);
        crc2.lineTo(1160, 0);
        crc2.stroke();
        crc2.restore();
    }
    function drawChiller(_position) {
        let head = new Path2D;
        let skinColor = {
            r: randomNumber(0, 255),
            g: randomNumber(0, 255),
            b: randomNumber(0, 255)
        };
        crc2.strokeStyle = `rgb(${skinColor.r}, ${skinColor.g}, ${skinColor.b})`;
        crc2.fillStyle = `rgb(${skinColor.r}, ${skinColor.g}, ${skinColor.b})`;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        head.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fill(head);
        crc2.stroke(head);
        crc2.beginPath();
        crc2.moveTo(0, 20);
        crc2.lineTo(0, 30);
        crc2.lineTo(-35, 60);
        crc2.stroke();
        crc2.translate(0, 30);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(20, 30);
        crc2.lineTo(105, 30);
        crc2.stroke();
        crc2.translate(20, 30);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(15, -30);
        crc2.lineTo(35, 0);
        crc2.stroke();
        crc2.restore();
    }
    function drawSurfer(_position, _direction) {
        let head = new Path2D;
        let surfBoard = new Path2D;
        let skinColor = {
            r: randomNumber(0, 255),
            g: randomNumber(0, 255),
            b: 0
        };
        crc2.strokeStyle = `rgb(${skinColor.r}, ${skinColor.g}, ${skinColor.b})`;
        crc2.fillStyle = `rgb(${skinColor.r}, ${skinColor.g}, ${skinColor.b})`;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        head.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.stroke(head);
        crc2.fill(head);
        crc2.beginPath();
        crc2.moveTo(0, 20);
        crc2.lineTo(0, 30);
        crc2.lineTo(-15 * _direction, 70);
        crc2.stroke();
        crc2.translate(-60 * _direction, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(35 * _direction, 30);
        crc2.lineTo(85 * _direction, 30);
        crc2.lineTo(125 * _direction, 60);
        crc2.stroke();
        crc2.translate(25 * _direction, 95);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(30 * _direction, -15);
        crc2.lineTo(0, -25);
        crc2.lineTo(40 * _direction, -25);
        crc2.lineTo(70 * _direction, -15);
        crc2.lineTo(40 * _direction, 0);
        crc2.stroke();
        crc2.closePath();
        crc2.strokeStyle = "HSL(0, 0%, 74%)";
        crc2.fillStyle = "HSL(0, 0%, 74%)";
        crc2.translate(40 * _direction, 0);
        surfBoard.ellipse(0, 0, 145, 10, 0, 0, 2 * Math.PI);
        crc2.stroke(surfBoard);
        crc2.fill(surfBoard);
        crc2.restore();
    }
    function drawBird(_position, _birdType) {
        if (_birdType == 0) {
            let birdColor = {
                r: randomNumber(0, 255),
                g: randomNumber(0, 255),
                b: randomNumber(0, 255)
            };
            crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(10 * widthFactor, -5 * heightFactor);
            crc2.lineTo(15 * widthFactor, 0);
            crc2.lineTo(20 * widthFactor, -5 * heightFactor);
            crc2.lineTo(30 * widthFactor, 0);
            crc2.stroke();
            crc2.restore();
        }
        else {
            let birdColor = {
                r: randomNumber(0, 255),
                g: randomNumber(0, 255),
                b: randomNumber(0, 255)
            };
            crc2.strokeStyle = `rgb(${birdColor.r}, ${birdColor.g}, ${birdColor.b})`;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(30, 0);
            crc2.stroke();
            crc2.translate(10, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(5, -10);
            crc2.lineTo(15, -10);
            crc2.stroke();
            crc2.restore();
        }
    }
    function drawShip(_position) {
        crc2.strokeStyle = "HSL(11, 100%, 36%)";
        crc2.fillStyle = "HSL(11, 100%, 36%)";
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(600, 0);
        crc2.lineTo(540, 60);
        crc2.lineTo(60, 60);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "HSL(11, 18%, 91%)";
        crc2.fillStyle = "HSL(11, 18%, 91%)";
        crc2.beginPath();
        crc2.rect(150, -40, 300, 40);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "HSL(11, 0%, 46%)";
        crc2.fillStyle = "HSL(11, 0%, 46%)";
        crc2.beginPath();
        crc2.rect(200, -90, 25, 50);
        crc2.rect(287.5, -90, 25, 50);
        crc2.rect(375, -90, 25, 50);
        crc2.stroke();
        crc2.fill();
        crc2.restore();
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=script.js.map