function binarySearch (list, value) {
    // initial values for start, middle and end
    let start = 0
    let stop = list.length - 1
    let middle = Math.floor((start + stop) / 2)
  
    // While the middle is not what we're looking for and the list does not have a single item
    while (list[middle] !== value && start < stop) {
      if (value < list[middle]) {
        stop = middle - 1
      } else {
        start = middle + 1
      }
  
      // recalculate middle on every iteration
      middle = Math.floor((start + stop) / 2)
    }
  
    // if the current middle item is what we're looking for return it's index, else return -1
    return (list[middle] !== value) ? -1 : middle
}


var primes = []
var search = []

var maxNumber = 1000000
for(let i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}
let endPrime=0;
let startPrime=-1;
let primesUsed= 0;
for(let i=0; i<primes.length;i++){
    let tmp = primes[i];
    let primeCount = 1;
    for(let j=i+1; j<primes.length;j++){
        tmp+=primes[j];
        primeCount++;
        if(tmp>1000000){break;}
        if(binarySearch(primes, tmp) !=-1){
            if(primesUsed < primeCount){
                primesUsed=primeCount;
                startPrime=primes[i];
                endPrime = tmp;
            }
        }
        
    }
}
console.log(startPrime);
console.log(endPrime);
console.log(primesUsed);