var primes = []
var search = []

var maxNumber = 160
for(let i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}

for(let i=0; i<150; i++){
    console.log(search[i]);
}