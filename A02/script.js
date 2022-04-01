/**
 * Aufgabe: L02 Event Exercise
 * Matrikel: 270000
 * Datum: 01.04.2022
 * Quellen: Le moi
 */
var EventExercise;
(function (EventExercise) {
    window.addEventListener("load", function () {
        // Das Span Objekt, welches in setInfoBox verwendet wird.
        let infoSpan = document.createElement("SPAN");
        infoSpan.id = "infoBox";
        document.body.appendChild(infoSpan);
        handleLoad();
        /**
         * Die allgemeine Funktion, in der die entsprechenden Events den Funktionen
         * setInfoBox() und logInfo() zugeteilt werden.
         */
        function handleLoad() {
            document.addEventListener("mousemove", setInfoBox);
            document.addEventListener("click", logInfo);
            document.addEventListener("keyup", logInfo);
        }
        /**
         * Das bereits erzeugte Span Element infoSpan bekommt hier die Koordinaten der Maus als Position
         * zugeteilt, damit es sich mit ihr bewegt. infoSpan zeig die Mausposition und das HTML Objekt,
         * in welchem sie sich befindet, an.
         * @param _event Das übergebene MouseEvent, in diesem Fall mousemove (s. handleLoad()).
         */
        function setInfoBox(_event) {
            let mouseX = `${_event.clientX - 755}`;
            let mouseY = `${_event.clientY - 70}`;
            infoSpan.style.marginLeft = `${mouseX}px`;
            infoSpan.style.marginTop = `${mouseY}px`;
            infoSpan.innerHTML = `X: ${_event.clientX} | Y: ${_event.clientY} | Target: ${_event.target}`;
        }
        /**
         * Bei Geschehen eines Events wird dessen Type, Target, Current Target und das Event selbst
         * in der Konsole ausgegeben.
         * @param _event Das übergebene Event, welches die Funktion auslöst. In diesem Fall entweder ein
         * click der Maus oder das loslassen einer Taste der Tastatur (s. handleLoad()).
         */
        function logInfo(_event) {
            console.log(_event.type, _event.target, _event.currentTarget, _event);
        }
    });
})(EventExercise || (EventExercise = {}));
//# sourceMappingURL=script.js.map