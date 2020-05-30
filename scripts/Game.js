function Game() {
    let slotInitializer = new SlotInitializer();
    let credits = new Credits(moneyOnStart);
    let soundManager = new SoundManager();
    let contentCreator = new StaticContentCreator();
    let items = null;
    let newPos = 0;
    let positionOffset = 40;

    this.initialize = () => {
        this.createStartScreen();
        this.initializeBackgroundMusic();
        contentCreator.draw();
        contentCreator.updateCredits(credits);
    };

    this.initializeBackgroundMusic = () => {
        soundManager.play(sounds.BACKGROUND, true, 0.2);
    };

    this.setDefaultVariables = () => {
        this.setSpinningSpeed(spinningSpeed.FAST);
        newPos = 0;
        items = null;
    };

    this.changeBet = (amount) => {
        soundManager.play(sounds.CLICK);
        credits.changeBet(credits.bet + amount);
        contentCreator.updateCredits(credits);
    }

    this.setSpinningSpeed = (option) => {
        switch (option) {
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
            let yOffsetPos = (index * icon.SIZE) - 100;
            row.forEach((el, index) => {
                el.drawIcon(index * icon.SIZE, newPos + yOffsetPos);
            })
        })
    };


    this.startAnimation = () => {
        ctx.clearRect(0, 0, 600, 600);
        contentCreator.createLines();

        newPos += positionOffset;

        items.forEach((row, index) => {
            let yOffsetPos = -index * icon.SIZE;
            row.forEach((el, index) => {
                el.drawIcon(index * icon.SIZE, newPos + yOffsetPos);
            })
        });

        this.changeSpeedValue();

        if (newPos > (items.length * icon.SIZE) - 285) this.endOfSpinning(items);
        else setTimeout(this.startAnimation, animationSpeed);
    };

    this.changeSpeedValue = () => {
        if (newPos > (items.length * icon.SIZE) / 1.15) this.setSpinningSpeed(spinningSpeed.MID);
        if (newPos > (items.length * icon.SIZE) / 1.08) this.setSpinningSpeed(spinningSpeed.SLOW);
    };

    this.endOfSpinning = (items) => {
        let winningRow = items[items.length - 2];

        if (winningRow[0] === winningRow[1] && winningRow[1] === winningRow[2]) {
            this.winHandler(winningRow[0]);
        }

        this.changeButtonState(false);
    };

    this.winHandler = (prize) => {
        if (prize.value > 0) soundManager.play(sounds.COINS);
        if ((prize.value * (credits.bet / 50)) > 10000) soundManager.play(sounds.JACKPOT);
        credits.takePrize(prize.value * (credits.bet / 50));
        contentCreator.updateCredits(credits);
    };

    this.startSpinning = () => {
        soundManager.play(sounds.CLICK);
        try{
            credits.takePayment()
            contentCreator.updateCredits(credits);
            this.changeButtonState(true);
            this.setDefaultVariables();
            items = slotInitializer.initializeArray(48);
            soundManager.play(sounds.SPIN);
            this.startAnimation();
        }catch(error){
            console.log("Not enought money", credits.credit);
        }

    };

    this.changeButtonState = (state) => {
        document.querySelector("#lotteryButton").disabled = state;
        document.querySelector("#betPlus").disabled = state;
        document.querySelector("#betMinus").disabled = state;
    };
}