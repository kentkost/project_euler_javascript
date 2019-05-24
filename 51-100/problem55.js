
var bigInt = require("big-integer");

solution = function(){
    let lychrels = 0;
    for(let i=1; i<10000; i++){
        let lychrel = bigInt(i);
        // console.log(lychrel.toString().split("").reverse().join(""));
        let isLychrel =true;
        // console.log(lychrel.toString());
        for(let j=0; j<50;j++){
            let tmp = lychrel.toString().split("").reverse().join("");
            tmp = bigInt(tmp);
            lychrel = lychrel.add(tmp)
            // console.log(lychrel.toString());
            if(checkIfPalindrome(lychrel.toString())){
                isLychrel =false;
                break;
            }
        }
        if(isLychrel){
            lychrels++;
        }
    }
    return lychrels;
}

function checkIfPalindrome(s){
    let str = s;
    for(let i=0, j=str.length-1; i<str.length; i++, j--){
        if(str[i]!=str[j]){
            return false;
        }
        if(i==j || j<i){
            break;
        }
    }
    return true;
}

console.log(solution());