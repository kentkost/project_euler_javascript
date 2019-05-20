// var pascalTriangle = new Array(20,20);  
// var size=21;
// let pascalTri = new Array(size).fill(null).map(item =>(new Array(size).fill(null))) 
// for(var i=0; i<size; i++){
//     pascalTri[i][0] = 1;
//     pascalTri[0][i] = 1;
// }

// for(var row=1; row<size; row++){
//     for(var column=1;column<size; column++){
//         pascalTri[row][column] =  pascalTri[row-1][column]+pascalTri[row][column-1]
//     }
// }
function fact(n, r = 1) {
    while (n > 0) r *= n--;
    return r;
}

function binomalCoef(n,k){
    let temp = n;
    n=n+k
    k=temp;
    return (fact(n)) / (fact(k) * fact(n-k))
}
console.log(parseInt(binomalCoef(20,20)));

//console.log(pascalTri[20][20]);