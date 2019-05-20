function dec2bin(dec){
    return (dec >>> 0).toString(2);
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
let sum =0
for(let i=1; i<1000000; i++){
    if(checkIfPalindrome(i.toString(10)) &&
        checkIfPalindrome(dec2bin(i))){
        sum+=i;
    }
}
console.log(sum);