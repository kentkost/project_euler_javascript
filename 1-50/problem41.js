var primes = []
var search = [];

var maxNumber = 9999999;
for(let i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}

let largest =0;
for(let i=0; i<primes.length; i++){
    if(valid(primes[i])){
        largest = primes[i];
    }
}
console.log(largest);

function valid(num){
    str = num.toString().split("").sort();
    let unique;
    if(str[0] == 1){
        unique = str[0];
    }
    else{return false;}
    for(let i =1; i< str.length; i++){
        if(parseInt(str[i]-1) == parseInt(unique)){
            unique = str[i];
        }else{
            return false;
        }
    }
    return true;
}

