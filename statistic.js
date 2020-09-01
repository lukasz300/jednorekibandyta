class Statistic {
    constructor(){
        this.gameResults = [];
    }
    addGameToStatistic() {
        let gameResult = {
            win: win,
            bid: bid
        }
    this.gameResults.push(gameResult);        
    }

    showGameStatistic(gier, wygrane, przegrane){
        let games = this.gameResult.length;
        let wins = this.gameResults.filter( result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win);
    }
}