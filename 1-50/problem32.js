function verify(numbers){
    str = numbers.join("").split("").sort().join("");
    if(str === "123456789"){
        return true;
    }
    return false;
}

function valid(num){
    str = num.toString().split("").sort();
    let unique = 'a';
    for(let i =0; i< str.length; i++){
        if(str[i] != unique){
            unique = str[i];
        }else if(str[i] == unique){
            return false;
        }
    }
    return true;
}
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
//7254 mod 186
let sum = {} //dictionary to avoid duplicates. since dividing by two didn't do any good:
// 5346 = 18*297
// 5346 = 27*198
// 5346 = 198*27
for(let i=1234; i<9876; i++){
    if(valid(i)){ //find divisor
        for(let j=2; j<987; j++){
            if(i % j === 0){
                if(verify([i,j, i/j])){
                    sum[i] = 0;
                }
            }
        }
    }
}

Object.prototype.forEach = function(cb){
    if(this instanceof Array) return this.forEach(cb);
    let self = this;
    Object.getOwnPropertyNames(this).forEach(
       (k)=>{ cb.call(self, self[k], k); }
    );
};

let res = 0;
sum.forEach((value, key) => {
   res += parseInt(key);
});

console.log(res);