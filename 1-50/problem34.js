var f = [];
function factorial (n) {
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  } 


let nums = [];
for(i=3; i<=8*factorial(9); i++){
    let tmp = i.toString();
    let sum = 0;
    for(let j=0; j<tmp.length; j++){
        sum += factorial(parseInt(tmp[j]));
        if(sum > i){
            break;
        }     
    }
    if(i == sum){
        nums.push(i);
    }
}
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
console.log(arrSum(nums))
