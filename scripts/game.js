function Game() {
    let items = null;
    let speed = 10;
    let newPos = 0;
    let positionOffset = 40;
    let slotInitializer = new SlotInitializer();

    this.initialize = () => {
        if(!canvas.getContext) throw new Error("Canvas is not supported by your browser");
        this.createStartScreen()

    };

    this.setDefaultVariables = () => {
        newPos = 0;
        items = null;
        this.setSpinningSpeed(spinningSpeed.FAST);
    };

    const spinningSpeed = {
        FAST: "fast",
        MID: "middle",
        SLOW: "slow"
    };

    this.setSpinningSpeed = (option) => {
        switch(option){
            case spinningSpeed.FAST:
                positionOffset = 40;
                break;
            case spinningSpeed.MID:
                positionOffset = 20;
                break;
            case spinningSpeed.SLOW:
                positionOffset = 10;
                break;
        }
    };

    this.createStartScreen = () => {
        let items = slotInitializer.initializeArray(3);
        items.forEach((row, index) => {
            let yOffsetPos = (index*icon.SIZE) - 100;
            row.forEach((el, index) =>{
                el.drawIcon(index*icon.SIZE, newPos + yOffsetPos);
            })
        })
    };

    this.startAnimation = () => {
        ctx.clearRect(0,0,600,600);

        newPos += positionOffset;

        items.forEach((row, index) => {
            let yOffsetPos = -index*icon.SIZE;
            row.forEach((el, index) =>{
                el.drawIcon(index*icon.SIZE, newPos + yOffsetPos);
            })
        });

        this.changeSpeedValue();

        if(newPos > (items.length * icon.SIZE) - 285) this.endOfSpinning(items);
        else setTimeout(this.startAnimation, speed);
    };

    this.changeSpeedValue = () => {
        if(newPos > (items.length * icon.SIZE) / 1.15) this.setSpinningSpeed(spinningSpeed.MID);
        if(newPos > (items.length * icon.SIZE) / 1.08) this.setSpinningSpeed(spinningSpeed.SLOW)
    };

    this.endOfSpinning = (items) => {
        let winningRow = items[items.length-2];

        if(winningRow[0] === winningRow[1] && winningRow[1] === winningRow[2]){
            this.winFunction(winningRow[0])
        }

        this.changeButtonState(false)
    };

    this.winFunction = (prize) => {
        console.log("You win: $" + prize.value)
    };

    this.startSpinning = () => {
        this.changeButtonState(true);
        this.setDefaultVariables();
        items = slotInitializer.initializeArray(30);
        this.startAnimation();
    };

    this.changeButtonState = (state) => {
        document.querySelector("#lotteryButton").disabled = state;
    }
}