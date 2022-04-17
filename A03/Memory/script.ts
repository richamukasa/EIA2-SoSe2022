/**
 * Aufgabe: L03 Memory
 * Matrikel: 270000
 * Datum: 17.04.2022
 * Quellen: Ann-Kathrin Pfeffer und ich
 */

namespace Memory {
    let cardsSelected: number = 0;
    let startTime: number;
    let movePossible: boolean = false;


    window.addEventListener("load", handleLoad);


    function handleLoad(): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startButton");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");

        form.addEventListener("input", handleInput);
        startButton.addEventListener("click", buttonClick);
    }

    function buttonClick(_event: Event): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.querySelector("div#wrapper");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let formData: FormData = new FormData(document.forms[0]);
        let cardPairs: number = parseInt(`${formData.get("cardPairs")}`);
        let cardSize: number = parseInt(`${formData.get("cardSize")}`) / 100;
        let cards: string[] = [];
        let date: Date = new Date();
        console.log(date.getTime());



        wrapper.style.backgroundColor = `${formData.get("background")}`;
        wrapper.style.display = "flex";
        wrapper.style.flexWrap = "wrap";
        wrapper.removeChild(form);

        for (let i: number = 0; i < cardPairs; i++) {
            cards.push(`${i}`);
        }

        for (let i: number = 0; i < 2; i++) {
            cards = cards.sort(() => Math.random() - 0.5);
            for (let j: number = 0; j < cards.length; j++) {
                let card: HTMLSpanElement = document.createElement("SPAN");
                let cardValue: HTMLParagraphElement = document.createElement("p");

                wrapper.appendChild(card);
                card.className = "faceDown";
                card.style.width = `${6 * cardSize}%`;
                card.style.height = `${10 * cardSize}%`;
                card.style.color = card.style.backgroundColor = `${formData.get("cardDown")}`;
                cardValue.innerHTML = cards[j];
                card.appendChild(cardValue);
                card.addEventListener("click", function (): void {
                    spanClick(card, formData);
                });
            }
        }
        wrapper.style.fontFamily = `${formData.get("wantedFont")}`;
        startTime = date.getTime();
        movePossible = true;
    }


    function spanClick(_card: HTMLSpanElement, _formData: FormData): void {

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

    function resetTurn(): void {
        let cardOne: HTMLSpanElement = <HTMLSpanElement>document.getElementsByClassName("faceUp")[0];
        let cardTwo: HTMLSpanElement = <HTMLSpanElement>document.getElementsByClassName("faceUp")[1];

        if (cardOne.innerText == cardTwo.innerText) {
            cardOne.className = "doneCard";
            cardTwo.className = "doneCard";
            checkField();
        } else {
            cardOne.className = "faceDown";
            cardOne.style.color = cardOne.style.backgroundColor;
            cardTwo.className = "faceDown";
            cardTwo.style.color = cardTwo.style.backgroundColor;
        }

        cardsSelected = 0;
        movePossible = true;
    }

    function handleInput(_event: Event): void {
        let demoCard: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span#demoCard");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let formData: FormData = new FormData(document.forms[0]);
        let cardSize: number = parseInt(`${formData.get("cardSize")}`) / 100;

        form.style.backgroundColor = `${formData.get("background")}`;
        demoCard.style.width = `${6 * cardSize}%`;
        demoCard.style.height = `${10 * cardSize}%`;
        demoCard.style.color = `${formData.get("fontColor")}`;
        demoCard.style.backgroundColor = `${formData.get("cardDown")}`;
        document.getElementById("headline").style.fontFamily = demoCard.style.fontFamily = `${formData.get("wantedFont")}`;
        demoCard.style.fontSize = `${50 * cardSize}%`;
    }

    function checkField(): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.querySelector("div#wrapper");

        if (wrapper.getElementsByClassName("faceDown").length == 0) {
            let date: Date = new Date();
            console.log(date);
            let endText: HTMLParagraphElement = document.createElement("p");
            let gameTime: number = (new Date().getTime() - startTime) / 1000;

            endText.innerHTML = `HOORAY, you took ${gameTime} seconds to beat the game!`;
            wrapper.appendChild(endText);
        }
    }

}