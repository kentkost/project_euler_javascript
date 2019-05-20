for(let i=1; i<Number.MAX_VALUE/6; i++){
    if(createNumbers(i)){
        console.log(i);
        break;
    }
}

function createNumbers(num){
    let n = num;
    let numbers = [];
    numbers.push((n*2).toString().split("").sort().join(""));
    numbers.push((n*3).toString().split("").sort().join(""));
    numbers.push((n*4).toString().split("").sort().join(""));
    numbers.push((n*5).toString().split("").sort().join(""));
    numbers.push((n*6).toString().split("").sort().join(""));
    
    let s = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(s !== numbers[i]){
            return false;
        }
    }
    return true;
}