//see problem 13 and 16
function reverseString(str) {
    return str.split("").reverse().join("");
}

function multiply(num1, num2){
    let addingArrays = [];
    num1 = reverseString(num1);
    num2 = reverseString(num2);
    for(let i =0; i<num1.length;i++){//72
        let rest = 0;
        let cellVal = 0;
        let addArray = []
        //add padding =i
        for(let j=0; j<num2.length; j++){// 51
            let temp = parseInt(num1[i])* parseInt(num2[j]);
            temp+=rest;
            rest=0;
            if(temp > 9){
                cellVal = temp % 10;
                rest = Math.floor(temp / 10);
            }else{
                cellVal=temp;
            }
            addArray.push(cellVal);
            if(j==num2.length-1 && rest >0){
                addArray.push(rest);
                rest = 0;
            }
        }
        //padding
        for(let k=0; k<i; k++){
            addArray.unshift(0);
        }
        //addingArrays.push(addArray.reverse()); //don't reverse
        addingArrays.push(addArray);
    }
    let sum = [0]
    for(var i=0; i<addingArrays.length; i++){
        var temp = addingArrays[i];
        for(var j=0; j<temp.length; j++){
            sum = addToArray(sum,parseInt(temp[j],10),j)
        }
    }
    sum = reverseString(sum.join(""));
    return sum;
}

function addToArray(sum,num, p){
    let pos = p;
    let rest = num;
    do{
        if(sum[pos] == undefined){
            sum[pos] = 0;
        }
        sum[pos] += rest;
        rest=0;
        if(sum[pos]>9){
            rest = 1;
            sum[pos] = sum[pos]-10;
            pos++;
        }
    }while(rest != 0)
    return sum;
}

//factorial
let fact = "1";
for(let i=2; i<=100; i++){
    fact = multiply(fact, i.toString());
}
console.log(fact)
//sum of string
let result =0;
for(let i=0; i<fact.length; i++){
    result += parseInt(fact[i]);
}
console.log(result);