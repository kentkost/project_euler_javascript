//See problem 13, 16, 20
var num1 = [1];
var num2 = [1];

function addToArray(sum,num, p){
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
    return sum;
}

num2 = num2.reverse();
num1 = num1.reverse();
let iterator =2;
while(num2.length <1000){
    var temp = num2.slice(0);
    //console.log(num2);
    for(var j=0; j<num1.length; j++){
        num2 = addToArray(num2,num1[j],j) //new two
    }
    iterator++;
    num1 = temp.slice(0); //old two
}
console.log(num2.reverse().join(""));
console.log(iterator);