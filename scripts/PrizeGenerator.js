function PrizeGenerator(){
    let itemsArray = new SlotItems();
    this.between = (a, b, val) => a <= val && val <= b;
    this.filterPrizes = (min, max) => itemsArray.slotItemsArray.filter(el => this.between(min, max, el.value));

    let lowPrizes = this.filterPrizes(0, 500);
    let midPrizes = this.filterPrizes(600, 1000);
    let highPrizes = this.filterPrizes(1500, 2500);
    let jackpotPrizes = this.filterPrizes(5000, 10000);
    let probabilityArray = [
        [0, 7000, null],
        [7001, 8500, lowPrizes],
        [8501, 9500, midPrizes],
        [9501, 9900, highPrizes],
        [9901, 10000, jackpotPrizes],
    ];

    this.generatePrize = () => {
        let rng = Math.floor(Math.random() * 10000);
        let result = null;
        probabilityArray.forEach(el => {
            let potentialPrize = this.assignPrize(el[0], el[1], rng, el[2]);
            if(potentialPrize !== undefined) result = potentialPrize;
        });

        return result;
    };

    this.assignPrize = (a,b,rng, winArray) => {
        if(this.between(a,b,rng)){
            if(winArray === null) return null;
            return winArray[Math.floor(Math.random() * winArray.length)];
        }
    }
}