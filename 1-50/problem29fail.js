let distinct = {}
for(let a=2; a<=100; a++){
    for(let b=2; b<=100; b++){
        distinct[power(a,b)] = 0;
    }
}

console.log(Object.keys(distinct).length);

//see problem 13 and 16
function reverseString(str) {
    return str.split("").reverse().join("");
}

function power(n1, n2){
    let res = n1.toString();
    for(let i=0; i<n2; i++){
        res = multiply(res, n1.toString());
    }
    return res;
}

function multiply(num1, num2){
    let addingArrays = [];
    num1 = reverseString(num1);
    num2 = reverseString(num2);
    for(let i =0; i<num1.length;i++){
        let rest = 0;
        let cellVal = 0;
        let addArray = []

        for(let j=0; j<num2.length; j++){
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