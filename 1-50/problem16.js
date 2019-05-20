//See problem 13
var sum = [2];
// console.log(reverseString(sum.join("")));
function addToArray(num, p){
    let pos = p;
    let rest = num;
    do{
        if(sum[pos] == undefined){
            sum[pos] = 0;
        }
        sum[pos] += rest;
        rest=0;
        if(sum[pos]>9){
            rest = 1;
            sum[pos] = sum[pos]-10;
            pos++;
        }
    }while(rest != 0)
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

for(var i=0; i<1000-1; i++){
    var temp = sum.join("");
    for(var j=0; j<temp.length; j++){
        addToArray(parseInt(temp[j],10),j)
    }
}
sum = reverseString(sum.join(""));
console.log(sum);
var result = 0;
for(var i=0; i<sum.length; i++){
    result+=parseInt(sum[i],10);
}

console.log(result);