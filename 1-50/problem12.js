function NumberOfDivisors(num){
    var nod = 0;
    var sqrt = Math.sqrt(num);
 
    for(var i = 1; i<= sqrt; i++){
        if(num % i == 0){
            nod += 2;
        }
    }
    // if the number is a perfect square
    if (sqrt * sqrt == number) {
        nod--;
    }
 
    return nod;
}

var number = 0;
var i = 1;
while(NumberOfDivisors(number) < 500){
    number += i;
    i++;
}

console.log(number);