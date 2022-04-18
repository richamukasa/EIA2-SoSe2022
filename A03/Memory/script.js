/**
 * Aufgabe: L03 Memory
 * Matrikel: 270000
 * Datum: 18.04.2022
 * Quellen: Ann-Kathrin Pfeffer und ich
 */
var Memory;
(function (Memory) {
    let cardsSelected = 0;
    let startTime;
    let movePossible = false;
    window.addEventListener("load", handleLoad);
    /**
     *
     */
    function handleLoad() {
        let startButton = document.querySelector("button#startButton");
        let form = document.querySelector("div#form");
        form.addEventListener("input", handleInput);
        startButton.addEventListener("click", buttonClick);
        startButton.addEventListener("ontouchend", buttonClick);
    }
    /**
     *
     * @param _event Das click oder ontouchend Event
     */
    function buttonClick(_event) {
        let wrapper = document.querySelector("div#wrapper");
        let form = document.querySelector("div#form");
        let formData = new FormData(document.forms[0]);
        let cardPairs = parseInt(`${formData.get("cardPairs")}`);
        let cardSize = parseInt(`${formData.get("cardSize")}`) / 100;
        let cards = [];
        wrapper.style.backgroundColor = `${formData.get("background")}`;
        wrapper.style.display = "flex";
        wrapper.style.flexWrap = "wrap";
        wrapper.removeChild(form);
        for (let i = 0; i < cardPairs; i++) {
            cards.push(`${i}`);
        }
        for (let i = 0; i < 2; i++) {
            cards = cards.sort(() => Math.random() - 0.5);
            for (let j = 0; j < cards.length; j++) {
                let card = document.createElement("SPAN");
                let cardValue = document.createElement("p");
                wrapper.appendChild(card);
                card.className = "faceDown";
                card.style.width = `${6 * cardSize}%`;
                card.style.height = `${10 * cardSize}%`;
                card.style.color = card.style.backgroundColor = `${formData.get("cardColor")}`;
                cardValue.innerHTML = cards[j];
                card.appendChild(cardValue);
                card.addEventListener("click", function () {
                    spanClick(card, formData);
                });
                card.addEventListener("ontouchend", function () {
                    spanClick(card, formData);
                });
            }
        }
        wrapper.style.fontFamily = `${formData.get("wantedFont")}`;
        startTime = new Date().getTime();
        movePossible = true;
    }
    function spanClick(_card, _formData) {
        if (movePossible) {
            if (_card.className == "faceDown") {
                _card.className = "faceUp";
                _card.style.color = `${_formData.get("fontColor")}`;
                cardsSelected++;
            }
        }
        if (cardsSelected == 2) {
            movePossible = false;
            setTimeout(resetTurn, 2000);
        }
    }
    function resetTurn() {
        let cardOne = document.getElementsByClassName("faceUp")[0];
        let cardTwo = document.getElementsByClassName("faceUp")[1];
        if (cardOne.innerText == cardTwo.innerText) {
            cardOne.className = "doneCard";
            cardTwo.className = "doneCard";
            checkField();
        }
        else {
            cardOne.className = "faceDown";
            cardOne.style.color = cardOne.style.backgroundColor;
            cardTwo.className = "faceDown";
            cardTwo.style.color = cardTwo.style.backgroundColor;
        }
        cardsSelected = 0;
        movePossible = true;
    }
    function handleInput(_event) {
        let demoCard = document.querySelector("span#demoCard");
        let form = document.querySelector("div#form");
        let formData = new FormData(document.forms[0]);
        let cardSize = parseInt(`${formData.get("cardSize")}`) / 100;
        form.style.backgroundColor = `${formData.get("background")}`;
        demoCard.style.width = `${6 * cardSize}%`;
        demoCard.style.height = `${10 * cardSize}%`;
        demoCard.style.color = `${formData.get("fontColor")}`;
        demoCard.style.backgroundColor = `${formData.get("cardColor")}`;
        document.getElementById("headline").style.fontFamily = demoCard.style.fontFamily = `${formData.get("wantedFont")}`;
        demoCard.style.fontSize = `${50 * cardSize}%`;
    }
    function checkField() {
        let wrapper = document.querySelector("div#wrapper");
        if (wrapper.getElementsByClassName("faceDown").length == 0) {
            let endText = document.createElement("p");
            let gameTime = (new Date().getTime() - startTime) / 1000;
            endText.innerHTML = `HOORAY, it took you ${gameTime} seconds to beat the game!`;
            wrapper.appendChild(endText);
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=script.js.map