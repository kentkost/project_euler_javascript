let arr = []
//x*9^5 > 5 digits; so 6 * 59049
for(let i=2; i<295245; i++){
    let str = i.toString();
    spl = str.split("");
    tmp = 0;
    spl.forEach(element => {
        tmp+=Math.pow(parseInt(element),5)
    });
    if(tmp === i){
        arr.push(i);
    }
}
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
console.log(arrSum(arr));