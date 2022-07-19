namespace GardeningSim {
    export class Account {
        money: number;
        carrots: number;
        cucmber: number;
        potatos: number;
        pumpkins: number;
        spinach: number;
        fertilizer: number;
        pesticide: number;

        constructor(_money: number) {
            this.money = _money;
            this.carrots = this.cucmber = this.potatos = this.pumpkins = this.spinach = 5;
            this.fertilizer = this.pesticide = 0;
        }
    }
}