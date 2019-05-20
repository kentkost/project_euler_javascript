function sortedPermutations(num){
    let nums = [];
    let tmp = num;
    nums.push(tmp);
    for(let i =0; i<2; i++){
        tmp += 3330;
        nums.push(tmp);
    }

    let perms = nums.slice(0);
    for(let i =0; i<perms.length; i++){
        perms[i] = perms[i].toString().split("").sort().join("");
    }

    if(perms[0] == perms[1] && perms[1] ==perms[2]){
        return nums;
    }else{
        return [];
    }
}

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

var maxNumber = 9999
for(var i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}
for(let i=0; i<primes.length; i++){
    if(primes[i] >1000 ){
        if((primes[i] ==1487 || primes[i] == 4817 || primes[i] ==8147)){
            continue;
        }
        let perms = sortedPermutations(primes[i]);
        let flag =false
        let temp = []
        for(let j=0; j<perms.length; j++){
            if(binarySearch(primes, perms[j]) != -1){
                temp.push(parseInt(perms[j]));
                if(temp.length == 3){
                    flag =true;
                    break;
                }
            }
        }
        if(flag){
            console.log(temp.join(""));
            break;
        }
    }
}