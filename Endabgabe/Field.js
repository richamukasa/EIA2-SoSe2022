var GardeningSim;
(function (GardeningSim) {
    class Field {
        occupied;
        recovering;
        position;
        fieldWater;
        fieldFertilizer;
        account;
        fieldPlant;
        div;
        pictures;
        constructor(_wrapper, _x, _y, _account) {
            this.account = _account;
            this.div = document.createElement("div");
            this.position = new GardeningSim.Vector(_x + 50, _y + 50);
            this.div.className = "ready";
            this.div.id = "";
            _wrapper.appendChild(this.div);
            this.fieldPlant = [];
            this.fieldWater = 100;
            this.fieldFertilizer = 0;
            this.occupied = false;
            this.recovering = false;
            this.div.addEventListener("click", this.info);
        }
        // public harvest(_event: MouseEvent): void {
        //     switch (this.fieldPlant[0].growth) {
        //         case GROWTH.UNRIPE:
        //             alert("You ain't gonna get nothin kid. Be patient.");
        //             break;
        //         case GROWTH.RIPE:
        //             this.account.money += this.fieldPlant[0].price;
        //             while (this.div.hasChildNodes)
        //                 this.div.removeChild(this.div.firstChild);
        //             this.div.className = "ready";
        //         case GROWTH.OVERRIPE:
        //             this.account.money += this.fieldPlant[0].price / 2;
        //             alert("Ain't no more than hlaf for this one. Watch out next time kid.");
        //             while (this.div.hasChildNodes)
        //                 this.div.removeChild(this.div.firstChild);
        //             this.div.className = "ready";
        //     }
        // }
        water() {
            if (this.div.id == "active") {
                this.fieldWater += 50;
                console.log(this.fieldWater);
            }
        }
        fertilize(_event) {
            this.fieldFertilizer += 25;
            this.account.fertilizer--;
        }
        reset() {
            if (this.fieldPlant[0].growth == GardeningSim.GROWTH.DEAD) {
                this.recovering = true;
                this.div.className = "dead";
                setTimeout(function () {
                    this.recovering = false;
                    this.div.className = "ready";
                });
            }
        }
        update() {
            this.div.style.backgroundColor = "brown";
            if (this.occupied) {
                if (this.fieldPlant[0].level < 25)
                    this.div.style.backgroundImage = this.pictures[0];
                else if (this.fieldPlant[0].level >= 25 && this.fieldPlant[0].level < 74)
                    this.div.style.backgroundImage = this.pictures[1];
                else if (this.fieldPlant[0].level >= 75 && this.fieldPlant[0].level <= 100)
                    this.div.style.backgroundImage = this.pictures[2];
                else if (this.fieldPlant[0].level > 100)
                    this.div.style.backgroundImage = this.pictures[3];
            }
            if (this.recovering)
                this.div.style.backgroundColor = "lightbrown";
        }
        info(_event) {
            if (GardeningSim.clickedField.length == 1) {
                GardeningSim.clickedField.pop();
            }
            GardeningSim.clickedField.push(this);
            if (this.occupied) {
                document.getElementById("veggie").innerHTML = `${this.fieldPlant[0].name}`;
                document.getElementById("health").innerHTML = `${this.fieldPlant[0].health} / ${this.fieldPlant[0].maxHealth}`;
                document.getElementById("level").innerHTML = `${this.fieldPlant[0].level}`;
                document.getElementById("growth").innerHTML = `${this.fieldPlant[0].growth}`;
                document.getElementById("fieldWater").innerHTML = `${this.fieldWater} / ${this.fieldPlant[0].maxWater}`;
                document.getElementById("fieldFert").innerHTML = `${this.fieldFertilizer} / ${this.fieldPlant[0].maxFertilizer}`;
                document.getElementById("price").innerHTML = `${this.fieldPlant[0].name}`;
            }
            else {
                document.getElementById("veggie").innerHTML = "Wanna grow some crops kid?";
            }
        }
    }
    GardeningSim.Field = Field;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Field.js.map