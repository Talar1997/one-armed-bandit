function SlotInitializer(){
    let itemsArray = new SlotItems();

    this.initializeArray = (rows) => {
        let result = [];
        if(rows <= 0 || typeof rows  !== "number") throw new Error("Numbers of rows to generate is to low")

        for(let i = 0; i < rows; i++){
            if(i === (rows - 2)){
                result.push(new PrizeGenerator().generatePrize())
                continue
            }
            result.push([itemsArray.getRandomItem(), itemsArray.getRandomItem(), itemsArray.getRandomItem()]);
        }

        return result;
    }
}