/*var i = 2520;
var flag =true;
while(flag){
    for(var j=3; j<=20; j++){
        if(i % j == 0){
            flag = false;
        }
        else{
            flag = true
            break;
        }
    }
    i+=20;
}
console.log(i-20);*/


var primes = [2,3,5,7,11,13,17,19]
var factors = new Set();
var result = 1;
primes.forEach(function(item){
    //var temp = ~~(20 / item);
    //factors.add(temp*item);
    //temp = temp - temp%1
    temp = 20-(20 % item);
    factors.add(temp);
});
console.log(factors)
factors.forEach(function(item){
    //console.log(item);
    result *= item;
});
console.log("result: "+result);


