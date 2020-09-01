class Game {
    constructor(money){
        this.stats = new Statistic();
        this.wallet = new Wallet(money);
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBid = document.getElementById('bid');
        this.spanResults = document.querySelector('.score span.result')
        this.spanGames = document.querySelector('.score span.number')
        this.spanWins = document.querySelector('.score span.win')
        this.spanLosses = document.querySelector('.score span.loss')
        this.render(); 
    
    }
    render(colors=['gray', 'gray', 'gray'] ,money = this.wallet.getWalletValue(),result = '' , stats=[0,0,0], bid = 0, wonMoney = 0,){
        if (result) {
            result = `Wygrałeś ${wonMoney}`}
        else if (!result && result != ''){
            result = `przegrałeś ${bid}`
            }
        this.spanResults.textContent = result;
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.boards.forEach((board, index) => {
        board.style.backgroundColor = colors[index];
        });
    }

    startGame(){
        
        if(this.inputBid.value <= 1 ) return alert("Kwota, którą chcesz grać jest zamała")
        const bid = Math.floor(this.inputBid.value);
        if(!this.wallet.checkCanPlay(bid)) return alert("masz za mało pieniędzy lub wprowadzono nie właściwą kwotę")
       
            this.draw = new draw();
            const colors = this.draw.getDrawResult();
            const win = Result.checkWinner(colors);
            const wonMoney = Result.moneyWinGame(win, bid);
            this.wallet.changeWallet(wonMoney);
            this.stats.addGameToStatistic(win, bid);
        
            render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistic, bid, wonMoney)
        
        
    }

    
}