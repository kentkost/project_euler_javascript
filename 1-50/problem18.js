var str = 
"\
75\n\
95 64\n\
17 47 82\n\
18 35 87 10\n\
20 04 82 47 65\n\
19 01 23 75 03 34\n\
88 02 77 73 07 63 67\n\
99 65 04 28 06 16 70 92\n\
41 41 26 56 83 40 80 70 33\n\
41 48 72 33 47 32 37 16 94 29\n\
53 71 44 65 25 43 91 52 97 51 14\n\
70 11 33 28 77 73 17 78 39 68 17 57\n\
91 71 52 38 17 14 91 43 58 50 27 29 48\n\
63 66 04 68 89 53 67 30 73 16 69 87 40 31\n\
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"

var temp = str.split("\n");
var tri =[];
for(let i=0; i < temp.length; i++){ //read triangle
    tri.push(temp[i].split(" "));
}

for(let i=0; i < tri.length; i++){//convert to ints
    for(let j=0; j<tri[i].length; j++){
        tri[i][j] = parseInt(tri[i][j]);
    }
}

for(let i=tri.length-1; i>0; i--){
    let order = highestNumbers(tri[i]);
    var positions = Array(order.length-1);
    for(let j=0; j<order.length; j++){
        let pos1 = order[j]-1;
        let pos2 = order[j];
        if(pos1 >=0 && positions[pos1] == undefined){
            tri[i-1][pos1] = tri[i-1][pos1] + tri[i][order[j]]
            positions[pos1] = 0;
        }
        if(pos2 <= tri[i-1].length-1 && positions[pos2] == undefined){
            tri[i-1][pos2] =  tri[i-1][pos2] + tri[i][order[j]]
            positions[pos2] = 0;
        }
    }
}
console.log(tri);

function highestNumbers(row){
    var temp = row.slice(0);
    let order = []
    for(let j=0; j<temp.length; j++){
        let high = 0;
        let highPos= -1;
        for(let i=0; i<temp.length; i++){
            if(temp[i] > high){
                high = temp[i];
                highPos =i;
            }
        }
        temp[highPos]=0;
        order.push(highPos);
    }
    return order;
}
