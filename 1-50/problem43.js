String.prototype.swap = function(i, j){
    var temp = this.valueOf().split("");
    let c = temp[i];
    temp[i] = temp[j];
    temp[j] = c;
    return temp.join("");                                                                   
}
String.prototype.reverse = function(l, h){
    let temp = this.valueOf();
    while (l < h) 
   { 
       temp = temp.swap(l, h);
       l++; 
       h--; 
   } 
   return temp;
}

String.prototype.sort = function(){
    return this.valueOf().split("").sort().join("");
}


function findCeil(s, grtChar, start, end){
    let str =s;
    let ceilIndex = start;
    for(let i =start+1; i<=end; i++){
        if(str[i] > grtChar && str[i] < str[ceilIndex]){
            ceilIndex=i;
        }
    }
    return ceilIndex;
}

function sortedPermutations(s){
    let str = s;
    let length = str.length;
    this.str = str.sort();
    let it =1;
    let isFinished = false;
    let result = []
    while(!isFinished){
        result.push(str);
        let i;
        for(i = length-2; i>=0; --i){
            if(str[i] < str[i+1]){
                break;
            }
        }
        
        if(i ==-1){
            isFinished =true;
        }else{
            let ceilIndex = findCeil(str, str[i], i+1, length-1);
            str = str.swap(i, ceilIndex);
            str = str.reverse(i+1, length-1);
        }
        it++;
    }
    return result;
}
let panNums = sortedPermutations("1234567890");
let primes = [2,3,5,7,11,13,17];
let divPans = []
for(let i=0; i<panNums.length; i++){
    if(panNums[i][0] == "0"){
        continue;
    }
    if(subStringDivisible(panNums[i])){
        divPans.push(parseInt(panNums[i]));
    }
}
console.log(divPans);
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
console.log(arrSum(divPans));
//5.5 seconds. Not incredibly fast. But doubt it can be done much faster

// console.log(subStringDivisible("1406357289"));
function subStringDivisible(num){
    let tmp = num;
    for(let i=1, p=0; i<tmp.length-2;i++, p++){
        n = parseInt(tmp.substr (i,3));
        if(n % primes[p] != 0){
            return false;
        }
    }
    return true;
}