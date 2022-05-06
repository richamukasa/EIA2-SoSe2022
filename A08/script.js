/**
 * Aufgabe: L08 Art
 * Matrikel: 270000
 * Datum: 06.05.2022
 * Quellen: It was I
 */
var Art;
(function (Art) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let bubbleCount = Math.floor((Math.random() * 49) + 1);
    let background = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };
    console.log(background);
    function handleLoad(_event) {
        console.log(bubbleCount);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground(background);
        makeArt(background);
        function drawBackground(_color) {
            crc2.fillStyle = `rgb(${_color.r}, ${_color.g}, ${_color.b})`;
            crc2.fillRect(0, 0, 800, 800);
        }
        function makeArt(_color) {
            let sunColor = {
                r: 255 - _color.r,
                g: 255 - _color.g,
                b: 255 - _color.b
            };
            let r1 = Math.floor((Math.random() * 20) + 10);
            let r2 = Math.floor((Math.random() * 60) + 40);
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            let particle = new Path2D();
            let strokeStart = {
                x: Math.floor(Math.random() * 800),
                y: Math.floor(Math.random() * 800)
            };
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, `rgb(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 1)`);
            gradient.addColorStop(1, `rgb(${_color.r}, ${_color.g}, ${_color.b})`);
            crc2.fillStyle = gradient;
            crc2.beginPath();
            crc2.moveTo(strokeStart.x, strokeStart.y);
            for (let suns = 0; suns < bubbleCount; suns++) {
                crc2.save();
                let x = Math.floor((Math.random() * 740) + 30);
                let y = Math.floor((Math.random() * 740) + 30);
                crc2.translate(x, y);
                crc2.lineTo(0, 0);
                crc2.stroke();
                crc2.fill(particle);
                crc2.restore();
            }
        }
    }
})(Art || (Art = {}));
//# sourceMappingURL=script.js.map