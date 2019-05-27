var start=3;
var steps =2;
var numbers = [];
var numPrimes = 0;
var numNumbers = 1;
function addNewLayer(){
    let num = start;
    numbers.push(num);
    for(let i=0; i<2; i++){
        num = num + steps;
        numbers.push(num);
    }
    steps+=1;
    start = num+(steps*2);
    steps+=1;
    return numbers;
}

function ratioOfPrimes(){
    // console.log(numbers)
    numbers.forEach(function(v1,v2, set){
        numNumbers++;
        if(isPrime(v1)){
            numPrimes++;
        }
    });
    numbers.splice(0,numbers.length)
    numNumbers++;
    return numPrimes/numNumbers*100;
}

//miller+rabin
const isPrime = (n) => {
    let num = n;
	// Prime numbers are whole, non-negative numbers
	// 1 is a composite number (not prime as it's only divisible by itself)
    if (num<2)
		return false;

	// 2 is the first prime number
	if (num === 2)
		return true;

	// Excluding 2 no even number can be prime
	if (num % 2 === 0)
        return false;
        
	// Run divisibility tests up to and including it's square root
    const sqrt = Math.sqrt(num);
    for (let i = 3; i < sqrt; i++) {
		if(num % i === 0)
			return false;
	}
	return true;
};


//4175
//15861 with primetester...
//ratio: 10.23600376138162 with less console output and big number.
//honestly I think it is because I output too much... VScode
//removed big number: Ratio again: 10.23600376138162
function solution(){
    for(let layer =0; layer<30000; layer+=1){
        addNewLayer();
        // console.log("layer: "+(layer+1)*4+1) //amount of layers total
        let ratio = ratioOfPrimes();
        // console.log("primes: "+numPrimes+" numbers: "+numNumbers+" ratio: "+ratio);
        // console.log(ratio);
        if(ratio < 10.0){
            console.log((layer*2)+3); //Because we start in zero. And 1 is a lyer on its own
            break;
        }
    }
    console.log("program end");
    return 1;
}

solution()