/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: It was I
 */
namespace Beach {
    export let crc2: CanvasRenderingContext2D;
    export let canWidth: number;
    export let canHeight: number;
    const golden: number = 0.62;

    export interface Vector {
        x: number;
        y: number;
    }

    export interface RGBColor {
        r: number;
        g: number;
        b: number;
    }

    let birds: Bird[] = [];
    let clouds: Cloud[] = [];
    let trees: Tree[] = [];
    let humans: Human[] = [];
    let ships: Ship[] = [];

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        const ratio: number = 0.5625;
        canvas.style.width = `${window.innerWidth}`;
        if (window.innerWidth > window.innerHeight) {
            canvas.style.height = `${window.innerHeight}`;
        } else {
            canvas.style.height = `${canvas.width * ratio}`;
        }
        canWidth = canvas.width;
        canHeight = canvas.height;
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        draw();

        window.setInterval(update, 20);
    }

    export function randomInteger(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }

    export function randomFloat(_min: number, _max: number): number {
        return Math.random() * (_max - _min + 1) + _min;
    }

    function drawSky(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height * 0.26);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "yellow");
        gradient.addColorStop(1, "orange");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.26);
    }

    function createBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            let speed: number = randomFloat(1 / 5, 1 / 2);
            let type: number = randomInteger(0, 1);
            let bird: Bird = new Bird({ _type: type, _speed: 1 / 500 });
            birds.push(bird);
        }
    }

    function createClouds(_nClouds: number): void {
        for (let i: number = 0; i < _nClouds; i++) {
            let speed: number = randomFloat(1 / 500, 1 / 200);
            let cloud: Cloud = new Cloud(speed);
            clouds.push(cloud);
        }
    }

    function update(): void {
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

    function drawSand(): void {
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


    function drawOcean(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 280, crc2.canvas.width, 280);
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

    function drawMountain(_position: Vector): void {
        let endPoint: Vector = new Vector(randomInteger(750, 1200), 155)


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(0, 0);
        crc2.strokeStyle = "#152109";
        crc2.fillStyle = "#152109";
        for (let i: number = 0; i < endPoint.x; i += 50) {
            let randomHeight: number = randomInteger(-50, 50);
            crc2.lineTo(i, randomHeight);
        }
        crc2.lineTo(endPoint.x, endPoint.y);
        crc2.lineTo(0, endPoint.y);
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.restore();
    }

    function createTrees(_nTrees: number): void {
        for (let i: number = 0; i < _nTrees; i++) {
            let tree: Tree = new Tree;
            trees.push(tree);
        }
    }
    function createShip(): void {
        let ship: Ship = new Ship(randomFloat(1 / 50, 1 / 100));
        ships.push(ship);
        
    }

    function createHumans(_nHuman: number): void {
        let type: number = randomInteger(0, 1);
        let human: Human = new Human(type);
        humans.push(human);
    }
    function draw(): void {
        let cloudAmmount: number = randomInteger(5, 12);
        let treeAmmount: number = randomInteger(10, 20);
        let birdAmmount: number = randomInteger(10, 20);
        let humanAmmount: number = randomInteger(9, 18);
        let initMountain: Vector = new Vector(0, canHeight * 0.12);

        drawSky();
        drawMountain(initMountain);
        drawOcean();
        drawSand();

        for (let i: number = 0; i < treeAmmount; i++) {
            createTrees(treeAmmount);
        }

        for (let i: number = 0; i < cloudAmmount; i++) {
            createClouds(cloudAmmount);
        }

        for (let i: number = 0; i < birdAmmount; i++) {
            createBirds(birdAmmount);
        }


        for (let i: number = 0; i < humanAmmount; i++) {
            createHumans(humanAmmount);
        }

        createShip();
    }
}