const arrSum = arr => arr.reduce((a,b) => a + b, 0)
let sum = 0;
for(var i=0; i<10000; i++){
    if(findAmicablePair(i)){
        sum+=i;
    }
}
console.log("ALLO: "+sum);

function findAmicableNumber(num){
    let divisors = [];
    for(let i=1; i<=num/2; i++){
        if(num%i == 0){
            divisors.push(i);
        }
    }
    return arrSum(divisors)
}

function findAmicablePair(num){
    let temp = findAmicableNumber(num);
    if(temp == num){ //the two numbers can't equal eachother
        return false;
    }
    temp = findAmicableNumber(temp); //If it returns back to the same. Then amicablepair
    if(temp == num){
        return true;
    }
    return false;
}
