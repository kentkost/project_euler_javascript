function chainLength(num){
    let length = 1;
    while(num != 1){
        if(num%2==0){
            num=num/2
        }
        else{
            num = 3*num +1;
        }
        length++;
    }
    return length;
}

var longestChain = 0;
var num = 0;
for(var i=1; i<1000000; i++){
    let temp = chainLength(i);
    if(temp > longestChain){
        longestChain = temp;
        num =i;
    }
}
console.log(num);