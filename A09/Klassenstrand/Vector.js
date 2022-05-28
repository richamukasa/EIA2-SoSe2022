/**
 * Aufgabe: L09.2 Strand: Classes
 * Matrikel: 270000
 * Datum: 28.05.2022
 * Quellen: Still me
 */
var Beach;
(function (Beach) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        addHor(_addend) {
            this.x += _addend.x;
        }
    }
    Beach.Vector = Vector;
})(Beach || (Beach = {}));
//# sourceMappingURL=Vector.js.map