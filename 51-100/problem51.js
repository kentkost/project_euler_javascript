/*
Preliminary knowledge:

Keywords: digit sum, 

We know we have to repeat at least one of either 0, 1, or 2. Since we are looking for an 8-member family.
So we run the scenarios where we repeat a number 1,2,3,4,5 times.
Each column is the number of times a number is repeated
__1_2_3__4_5
0|4 4 10 4 4
1|3 3 0  3 3
2|3 3 0  3 3

Example of how the column for 2 get calculated.
(repeats*number_that_gets_repeated) % 3 = (0 if divisible by 3)
(2*0) % 3: 0
(2*1) % 3: 2
(2*2) % 3: 1
(2*3) % 3: 0
(2*4) % 3: 2
(2*5) % 3: 1
(2*6) % 3: 0
(2*7) % 3: 2
(2*8) % 3: 1
(2*9) % 3: 0

From this we can see for column 2 has 4 numbers(0,3,6, and 9), that are divisible by 3 when repeated 2 times.
And then 3 numbers(1,4,7) that leaves a remainder of 2 and are therefore not divisble by 3.
and another 3 numbers(2,5,8) that leaves a remainder of 1 and are therefore also not divisible by 3.

What can we take away from the table?
-This means we can only have 3 repeating digits. The reason for this is that at least one from any of the other repeating numbers is going
to be divisible by 3. And then we wont be able to have an 8-member family.
In other the table tells us that 4 of those numbers are going to be divisible by 3.

Summary:
- We know the last digit will never changed and will remain the same since all primes >10 end with either 3, 7, or 9.
- We need to replace 3 numbers.
- We therefore need a prime number with 3 repeating digits excluding trailing digit.
*/

function countOccurences(str){
    let s = str;
    let occur = {}

    //Inititialize for digits
    for(let i=0;i <=9; i++){
        occur[i.toString()] = 0;
    }
    //count occurences. Remmeber trailing digit doesn't count since it wont be replaced
    for(let i=0; i<s.length-1;i++){
        occur[s[i]] +=1;
    }

    //find largest
    let occurences =0;
    let k = "a";
    for (var key in occur) {
        if(occurences < occur[key]){
            occurences = occur[key];
            k = key;
        }
    }
    return [occurences, k];
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


function binarySearch (list, value) {
    // initial values for start, middle and end
    let start = 0
    let stop = list.length - 1
    let middle = Math.floor((start + stop) / 2)
  
    // While the middle is not what we're looking for and the list does not have a single item
    while (list[middle] !== value && start < stop) {
      if (value < list[middle]) {
        stop = middle - 1
      } else {
        start = middle + 1
      }
  
      // recalculate middle on every iteration
      middle = Math.floor((start + stop) / 2)
    }
  
    // if the current middle item is what we're looking for return it's index, else return -1
    return (list[middle] !== value) ? -1 : middle
  }


function createFamily(str, rep){
    let char = rep;
    let s = str;
    let end = s[s.length-1];
    let family = []
    s = s.substr(0,s.length-1);
    for(let i=0; i<=9; i++){
        let trick = ""
        if(i==0 && s[0]==char){
            continue;
        }
        let tmp = s.replaceAll(char, i.toString());
        tmp =trick + tmp + end;
        family.push(tmp);
    }
    return family;
}

var primes = []
var search = []

var maxNumber = 999999
for(var i=2; i<maxNumber; i++){
    if(search[i]==undefined){
        primes.push(i);
        for(var j=i+i; j<maxNumber; j+=i){
            search[j] = j;
        }
    }
}
for(let i=0; i<primes.length; i++){
    let prime = primes[i].toString();
    let tmp = countOccurences(prime);
    if(tmp[0] >=3){
        let fam = createFamily(prime, tmp[1].toString());
        let members = 0;
        for(let m=0; m<fam.length; m++){
            if(binarySearch(primes,parseInt(fam[m])) !=-1){
                members++;
            }
        }
        if(members >7){
            console.log(fam[0]);
            break;
        }
    }else{
        continue;
    }
}


