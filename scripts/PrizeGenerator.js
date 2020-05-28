function PrizeGenerator(){
    let itemsArray = new SlotItems();

    this.between = (a, b, val) => {
        return a <= val && val <= b
    }

    this.generatePrize = () => {
        let result;
        let lowPrizes = itemsArray.slotItemsArray.filter(el => this.between(0, 500, el.value))
        let midPrizes = itemsArray.slotItemsArray.filter(el => this.between(600, 1000, el.value))
        let highPrizes = itemsArray.slotItemsArray.filter(el => this.between(1500, 2500, el.value))
        let jackpoitPrizes = itemsArray.slotItemsArray.filter(el => this.between(5000, 100000, el.value))

        let rng = Math.floor(Math.random() * 10000)

        if(this.between(0, 6000, rng)) result = null
        if(this.between(6001, 8500, rng)) result = lowPrizes[Math.floor(Math.random() * lowPrizes.length)]
        if(this.between(8501, 9500, rng)) result = midPrizes[Math.floor(Math.random() * midPrizes.length)]
        if(this.between(9501, 9800, rng)) result = highPrizes[Math.floor(Math.random() * highPrizes.length)]
        if(this.between(9801, 10000, rng)) result = jackpoitPrizes[Math.floor(Math.random() * jackpoitPrizes.length)]

        if (result === null) return [itemsArray.getRandomItem(), itemsArray.getRandomItem(), itemsArray.getRandomItem()]
        else return [result, result, result]
    }
}