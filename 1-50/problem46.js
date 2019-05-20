var primes = []
var search = []

var maxNumber = 10000
for(var i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}
let result = 1;
let found = false;
while(!found){
    result += 2; //must be uneven
    let j = 0; //location in prime
    found = true; 
    while (result >= primes[j]) {
        if(isTwiceSquare(result-primes[j])){
            found = false;
            break;
        }
        j++;
    }
}
console.log(result);

//we pass result minus prime number because:
//squareNumber = sqrt((oddNumber-prime)/2)
//if the squarenumber is not an integer then it can't be found
function isTwiceSquare(num){
    let squareTest = Math.sqrt(num/2);
    return squareTest == parseInt(squareTest);
}