function checkIfPalindrome(num){
    let str = num.toString(10);
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
var num = 0;
// console.log(checkIfPalindrome(num));

for(var i=100; i<1000; i++){
    for(var j=100; j<1000; j++){
        if(checkIfPalindrome(i*j)){
            if(num < i*j){
                num = i*j;
            }
        }
    }
}

console.log(num);
