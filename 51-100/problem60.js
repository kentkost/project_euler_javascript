//Create dictionary containing primes that satisfy the conditions
//dic[3] = {7,109,673}
//Bruteforce.
//Choose two
var primes = [];
var pairs = {};
function isPrime(n){
    let num = n;
    if( num <2){
        return false;
    }
    if(num === 2){
        return true;
    }
    if(num %2 ===0){
        return false;
    }
    const sqrt = Math.sqrt(num);
    for(let i =3; i<sqrt; i+=2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function primeGenerator(max){
    let search = []
    let maxNumber = max;
    search[5] =5; //not interested in 5
    for(let i=2; i<maxNumber; i++){
        if(search[i]==undefined){
            primes.push(i);
            for(let j=i+i; j<maxNumber; j+=i){
                search[j] = j;
            }
        }
    }
    return primes;
}

function isPair(p1, p2){
    let prime1=p1, prime2=p2;
    prime1=prime1.toString(); prime2=prime2.toString();
    if(!(pairs.hasOwnProperty([prime1, prime2]))){
        pairs[[prime1, prime2]] = isPrime(parseInt(prime1+prime2)) && isPrime(parseInt(prime2+prime1));
    }
    return pairs[[prime1, prime2]];
}

function isPairs(pps){
    let ps = pps;
    let pStr = [];
    for(let i=0; i<ps.length; i++){
        for(let j=i+1; j<ps.length; j++){
            let temp = isPair(ps[i], ps[j]);
            if(!temp){
                return false;
            }
        }
    }
    return true;
}

const arrSum = arr => arr.reduce((a,b) =>a+b,0); 

function solution(){
    primes = primeGenerator(10000);//pure guess upperbound. if the sum goes beyond the largest primenumber in list run again.
    let test = [];
    let sum = Number.MAX_SAFE_INTEGER;
    for(let i=1; i<primes[i] && primes[i] < sum; i++){ //We check for one prime
        for(let j=i+1; j<primes.length && primes[j] < sum; j++){ //We find all the possible pairs for one prime
            test = [primes[i],primes[j]];
            if(!(isPairs(test)) || primes[j] > sum){continue;}
            for(let k=j+1; k<primes.length && primes[k] < sum; k++){
                test = [primes[i],primes[j],primes[k]];
                if(!(isPairs(test)) || primes[k] > sum){continue;}
                for(let l=k+1; l<primes.length && primes[k] < sum; l++){
                    test = [primes[i],primes[j],primes[k],primes[l]];
                    if(!(isPairs(test)) || primes[l] > sum){continue;}
                    for(let m=l+1; m<primes.length && primes[m] < sum; m++){
                        test = [primes[i],primes[j],primes[k],primes[l], primes[m]];
                        if(isPairs(test)){
                            let newSum = arrSum(test);
                            if(newSum > sum || sum ==Number.MAX_SAFE_INTEGER){
                                sum = newSum;
                                console.log(sum);
                            }
                        }
                    }
                }
            }
        }
    }
    return sum;
}
//Very slow. 161 secondsto check all. but 11 seconds to find first.
console.log(solution());

//alternative solution?
//Clique problem?
//Create graph. find all clique-5?
