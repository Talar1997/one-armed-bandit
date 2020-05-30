function Credits(credits){
    this.credit = credits;
    this.bet = bet.MIN_BET;
    this.lastWin = 0;

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

    this.changeBet = (newBet) =>{
        if(newBet >= bet.MIN_BET  && newBet <= bet.MAX_BET) this.bet = newBet
        else throw new RangeError("Invalid bet range. Bet should be int from: " + bet.MIN_BET + "-" + bet.MAX_BET)
    }
}