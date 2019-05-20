var bound = 1000000;
var str = '.';
var i;

//just create it all up to whatever digit
for (i = 1; str.length <= bound; i++) {
  str += i;
}

let x = [1, 10, 100, 1000, 10000, 100000, 1000000];
let p = 1;
for(let i =0; i<x.length; i++){
    p *= parseInt(str[x[i]]);
}
console.log(p);