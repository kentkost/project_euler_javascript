let nums = []
for(let i=10; i<100; i++){
    for(let j=i+1; j<100; j++){
        let temp = pseudoReduce(i, j);
        if(temp != 0){
            if(i/j === temp[0] / temp[1]){
                nums.push(temp);
            }
        }
    }
}

facNom = 1
facDen = 1;
for(let i=0; i<nums.length; i++){
    facNom *= nums[i][0];
    facDen *= nums[i][1];
}
let gcd = gcd_two_numbers(facDen,facNom)
console.log(facDen/gcd);

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  

function pseudoReduce(num1, num2){
    let s1 = num1.toString();
    let s2 = num2.toString();
    if(s1[1] ==s2[0] && s2[1]!=0){
        return [s1[0], s2[1]];
    }else {
        return 0;
    }
}