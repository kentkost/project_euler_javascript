var bigInt = require("big-integer");

const arrSum = arr => arr.reduce((a,b) => parseInt(a) + parseInt(b), 0)
let largeNum = bigInt("0");
let result =0;
for(let i=2; i<100; i++){
    largeNum = bigInt(i);
    for(let j=2; j<100; j++){
        let temp = arrSum(largeNum.pow(j).toString().split(""))
        if(temp> result){
            result = temp;
        }   
    }
}
console.log(result);