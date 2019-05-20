var bigInt = require("big-integer");

let bigNumber = bigInt(0);
for(i=1; i<=1000; i++){
    temp = bigInt(i);
    bigNumber =bigNumber.add(temp.pow(i));
}
let num = bigNumber.toString();
console.log(num.substr(num.length-10));
console.log(bigInt(5).add(7));