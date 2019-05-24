
var bigInt = require("big-integer");
var zero = bigInt();
var ninetyThree = bigInt(93);
var largeNumber = bigInt("75643564363473453456342378564387956906736546456235345");
var googol = bigInt("1e100");
var bigNumber = bigInt(largeNumber);
 
var maximumByte = bigInt("FF", 16);
var fiftyFiveGoogol = bigInt("<55>0", googol);

// ninetyThree = ninetyThree.add(5);

// console.log(ninetyThree.toString())

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
            // console.log(i);
        }
        else{
            // console.log("is not lychrel: "+i);
        }
    }
    console.log(lychrels);
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

solution();