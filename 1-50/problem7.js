/*var prime = 2;
var num =1;

for(prime=2; prime < 100; prime++){
    var flag =false;
    for(var i =2; i<=prime/2; i++){
        if(prime % i == 0){
            flag = true;
            break;
        }
    }
    if(!flag){
        console.log("%d is prime number %d", prime, num);
        num++;
    }
}*/

var prime = 3;
var num =1;
while(true){
    var flag =false;
    for(var i =2; i<=prime/2; i++){
        if(prime % i == 0){
            flag = true;
            break;
        }
    }
    if(!flag){
        //console.log("%d is prime number %d", prime, ++num);
        num++;
        if(num == 10001){
            break;
        }
    }
    prime+=2;
}
console.log("%d is prime number %d", prime, num);