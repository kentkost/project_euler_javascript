//https://eli.thegreenplace.net/2009/02/25/project-euler-problem-26/

function reciprocalCycles(n1, n2){
    let fracs = 0;
    let res =[];
    let checkedNums = new Array(1000);
    do{
        n1 = (n1 % n2)*10;
        if(checkedNums[n1] == undefined){
            res.push(Math.floor(n1/n2));
        }
        else{
            break;
        }
        checkedNums[n1] = 0;
        fracs++;
    }while(n1 !=0);
    //return { "number":res, "fractions":fracs };
    return res;
}

let high =0;
let num =0;
for(let i=1; i<1000; i++){
    let temp = reciprocalCycles(1,i);
    if(temp.length > high){
        high = temp.length;
        num = i;
    }
}
console.log("reciprocations: "+high);
console.log("From division: "+num);