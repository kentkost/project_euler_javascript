//3/2->7/5->17/12->41->29
//new denominator = denomnator+nominator
//new nominator = (nominator*2)+previousNominator

var bigInt = require("big-integer");
let nom=bigInt("3"), denom=bigInt("2"), prevNom=bigInt("1"), count=0;


for(let i=0; i<1000; i++){
    let newDenom =denom.plus(prevNom)
    let newNom=nom.multiply(2).plus(denom)
    console.log(newNom+"/"+newDenom);
    if(newNom.toString().length > newDenom.toString().length){
        count++;
    }
    nom = newNom;
    denom = newDenom;
    prevNom = nom;
}
console.log(count/2);