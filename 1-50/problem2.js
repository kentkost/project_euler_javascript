var num1=1;
var num2=2;
var sum=0;

while(num2 <4000000){
    if(num2 % 2 == 0){
        sum+=num2;
    }
    var temp = num2;
    //console.log(num2);
    num2 = num2+num1;
    num1 = temp;
}
console.log(sum);
// 6291456
// 4000000