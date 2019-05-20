
console.log


let pen = 1;
let found = false;

while(!found){
    let p = pen*(3*pen-1) / 2;
    for(let sub=pen-1; sub>0; sub--){
        let q = sub*(3*sub-1) / 2;
        if(isPentagonal(p-q) && isPentagonal(p+q)){
            console.log(p-q);
            found = true;
            break;
        }
    }
    pen++;
}


function isPentagonal(num){
    let n = num;
    n = (Math.sqrt(24*n+1)+1) / 6
    return Number.isInteger(n);
}