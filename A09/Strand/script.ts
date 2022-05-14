namespace Beach {
    let crc2: CanvasRenderingContext2D;
    const golden: number = 0.62;
    
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let birbPos: Vector = {x: 100, y: 100};

        drawSky();
        drawOcean();
        drawSand();
        drawChiller(birbPos);
        drawBird(birbPos);
    }

    function drawSky(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 280);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "yellow");
        gradient.addColorStop(1, "orange");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 280);
    }

    function drawClouds(): void {
        let x: number = 0;
    }

    function drawMountain(): void {

    }

    function drawSand(): void {
        crc2.save();

        crc2.translate(0, 480);

        crc2.strokeStyle = "#d2aa58";
        crc2.fillStyle = "#d2aa58";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(420, 280, 1160, 320, 1920, 320);
        crc2.stroke();
        crc2.lineTo(1920, 600);
        crc2.stroke();
        crc2.lineTo(0, crc2.canvas.height);
        crc2.stroke();
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.restore();

    }

    function drawTree(_position: Vector): void {
        crc2.strokeStyle = "brown";
        crc2.fillStyle = "brown";

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(80, 0);
        crc2.stroke();
        crc2.lineTo(40, 380);
        crc2.stroke();
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();

        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "lightgreen";
        crc2.translate(40, 0);
        crc2.moveTo(0, 0);
        crc2.lineTo(40, -40);
        crc2.stroke();
        crc2.lineTo(120, 80);
        crc2.stroke();
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.lineTo(-40, -40);
        crc2.stroke();
        crc2.lineTo(-120, 80);
        crc2.stroke();
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        
        crc2.translate(-40, -20);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(80, 0);
        crc2.stroke();
        crc2.lineTo(40, 140);
        crc2.stroke();
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fill();
        crc2.restore
    }

    function drawOcean(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 280, crc2.canvas.width, 280);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkblue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 280, crc2.canvas.width, crc2.canvas.height);
        crc2.save();
        crc2.translate(0, 380);
        crc2.strokeStyle = "#d2aa58";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(40, -80, 500, -100, 760, -100);
        crc2.stroke();
        crc2.lineTo(0, -100);
        crc2.stroke();
        crc2.lineTo(0, 0);
        crc2.stroke();
        crc2.fillStyle = "#d2aa58";
        crc2.fill();

        crc2.strokeStyle = "none";
        crc2.translate(760, -100);
        crc2.moveTo(0, 0);
        crc2.lineTo(1160, 0);
        crc2.stroke();

        crc2.restore();
    }

    function drawHuman(_position: Vector): void {
        let humanType: number = Math.floor(Math.random() * 3);
        let head: Path2D = new Path2D;
        head.arc(0, 0, 20, 0, 2 * Math.PI);
    }

    function drawChiller(_position: Vector): void {
        let head: Path2D = new Path2D;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        head.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.stroke(head);
        crc2.beginPath();
        crc2.moveTo(0, 20);
        crc2.lineTo(0, 30);
        crc2.stroke();
        crc2.lineTo(-35, 60);
        crc2.stroke();

        crc2.translate(0, 30);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(20, 30);
        crc2.stroke();
        crc2.lineTo(105, 30);
        crc2.stroke();

        crc2.translate(20, 30);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(15, -30);
        crc2.stroke();
        crc2.lineTo(35, 0);
        crc2.stroke();

        crc2.restore();
    }

    function drawSurfer(_position: Vector): void {
        let head: Path2D = new Path2D;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        head.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.stroke(head);
        crc2.beginPath();
        crc2.moveTo(0, 20);
        crc2.lineTo(0, 30);
        crc2.stroke();
        crc2.lineTo(-15, 70);
        crc2.stroke();

        crc2.translate(-60, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(35, 30);
        crc2.stroke();
        crc2.lineTo(85, 30);
        crc2.stroke();
        crc2.lineTo(125, 60);
        crc2.stroke();

        crc2.translate(25, 95);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(30, -15);
        crc2.stroke();
        crc2.lineTo(0, -25);
        crc2.stroke();
        crc2.lineTo(40, -25);
        crc2.stroke();
        crc2.lineTo(70, -15);
        crc2.stroke();
        crc2.lineTo(40, 0);
        crc2.stroke();

        crc2.restore();
    }

    function drawBird(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(10, -5);
        crc2.stroke();
        crc2.lineTo(15, 0);
        crc2.stroke();
        crc2.lineTo(20, -5);
        crc2.stroke();
        crc2.lineTo(30, 0);
        crc2.stroke();
        crc2.restore();
    }
    
}