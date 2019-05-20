var primes = [2];
var sum = 2;
function isPrime(testPrime) {
    var ceil = Math.ceil(Math.sqrt(testPrime)); //Makes it a shitton faster
    for(let i=0; i<primes.length; i++){
        if(testPrime % primes[i] == 0){
            return false;
        }
        if(primes[i]>ceil){ //much faster
            break;
        }
    }
    primes.push(testPrime);
    return true;h
}

for(var i=3; i<20000000; i+=2){
    var res = isPrime(i);
    if(res){
        sum+=i;
    }
}
console.log(sum);