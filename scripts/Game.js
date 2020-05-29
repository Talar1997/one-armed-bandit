function Game() {
    let items = null;
    let speed = 10;
    let newPos = 0;
    let positionOffset = 40;
    let slotInitializer = new SlotInitializer();
    let credits = new Credits(1000);
    let soundManager = new Sounds();

    const spinningSpeed = {
        FAST: "fast",
        MID: "middle",
        SLOW: "slow"
    };

    this.initialize = () => {
        if (!canvas.getContext) throw new Error("Canvas is not supported by your browser");
        this.createStartScreen();
        this.initializeBackgroundMusic();
        this.updateCredits();
        this.createLines();
        this.createLabels();
    };

    this.initializeBackgroundMusic = () => {
        let backgroundMusic = new Sounds()
        backgroundMusic.sound.loop = true;
        backgroundMusic.sound.volume = 0.2;
        backgroundMusic.play('sounds/loop.mp3');
    };

    this.setDefaultVariables = () => {
        newPos = 0;
        items = null;
        this.setSpinningSpeed(spinningSpeed.FAST);
    };

    this.updateCredits = () => {
        creditBoardCtx.clearRect(0,0,600,70)
        creditBoardCtx.font = "30px DigitalFont";
        creditBoardCtx.fillStyle = "white";
        creditBoardCtx.textAlign = "start";
        creditBoardCtx.fillText(credits.credit, 10, 50);
        creditBoardCtx.textAlign = "center";
        creditBoardCtx.fillText(credits.bet, 280, 50);
        creditBoardCtx.textAlign = "end";
        creditBoardCtx.fillText(credits.lastWin, 590, 50);
    };

    this.increaseBet = () => {
        credits.changeBet(credits.bet + 50);
        this.updateCredits();
    }

    this.decreaseBet = () => {
        credits.changeBet(credits.bet - 50);
        this.updateCredits();
    }

    this.createLabels = () => {
        controlBoardCtx.clearRect(0,0,600,100)
        controlBoardCtx.font = "15px Consolas";
        controlBoardCtx.fillStyle = "white";
        controlBoardCtx.textAlign = "start";
        controlBoardCtx.fillText("CREDITS", 10, 15);
        controlBoardCtx.textAlign = "center";
        controlBoardCtx.fillText("BET", 280, 15);
        controlBoardCtx.textAlign = "end";
        controlBoardCtx.fillText("LAST WIN", 590, 15);
    };

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

    this.createLines = () => {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 400);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 400);
        ctx.stroke();

        //ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0,180);
        ctx.lineTo(0,220);
        ctx.lineTo(20,200);

        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(600,180);
        ctx.lineTo(600,220);
        ctx.lineTo(580,200);
        ctx.fill();
    };

    this.startAnimation = () => {
        ctx.clearRect(0, 0, 600, 600);
        this.createLines();

        newPos += positionOffset;

        items.forEach((row, index) => {
            let yOffsetPos = -index * icon.SIZE;
            row.forEach((el, index) => {
                el.drawIcon(index * icon.SIZE, newPos + yOffsetPos);
            })
        });

        this.changeSpeedValue();

        if (newPos > (items.length * icon.SIZE) - 285) this.endOfSpinning(items);
        else setTimeout(this.startAnimation, speed);
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
        if (prize.value > 0) soundManager.play("sounds/coins.mp3");
        if ((prize.value * (credits.bet / 50)) > 10000) soundManager.play("sounds/jackpot.mp3");
        credits.takePrize(prize.value * (credits.bet / 50));
        this.updateCredits();
    };

    this.startSpinning = () => {
        try{
            credits.takePayment()
            this.updateCredits()
            this.changeButtonState(true);
            this.setDefaultVariables();
            items = slotInitializer.initializeArray(48);
            soundManager.play("sounds/spin.mp3");
            this.startAnimation();
        }catch(error){
            console.log("not enought money", credits.credit);
        }

    };

    this.changeButtonState = (state) => {
        document.querySelector("#lotteryButton").disabled = state;
        document.querySelector("#betPlus").disabled = state;
        document.querySelector("#betMinus").disabled = state;
    };
}