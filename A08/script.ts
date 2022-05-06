namespace Art {
    interface Vector {
        x: number;
        y: number;
    }

    interface RGBColor {
        r: number;
        g: number;
        b: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    const golden: number = 0.62;
    let sunCount: number = Math.floor(Math.random() * 50);
    let background: RGBColor = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };

    console.log(background);

    function handleLoad(_event: Event): void {
        console.log(sunCount);
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground(background);
        makeArt(background);



        function drawBackground(_color: RGBColor): void {
            crc2.fillStyle = `rgb(${_color.r}, ${_color.g}, ${_color.b})`;
            crc2.fillRect(0, 0, 800, 800);
        }

        function makeArt(_color: RGBColor): void {
            let sunColor: RGBColor = {
                r: 255 - _color.r,
                g: 255 - _color.g,
                b: 255 - _color.b
            };

            let r1: number = Math.floor((Math.random() * 20) + 10);
            let r2: number = Math.floor((Math.random() * 60) + 40);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle: Path2D = new Path2D();

            let strokeStart: Vector = {
                x: Math.floor(Math.random() * 800),
                y: Math.floor(Math.random() * 800)
            };

            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, `rgb(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 1)`);
            gradient.addColorStop(1, `rgb(${_color.r}, ${_color.g}, ${_color.b})`);
            crc2.fillStyle = gradient;

            crc2.beginPath();
            crc2.moveTo(strokeStart.x, strokeStart.y);
            for (let suns: number = 0; suns < sunCount; suns++) {
                crc2.save();
                let x: number = Math.floor((Math.random() * 740) + 30);
                let y: number = Math.floor((Math.random() * 740) + 30);

                crc2.translate(x, y);
                crc2.lineTo(0, 0);
                crc2.stroke();
                crc2.fill(particle);
                crc2.restore();
            }
        }
    }
}