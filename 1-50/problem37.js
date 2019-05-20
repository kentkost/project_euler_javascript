function truncations(s){
    temp = s;
    let results = []
    for(let i=0; i<s.length; i++){
        temp = temp.substring(1);
        if(temp.length >0){
            results.push(temp);
        }
    }
    temp = s
    for(let i=0; i<s.length; i++){
        temp = temp.substring(0, temp.length-1);
        if(temp.length >0){
            results.push(temp);
        }
    }
    return results;
}

var primes = []
var search = []
var truncatablePrimes = [];

var maxNumber = 9000000
for(var i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}

for(let i =1; i<primes.length; i++){
    tmp = primes[i];
    if(!containsEven(tmp) && tmp >9){
        let testers = [];
        testers = truncations(tmp.toString());
        let pos = -1
        let flag =true;
        for(let j=0; j<testers.length; j++){
            pos = binarySearch(primes, parseInt(testers[j]));
            if(pos == -1){
                flag =false;
                break;
            }
        }
        if(flag){
            truncatablePrimes.push(tmp);
        }
    }
}
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
console.log(truncatablePrimes); // +2 for 2, and 5
console.log(arrSum(truncatablePrimes));

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


function containsEven(num){
    let tmp = num.toString();
    let evens = ["4", "6", "8", "0"];
    if(tmp.length>2){
        evens.push("2");
        evens.push("5");
    }
    for(let i=0; i<evens.length; i++){
        if(tmp.indexOf(evens[i]) != -1){
            return true;
        }
    }
    return false;
}