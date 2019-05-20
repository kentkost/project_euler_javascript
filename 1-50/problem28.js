
// let startNum = 25;
// let size =5;
// let end =0;
// for(let i=size-1; i>0; i-=2){
//     end+=4
// }
// console.log(end+1);
let sum =0;
for(i=1001; i>1; i-=2){
    temp = Math.pow(i,2);
    sum+=temp;
    sum+=temp-(i-1);
    sum+=temp-((i-1)*2);
    sum+=temp-((i-1)*3);
}

console.log(sum+1)
