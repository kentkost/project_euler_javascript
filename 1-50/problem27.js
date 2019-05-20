//used for finding the right quotients
var ps = [7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
    179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
    233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
    353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
    419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
    467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
    547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
    607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
    661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
    739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
    811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
    877, 881, 883, 887, 907, 911, 919, 929, 937, 941,
    947, 953, 967, 971, 977, 983, 991, 997];

    //change it to find next 80 primes after a certain number
primeGenerator = function(maxNumber){
    var primes = []
    var search = []
    for(var i=2; i<maxNumber; i++){
        if(search[i]==undefined){
            primes.push(i);
            for(var j=i+i; j<maxNumber; j+=i){
                search[j] = j;
            }
        }
    }
    return primes;
}

function isPrime(num){
    return primes.find(function(element){
        return element ==num;
    });
}

Array.prototype.binSearch = function (n) 
{
    let temp = this;
    const mid = Math.floor(temp.length / 2);
    if (temp[temp.length - 1] < n || !temp[mid]) return null;

    if (temp[mid] > n) {
        return temp.slice(0, mid).binSearch(n);
    } else if (temp[mid] < n) {
        return temp.slice(mid, temp.length).binSearch(n);
    }else if(temp[mid] == n){
        return temp[mid];
    } 
    else {
        return null;
    }
};


//Formula: n^2 - a*n + b
//Overestimating n=500.
// 500^2 + 1000 * 500 + 1000
let maxNum = Math.pow(500,2)+(1000*500)+1000
maxNum = 84000 //overestimated too  much
console.log(maxNum);
var primes = primeGenerator(maxNum);


//the logic. If n=0, then b must be a prime since 0+0+b=b
let aMax = 0;
let bMax = 0;
let nMax = 0;
for(let a=0; a<=1000; a++){
    if(primes[a] >1000){
        break;
    }
    for(let b=0; b<=1000; b++){
        if(primes[b] > 1000){
            break;
        }
        for(i=-1; i<=1; i+=2){//should be in a separate function but I am lazy
            for(j=-1; j<=1; j+=2){
                // console.log(isPrime(Math.abs(n * n + a * n + b)) )
                let n=0
                let tem =Math.abs(n * n + (primes[a]*i) * n + (primes[b]*j))
                while (isPrime(tem) == tem) {
                    n++;
                    tem =Math.abs(n * n + (primes[a]*i) * n + (primes[b]*j))
                }
                if (n > nMax) {
                    aMax = primes[a]*i;
                    bMax = primes[b]*j;
                    nMax = n;
                }
            }
        }
    }
}
console.log(aMax);
console.log(bMax);
console.log(nMax);
console.log(aMax * bMax);
