let largest = 0;

for(let i=1; i<23456; i++){ //random upper bound
    let tmp = i.toString(10);
    let mul =1;
    let con = [];
    let flag = false;
    // console.log(i +" : "+tmp.length)
    while(tmp.length <10){
        con.push((i*mul).toString(10));
        mul++;
        tmp = con.join("");
        if(!valid(tmp)){
            break;
        }
        // console.log(i +" : "+tmp.length)
        if(verify(con)){
            flag = true;
            break;
        }
    }
    if(largest < parseInt(tmp) && flag){
        largest = parseInt(tmp);
    }
}

console.log(largest);

function verify(numbers){
    str = numbers.join("").split("").sort().join("");
    if(str === "123456789"){
        return true;
    }
    return false;
}

function valid(num){
    str = num.toString().split("").sort();
    let unique = 'a';
    if(str.indexOf("0") != -1){
        return false;
    }
    for(let i =0; i< str.length; i++){
        if(str[i] != unique){
            unique = str[i];
        }else if(str[i] == unique){
            return false;
        }
    }
    return true;
}