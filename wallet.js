class Wallet {
    constructor (money) {
    let _money = money;
    
    this.getWalletValue = () => {_money};
    
    this.checkCanPlay = (value) => {
        if (_money >= value) return true;
        return false;
    }
    this.changeWallet = (value, type = '+' ) => {
    if (value === 'number' && !isNaN(value)){
        if(type === '+'){
            return money += value
        }
        else if (type === '-') {
            return money += value
        }
    else throw new Error('nieprawidłowe działanie')
    }
    

        }
    }

    
}   