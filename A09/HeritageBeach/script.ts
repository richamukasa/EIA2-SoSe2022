/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: It was I
 */
namespace HeritageBeach {
    export let crc2: CanvasRenderingContext2D;
    export let canWidth: number;
    export let canHeight: number;
    const golden: number = 0.62;

    export interface RGBColor {
        r: number;
        g: number;
        b: number;
    }

    let moveables: Moveable[] = [];
    let immoveables: Immoveable[] = [];

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

    function createMovingBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            let position: Vector = new Vector(randomInteger(0, canWidth), randomInteger(canHeight * 0.028, canHeight * 0.231));
            let velocity: Vector = new Vector(randomFloat(-position.x, position.x), position.y);
            let speed: number = randomFloat(1 / 500, 1 / 200);
            let bird: Moveable = new DynamicBird(position, velocity, speed);
            moveables.push(bird);
        }
    }

    function createStaticBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            let position: Vector = new Vector(randomInteger(0, canWidth), randomInteger(canHeight * 0.028, canHeight * 0.231));
            let bird: Immoveable = new StaticBird(position);
            immoveables.push(bird);
        }
    }

    function createClouds(_nClouds: number): void {
        for (let i: number = 0; i < _nClouds; i++) {
            let position: Vector = new Vector(randomFloat(0, canWidth), randomFloat(canHeight * 0.046, canHeight * 0.139));
            let velocity: Vector = new Vector(randomFloat(-position.x, position.x), position.y);
            let speed: number = randomFloat(1 / 5000, 1 / 2000);
            let cloud: Moveable = new Cloud(position, velocity, speed);
            moveables.push(cloud);
        }
    }

    function update(): void {
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
        let mountain: Immoveable = new Mountain(_position);
        immoveables.push(mountain);
    }

    function createTrees(_nTrees: number): void {
        for (let i: number = 0; i < _nTrees; i++) {
            let position: Vector = new Vector(randomInteger(0, canWidth * 0.18), randomInteger(canHeight * 0.2, canHeight * 0.25));
            let tree: Immoveable = new Tree(position);
            immoveables.push(tree);
        }
    }
    function createShip(): void {
        let position: Vector = new Vector(randomInteger(canWidth * 0.625, canWidth * 0.89), randomInteger(canHeight * 0.22, canHeight * 0.24));
        let ship: Immoveable = new Ship(position);
        immoveables.push(ship);

    }

    function createChillers(_nHuman: number): void {
        for (let i: number = 0; i < _nHuman; i++) {
            let position: Vector = new Vector(randomInteger(canWidth * -0.01, canWidth * 0.247), randomInteger(canHeight * 0.44, canHeight * 0.926));
            let chiller: Immoveable = new Chiller(position);
            immoveables.push(chiller);
        }
    }

    function createSurfers(_nHuman: number): void {
        for (let i: number = 0; i < _nHuman; i++) {
        let chillPosition: Vector = new Vector(randomInteger(canWidth * -0.01, canWidth * 0.247), randomInteger(canHeight * 0.44, canHeight * 0.926));
        let position: Vector = new Vector(randomInteger(canWidth * 0.26, canWidth * 0.964), randomInteger(canHeight * 0.37, canHeight * 0.625));
        let surfer: Immoveable = new Surfer(position);
        immoveables.push(surfer);
        }
    }
    function draw(): void {
        let cloudAmmount: number = randomInteger(5, 12);
        let treeAmmount: number = randomInteger(10, 20);
        let birdAmmount: number = randomInteger(10, 20);
        let surfAmmount: number = randomInteger(3, 6);
        let chillAmmount: number = randomInteger(5, 10);
        let initMountain: Vector = new Vector(0, canHeight * 0.12);

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
}