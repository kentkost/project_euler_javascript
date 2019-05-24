/*https://en.wikipedia.org/wiki/Binomial_coefficient

C(n,r) = (n!) / (r! *(n-r)!)
C(5,5) = 1
C(5,4) = 5
C(5,3) = 10
C(5,2) = 10
C(5,1) = 5
C(5,0) = 1

       1
      1 1
     1 2 1
    1 3 3 1 
   1 4 6 4 1
 1 5 10 10 5 1      <-- row 5, C(5,r)
1 6 15 20 15 6 1
This means we only have to keep track of when a number goes above 1 millionjnhhl  
*/

let pasTri = new Array(101);

for(let i=0, j=1; i<101; i++,j++){
    pasTri[i] = new Array(j);
    pasTri[i][0]= 1;
    pasTri[i][j-1] =1;
}
let count =0;
for(let row =1; row<101; row++){
    for(let col=1; col<pasTri[row].length-1; col++){
        pasTri[row][col] = pasTri[row-1][col-1] + pasTri[row-1][col];
        if(pasTri[row][col] > 1000000){
            pasTri[row][col] = 1000001;
            count++;
        }
    }
}

console.log(count);
