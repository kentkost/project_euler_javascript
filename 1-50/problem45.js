let found =false;
let num =285+1
while(!found){
    let tmp = num*(num+1)/2
    if(isPentagonal(tmp) && isTriangle(tmp) && isHexagonal(tmp)){
        console.log(tmp);
        found=true;
        break;
    }
    num++;
}



function isPentagonal(num){
    let n = num;
    n = (Math.sqrt(24*n+1)+1) / 6
    return Number.isInteger(n);
}

function isTriangle(num){
    let n = num;
    n = (Math.sqrt(8*n+1)+1) / 2
    return Number.isInteger(n);
}

function isHexagonal(num){
    let n = num;
    n = (Math.sqrt(8*n+1)+1) / 4
    return Number.isInteger(n);
}