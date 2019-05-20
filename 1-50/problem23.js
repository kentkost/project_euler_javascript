const arrSum = arr => arr.reduce((a,b) => a + b, 0)

var abundantNumbers = [];
var noSumFound = []
for(var i=1; i<28123; i++){
    if(isAbundantNumber(i)=='abundant'){
        abundantNumbers.push(i);//sum of two abundant numbers
        for(var j=0; j<abundantNumbers.length; j++){
            if(i+abundantNumbers[j] >=28123){
                break;
            }
            noSumFound[i+abundantNumbers[j]] = 0;
        }
    }
}
let sum =0;
for(var i=0; i<28123; i++){
    if(noSumFound[i] == undefined){
        sum += i;
    }
}
console.log(sum);

function isAbundantNumber(num){
    let divisors = []
    for(let i=0; i<num;i++){
        if(num % i ==0){
            divisors.push(i);
        }
    }
    let temp = arrSum(divisors);
    if(temp > num){
        return 'abundant';
    }
    else if( temp < num){
        return 'deficient';
    }
    else{
        return 'perfect';
    }
}