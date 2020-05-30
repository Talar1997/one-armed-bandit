function StaticContentCreator(){
    this.draw = () => {
        this.createLabels();
        this.createLines();
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

    this.updateCredits = (credits) => {
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
}