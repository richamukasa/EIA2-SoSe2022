var memorySettings3;
(function (memorySettings3) {
    window.addEventListener("load", hndLoad);
    let fontColorGlobal;
    let valueArray = [];
    let cardCounter = 0;
    let timeStart;
    let timeEnd;
    let y = 0;
    let card1;
    let card2;
    function hndLoad() {
        document.querySelector("button").addEventListener("click", bttnClick);
    }
    function bttnClick() {
        let wrapper = document.getElementById("wrapper");
        let formDiv = document.getElementById("formDiv");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries())
            console.log(entry);
        let cardQuantity = parseInt(formData.get("cardQuantity").toString());
        console.log(cardQuantity);
        let cardSize = parseInt(formData.get("cardSize").toString());
        console.log(cardSize);
        let bgrColor = formData.get("bgrColor").toString();
        console.log(bgrColor);
        let cardColor = formData.get("cardColor").toString();
        console.log(cardColor);
        let fontColor = formData.get("fontColor").toString();
        console.log(fontColor);
        fontColorGlobal = fontColor;
        let fontSelection = formData.get("fontSelection").toString();
        console.log(fontSelection);
        wrapper.removeChild(document.querySelector("form"));
        wrapper.removeChild(document.querySelector("button"));
        wrapper.style.backgroundColor = bgrColor;
        document.body.style.color = fontColor;
        document.body.style.fontFamily = fontSelection;
        createValues(cardQuantity);
        createCards(cardQuantity, cardSize, cardColor, fontColor, fontSelection);
    }
    function createValues(_cardQuantity) {
        for (let i = 1; i <= _cardQuantity; i++) {
            valueArray.push(i);
            valueArray.push(i);
        }
        shuffle(valueArray);
    }
    // Shuffle-Funktion aus Code vom letzten Semester kopiert
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    function createCards(_cardQuantity, _cardSize, _cardColor, _fontColor, _fontSelection) {
        let wrapper = document.getElementById("wrapper");
        for (let x = 0; x < _cardQuantity * 2; x++) {
            let cardDiv = document.createElement("div");
            cardCounter++;
            console.log(cardCounter);
            wrapper.appendChild(cardDiv);
            cardDiv.classList.add("card");
            cardDiv.style.width = _cardSize / 2 + "%";
            cardDiv.style.height = _cardSize / 2 + "vh";
            cardDiv.style.backgroundColor = _cardColor;
            cardDiv.style.color = _cardColor;
            cardDiv.style.margin = "3%";
            console.log(cardDiv);
            cardDiv.innerHTML = `${valueArray[x]}`;
            console.log(valueArray);
            //Look at this refined gentleman! Tut was er soll, I promise. 
            cardDiv.addEventListener("click", function () {
                cardClick(cardDiv);
            });
            timeStart = Date.now();
        }
    }
    /**
     * Die Funktion ist in der Form umgeschrieben, dass nicht mehr mit cardColorGlobal verglichen wird (das existiert nämlich nicht mehr (ups)), sondern
     * direkt die Fontfarbe der Karte mit der eigenen Hintergrundfarbe. fontColorGlobal hab ich drin gelassen, die erfüllt ihren Zweck gut ^^
     *
     * @param _card Anstatt des Events wird außerdem direkt die Karte übergeben. Somit schaffen wir (meiner Meinung nach) Klarheit und sparen uns this.
     * Also, no more event.target cause we never needed him \(=w=)/
     */
    function cardClick(_card) {
        y++;
        console.log(y);
        if (_card.style.color == _card.style.backgroundColor && y == 1) {
            _card.style.color = fontColorGlobal;
            card1 = _card;
            console.log(card1);
        }
        else if (_card.style.color == _card.style.backgroundColor && y == 2) {
            _card.style.color = fontColorGlobal;
            card2 = _card;
            this.window.setTimeout(valueCheck, 2000);
        }
    }
    /**
     * Midnightadventures with ya boy Richbitch:
     * Ich habe einen neuen Freund gefunden: .innerText! (*ﾟ∀ﾟ*)
     * Mit .innerText kannst du deine Wertschriften getrost als <p> in dein Div packen,
     * es wird hier nämlich ein deinem durchsuchten Objekt einfach nur nach dem Text gesucht!
     * Zur Erläuterung: wenn der Wert in deinem Kartendiv als Paragraph hinzugefügt wurde, wäre
     * die .innerHTML z.B. <p>5</p>, aber der .innerText einfach 5. Ist das nicht nice?!
     *
     * Anyway, dein valueCheck vergleicht jetzt die einzelnen Strings tief im Inneren deiner Divs
     * (oder in dem Fall nicht so tief, weil wir auf <p> geschissen haben, huch). Wenn sie nicht gleich sind,
     * dann färbt sich die Schrift wieder wie der Hintergrund und wenn sie nicht gleich sind, dann werden sie gelöscht.
     * Außerdem setzt sich y hier wieder auf 0, das hattest du vergessen. Sonst spielst du nen Zug und dann ist Ende Gelände.
     *
     * DOCH OBACHT! HIER LAUERT EINE FALLE!!! џ(ºДºџ) (die ich nicht behoben habe, damit du auch noch
     * bisschen Spaß am Code haben kannst, hehe)
     * Wenn wir nämlich die Karten aus dem Div entfernen, verschiebt sich das Kartenfeld, da sich die Positionen der
     * Divs an das Umfeld anpassen. So haben wir sie ja kreiert (position: relative;).
     *
     * Au weia, was tun wir da bloß??
     * Hier ein als Tipp getarnter Lösungsansatz: anstatt die Karten aus dem Wrapper zu entfernen,
     * könntest du ihnen zum Beispiel einfach eine Klasse zuweisen, die man nicht sehen kann. Ich meine
     * wer klickt schon auf etwas, das visuell nicht da ist ne? ( ͡° ͜ʖ ͡°)
     */
    function valueCheck() {
        let wrapper = document.getElementById("wrapper");
        if (card1.innerText == card2.innerText) {
            wrapper.removeChild(card1);
            cardCounter--;
            wrapper.removeChild(card2);
            cardCounter--;
            if (cardCounter == 0) {
                timeEnd = Date.now();
                let timePast = timeEnd - timeStart;
                alert("Spiel fertig! Zeit: " + timePast);
            }
        }
        else if (card1 != card2) {
            card1.style.color = card1.style.backgroundColor;
            card2.style.color = card2.style.backgroundColor;
        }
        y = 0;
    }
})(memorySettings3 || (memorySettings3 = {}));
//# sourceMappingURL=script3.js.map