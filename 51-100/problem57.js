//3/2->7/5->17/12->41->29
//new denominator = denomnator+nominator
//new nominator = (nominator*2)+previousNominator

var bigInt = require("big-integer");
let nom=bigInt("3"), denom=bigInt("2"), prevNom=bigInt("1"), count=0;


for(let i=0; i<1000; i++){
    denom =denom.plus(nom)
    let tmpNewNom=nom.multiply(2).plus(prevNom)
    // console.log(newNom+"/"+denom+"\t:"+prevNom);
    prevNom = nom; //a bit backwards
    nom=tmpNewNom;
    if(nom.toString().length> denom.toString().length){
        count++;
    }
}
console.log(count);