let keyStr ="";
let cipher ="";
let words = [];
var fs = require("fs")

String.prototype.replaceAll = function(oldStr, newStr){
    let temp1 = this.valueOf();
    let temp2 = this.valueOf();
    do{
        temp1 = temp2;
        temp2 = temp1.replace(oldStr, newStr);
    }while(temp1 != temp2);
    return temp2;
}

function incrementKey(key){
    let k= key.slice(0);
    for(let i=2; i>=0; i--){
        for(let j=k[i]; j<123; j++){
            if(k[i] == 122){
                if(i==0){
                    return "all keys tried";
                }
                k[i] =97;
                break;
            }else{
                k[i]+=1
                return k;
            }
        }
    }
}

// function readText(){ //Async
//     let path ="project_euler_javascript/51-100/p059_cipher.txt"
//     let str = "";
//     fs.readFile(path, (err, data) => {
//         if (err) throw err;
//         data = data.toString().split(",");
//         data.forEach( function(element, index, arr) {
//             let temp = parseInt(element,10).toString(2);
//             temp = padding(temp);
//             str+= temp;
//         });
//     });
//     return str;
// }
function readText(){
    // First I want to read the file
    let path ="project_euler_javascript/51-100/p059_cipher.txt"
    let res = []
    content = fs.readFileSync(path);
    content =content.toString().split(",");
    for(let i =0; i< content.length; i++){
        res.push(parseInt(content[i]));
    }
    return res;
}

function readWords() {
    // First I want to read the file
    let path ="project_euler_javascript/51-100/p042_words.txt"
    let res = []
    content = fs.readFileSync(path);
    content =content.toString().split(",");
    for(let i =0; i< content.length; i++){
        let temp = content[i].replaceAll("\"", "");
        res.push(temp);
    }
    return res;
}
//this gives us an idea of what the possible key can be. 80 is the most encrpted.
//this means that 80 is most likely "69"(E) or "101"(e), or space if space is included.
//so the key is most likely 
//could expand with letter probability analysis using the word list
// k = 80 xor 69  =21
// k = 80 xor 101 =53
// k = 80 xor 32  =112 //possibly even space
function preliminaryAnalysis(m){
    let message = m;
    let count = new Map([...new Set(message)].map(
        x => [x, message.filter(y => y === x).length]
    ));
    // sort by value. From high to low
    count = new Map([...count.entries()].sort((a, b) => b[1] - a[1]));
    return count;
}

//actual bruteforce without guessing.
function decipher(k){
    let keys = k;
    let keyIndex= 0;
    let decipherStr = "";
    let goNuts =false;
    for(let i=0; i<cipher.length; i++){
        let key = keys[keyIndex % 3];
        let cur = parseInt(cipher[i]); 
        decipherStr += String.fromCharCode(key^cur);
        keyIndex++;
    }
    let upperDeciphered = decipherStr.toUpperCase();
    let threshold = 0;
    for(let i=0; i<words.length; i++){
        if(words[i].length <5){
            continue;
        }
        if(upperDeciphered.indexOf(words[i]) >=0){
            threshold++;
        }
        if(threshold >2){ //2 words in text with over 5 characters. most likely a decrypted text;
            return decipherStr;
        }
    }

    return "";
}

function sumString(str){
    let s =str;
    let res = 0;
    for(let i=0; i<s.length; i++){
        res += s.charCodeAt(i);
    }
    return res;
}

//can be improved by implementing a guess method.
//where the key will start from a guess position.
//  say: 80 is the most occuring character then: 80 ^ key = 32(space)
//  therefore a good guess would be that one of he subkeys are 112. since 80^112=32
//Have guesses. [112, 97,97], [97,112,97], [97,97,112]. 
//Change the increment method to not increment the guess cell.
//Allow overflow in key now. And take note of start key. When it overflow to the startkey again it is done.
//if all guesses fail. then bruteforce.
function solution(){
    let key = [97,97,97];
    let str = "";
    cipher = readText();
    words = readWords();
    for(let i=0; i<Math.pow(26,3); i++){
        str = decipher(key);
        if(str.length > 0){
            console.log(key);
            console.log(str);
            console.log(sumString(str));
            return 0;
        }
        key = incrementKey(key);
        if(typeof key === 'string'){
            break;
            
        }
    }
}

solution();
//aprox 3 seconds