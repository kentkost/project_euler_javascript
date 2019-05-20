var fs = require("fs");
var readline = require("readline");
var stream = require("stream");

var instream = fs.createReadStream("p022_names.txt");
var outStream = new stream();
var rl = readline.createInterface(instream, outStream);

//linecount
var lineCount=0;
var names = [];
var scores =[];
String.prototype.replaceAll = function(oldStr, newStr){
    let temp1 = this.valueOf();
    let temp2 = this.valueOf();
    do{
        temp1 = temp2;
        temp2 = temp1.replace(oldStr, newStr);
    }while(temp1 != temp2);
    return temp2;
}

rl.on('line', function(line){
    lineCount++;
    let name = line.split(',');
    names =names.concat(name);
});

rl.on('close', function(){
    names.sort();
    for(var i=0; i<names.length; i++){
        let temp = names[i].replaceAll("\"", "");
        let score = 0;
        for(let j=0; j<temp.length; j++){
            score += temp.charCodeAt(j)-64;
        }
        scores.push(score * (i+1)); //of by one
    }
    
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)

    console.log(arrSum(scores));
});