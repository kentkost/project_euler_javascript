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
    let sum = 0;
    start:
    for(let i=1; i<primes[i]; i++){ //We check for one prime
        for(let j=i+1; j<primes.length; j++){ //We find all the possible pairs for one prime
            test = [primes[i],primes[j]];
            if(!(isPairs(test))){continue;}
            for(let k=j+1; k<primes.length; k++){
                test = [primes[i],primes[j],primes[k]];
                if(!(isPairs(test))){continue;}
                for(let l=k+1; l<primes.length; l++){
                    test = [primes[i],primes[j],primes[k],primes[l]];
                    if(!(isPairs(test))){continue;}
                    for(let m=l+1; m<primes.length; m++){
                        // test = [primes[i],primes[j],primes[k],primes[l]];
                        test = [primes[i],primes[j],primes[k],primes[l], primes[m]];
                        // console.log([primes[i],primes[j],primes[k],primes[l]]);
                        if(isPairs(test)){
                            let newSum = arrSum(test);
                            if(newSum > sum){
                                sum = newSum;
                                console.log(sum);
                            }
                            if(primes[i] > sum){
                                break start;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(sum);
}
//Very slow. But within one minnute. So good enough?
solution();

// pairs = {};

// pairs[[3,7]] =true;
// console.log(pairs[[3,7]]);