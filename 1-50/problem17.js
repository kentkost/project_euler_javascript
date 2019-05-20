function singleNumber(num){
    switch(num){
        case '0':
            return ''
        case '1':
            return 'one'
        case '2':
            return 'two'
        case '3':
            return "three"
        case '6':
            return "six"
        case '4':
            return "four"
        case '5':
            return "five"
        case '9':
            return "nine"
        case '7':
            return "seven"
        case '8':
            return "eight"
    }
}

function tens(num){
    switch(num){
        case '2':
            return "twen"
        case '3':
            return "thir"
        case '4':
            return "for"
        case '5':
            return "fif"
        case '6':
            return "six"
        case '7':
            return "seven"
        case '8':
            return "eigh"; 
        case '9':
            return "nine";
        default:
            return "fuck";
    }
}

var sum = "onethousand".length;

String.prototype.padZero= function(len, c){
    var s= '', c= c || '0', len= (len || 2)-this.length;
    while(s.length<len) s+= c;
    return s+this;
}
Number.prototype.padZero= function(len, c){
    return String(this).padZero(len,c);
}
function numToString(num){
    var str = num.toString();
    str = str.padZero(3);
    var con ="";
    //console.log(str[0]+str[1]+str[2]);
    if(parseInt(str[0],10)>0){ //hundreds
        con += singleNumber(str[0])+"hundred";
        if(parseInt(str[1],10)>0 || parseInt(str[2],10)>0 ){
            con+="and";
        }
    }
    if(parseInt(str[1],10)>1){ //tens
        con += tens(str[1])+"ty";
        con +=singleNumber(str[2]);
    }
    if(parseInt(str[1],10)==1 && (parseInt(str[2],10) >=3 && parseInt(str[2],10) != 4)){ //teens
        con += tens(str[2])+"teen";
    }
    if(parseInt(str[1],10)==1 && (parseInt(str[2],10)<3 || parseInt(str[2],10) == 4)){ //special case
        if(parseInt(str[2],10) == 2){
            con +="twelve"
        }
        else if(parseInt(str[2],10) == 1){
            con+="eleven"
        }
        else if(parseInt(str[2],10) == 0){
            con+="ten"
        }
        else if(parseInt(str[2],10) == 4){
            con+="fourteen"
        }
    }
    if(parseInt(str[1],10)==0 && parseInt(str[2],10) > 0){ //singles
        con +=singleNumber(str[2]);
    }
    
    return con;
}

// console.log(numToString(342));
// console.log(numToString(342).length);
for(var i=1; i<1000; i++){
    console.log(numToString(i))
    sum += numToString(i).length;
}
console.log(sum);
//21124