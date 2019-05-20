var a,b,c;
var circum =1000;
var s = 1000;
var found = false;

trick:
for(a=1; a <circum; a++){
    for(b=a; b < circum; b++){
        c = circum - a - b;
        if(a * a + b * b == c * c){
            found = true;
            break trick; //trick to double break;
        }
    }
 
    // if (found) {
    //     break;
    // }
}

console.log(a)
console.log(b)
console.log(c)
console.log(a*b*c);
