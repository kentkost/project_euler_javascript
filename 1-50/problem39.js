let ps = {}

for(let i=0; i<=1000; i++){
    ps[i] = [];
}

//creates duplicates. Because a and b can swap.
for(let c =998; c>=3; c--){
    for(let a =c-1; a>=1; a--){
        let b = Math.sqrt( Math.pow(c,2) - Math.pow(a,2) )
        if(Number.isInteger(b)){
            try{
                ps[a+b+c].push([a,b,c]);
            }catch(err){
                //console.log("a:"+a+" b:"+b+" c:"+c);
            }
        }
    }
}
let size = 0;
let result = -1;
for (var key in ps) {
    // check if the property/key is defined in the object itself, not in parent
    if (ps.hasOwnProperty(key)) {           
        //console.log(key, ps[key]);
        let tmp = ps[key].length;
        if(tmp > size){
            size = tmp;
            result = key;
        }
    }
}
console.log(result);