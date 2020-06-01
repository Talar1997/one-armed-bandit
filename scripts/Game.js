function Game(columns) {
    let slotInitializer = new SlotInitializer(columns);
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
        let items = slotInitializer.initializeRandomArray(3);
        items.forEach((row, index) => {
            let yOffsetPos = (index * icon.SIZE) - 75;
            row.forEach((el, index) => {
                el.drawIcon(index * icon.SIZE, newPos + yOffsetPos);
            })
        })
    };


    this.startAnimation = () => {
        ctx.clearRect(0, 0, width, height);
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
        if(columns <= 3) this.checkForWin([items[items.length - 2]])
        else this.checkForWin([
            items[items.length - 2],
            items[items.length - 1],
            items[items.length - 3]
        ]);

        this.changeButtonState(false);
    };

    this.checkForWin = (rows) =>{
        let potentialPrize = 0;

        rows.forEach( (el, index) => {
            let rowLength = el.length;
            let isRowWinning = true;
            for(let i = 1; i < rowLength - 1; i++){
                if(el[i-1] !== el[i]) {
                    isRowWinning = false;
                    break;
                }
            }

            if(isRowWinning){
                switch (index){
                    case 0:
                        let multiplier = 0.75;
                        if(columns <= 3) multiplier = 1;
                        potentialPrize += (el[0].value) * multiplier;
                        break;
                    case 1:
                        potentialPrize += (el[0].value) * 0.5
                        break;
                    case 2:
                        potentialPrize += (el[0].value) * 0.25;
                        break;
                }
            }
        })

        this.winHandler(Math.floor(potentialPrize));
    }

    this.winHandler = (prize) => {
        if (prize > 0) soundManager.play(sounds.COINS);
        if ((prize * (credits.bet / 50)) > 10000) soundManager.play(sounds.JACKPOT);
        credits.takePrize(prize * (credits.bet / 50));
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