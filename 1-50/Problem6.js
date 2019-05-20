var sumOfSquares = 0;
var squareOfSum = 0;
for(var i=1; i<=100; i++){
    sumOfSquares += Math.pow(i,2);
    squareOfSum += i;
}
squareOfSum = Math.pow(squareOfSum, 2);
//console.log(sumOfSquares);
console.log(squareOfSum-sumOfSquares);