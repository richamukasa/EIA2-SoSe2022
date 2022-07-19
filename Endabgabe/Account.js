var GardeningSim;
(function (GardeningSim) {
    class Account {
        money;
        carrots;
        cucmber;
        potatos;
        pumpkins;
        spinach;
        fertilizer;
        pesticide;
        constructor(_money) {
            this.money = _money;
            this.carrots = this.cucmber = this.potatos = this.pumpkins = this.spinach = 5;
            this.fertilizer = this.pesticide = 0;
        }
    }
    GardeningSim.Account = Account;
})(GardeningSim || (GardeningSim = {}));
//# sourceMappingURL=Account.js.map