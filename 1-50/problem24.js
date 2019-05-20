var start = "2134";

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

console.log(sortedPermutations(start));
//2783915460