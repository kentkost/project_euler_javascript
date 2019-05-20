//Miss me with that shit.
//I aint making anotha date library. That shit is dumb as hell.
var d = new Date(1901,0,1)
var sundays =0;
var target = new Date(2000,11,31);

//find first sunday
while(d.getDay() != 0){
    d.setDate(d.getDate() +1);
}
console.log(d.toString());

while((d - target) <=0){
    if(d.getDate() ==1){
        sundays++;
    }
    d.setDate(d.getDate() +7);
}
console.log(d.toString());
console.log(sundays);