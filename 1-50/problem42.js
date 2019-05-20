var fs = require("fs");
var readline = require("readline");
var stream = require("stream");

var instream = fs.createReadStream("p042_words.txt");
var outStream = new stream();
var rl = readline.createInterface(instream, outStream);

//linecount
var lineCount=0;
var words = [];
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
    let word = line.split(',');
    words =words.concat(word);
});

rl.on('close', function(){
    let triangleWords = 0;
    for(var i=0; i<words.length; i++){
        let temp = words[i].replaceAll("\"", "");
        let score = 0;
        for(let j=0; j<temp.length; j++){
            score += temp.charCodeAt(j)-64;
        }
        for(n=1; n<= score; n++){ //Math.sqrt(score)
            let temp = 0.5*n*(n+1);
            if(temp ===score){
                console.log(words[i]);
                triangleWords++;
                break;
            }
            else if(temp > score){
                break;
            }
        }
    }
    //console.log(words[0]);
    console.log(triangleWords);
});
