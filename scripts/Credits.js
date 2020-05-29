function Credits(){
    this.credit = 500
    this.bet = 50
    this.lastWin = 0

    this.takePayment = () => {
        if(this.credit >= this.bet) this.credit = (this.credit - this.bet);
        else throw new Error("No credits to perform this actions");
    }

    this.takePrize = (prize) => {
        if(typeof prize === 'number'){
            this.lastWin = prize;
            this.credit += prize;
        }
        else throw new TypeError("Prize has to be number")
    }

    this.changeBet = (bet) =>{
        if(bet >= 50 && bet <= 1000) this.bet = bet
        else throw new RangeError("Invalid bet range. Bet should be int from 50-1000")
    }
}