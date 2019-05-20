var primes = []
var search = []
var numm = 600851475143;

for(var i=2; i<Math.sqrt(numm); i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<Math.sqrt(numm); j+=i){
            search[j] = 0;
        }
    }
}
var num = 0;
for(var i=0;i<primes.length; i++){
    if(numm % primes[i]==0){
        num = primes[i];
    }
}
console.log(num);