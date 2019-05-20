//rule 1: First column will always be one. Since there is only one way to make things with only pennies
function createTable(val){
    let coins = [1,2,5,10,20,50,100,200];
    let table = []
    //initialize
    for(let i=0; i<=val; i++){
        table[i] = [];
        table[i][0] = 1; //rule 1
    }

    for(let i=0; i<=val; i++){
        for(let coin=1; coin < coins.length; coin++){
            table[i][coin] = table[i][coin-1];
            if(coins[coin] <= i){
                table[i][coin] += table[i-coins[coin]][coin];
            }
        }
    }
    //return table[val][coins.length-1];
    return table;
}

console.log(createTable(10));