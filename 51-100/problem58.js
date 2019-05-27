var aks = require("./aks-primality-check.js");

var start=3;
var steps =2;
var numbers = [1]
var primes = []
function addNewLayer(){
    let num = start;
    numbers.push(num);
    for(let i=0; i<2; i++){
        num += steps;
        numbers.push(num);
    }
    steps++;
    start = num+(steps*2);
    steps++;
}

function ratioOfPrimes(){
    let len =numbers.length+((numbers.length-1)/3);
    let numPrimes = 0.0;
    numbers.forEach(function(v1,v2, set){
        if(isPrime(v1)){
            numPrimes++;
        }
    });
    return numPrimes/len*100;
}

//miller+rabin
const isPrime = (num) => {
	if (!Number.isInteger(num))
		return false;

	// Prime numbers are whole, non-negative numbers
	// 1 is a composite number (not prime as it's only divisible by itself)
	if (num < 2)
		return false;

	// 2 is the first prime number
	if (num === 2)
		return true;

	// Excluding 2 no even number can be prime
	if (num % 2 === 0)
		return false;

	// Run divisibility tests up to and including it's square root
	const sqrt = Math.sqrt(num);
	for (let i = 3; i <= sqrt; i++) {
		if(num % i === 0)
			return false;
	}
	return true;
};


//4175
//15861 with primetester...
function solution(){
    // let testprime = 17443153;
    // console.log(primalityChecker(1000000033))
    // console.log(9007199254740991);
    // console.log(Number.MAX_SAFE_INTEGER) 
    //9007199254740991
    //29208621, arraySize=6667
    for(let layer =0; layer<300000; layer+=1){
        addNewLayer();
        console.log((layer+1)*4+1)
        console.log("len: "+(numbers.length+((numbers.length-1)/3)));
        let ratio = ratioOfPrimes();
        console.log("len: "+(numbers.length+((numbers.length-1)/3))+" ratio: "+ratio);
        if(ratio < 10.0){
            console.log(numbers[numbers.length-1])
            console.log((layer*2)+1);
            break;
        }
        console.log("greatest number: "+ numbers[numbers.length-1])
        console.log("array size: "+numbers.length);
    }
}

solution()