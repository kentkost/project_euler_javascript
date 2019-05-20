var primes = []
var search = []

var maxNumber = 999999
for(var i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}


function findFactors(num){
    let factors = new Set();
    rest = num;
    while(rest != 1){
        for(let p=0; p<primes.length; p++){
            if(rest % primes[p] == 0){
                factors.add(primes[p])
                rest = rest / primes[p];
                break;
            }
        }
    }
    return factors;
}
let consecutive = 0;
for(let i=644; i<999999; i++){
    if(findFactors(i).size == 4){
        consecutive++;
    }
    else{
        consecutive =0;
    }
    if(consecutive == 4){
        console.log("allo: "+ (i-consecutive+1));
        break;
    }
}