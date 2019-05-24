Array.prototype.add = function(a){
    let temp = this.slice(0);
    for(let cell=0; cell<temp.length; cell++){
        temp[cell] =temp[cell] + a[cell];
    }
    return temp;
};
var primes = []
function generateSpiral(len){
    let steps=1;
    let dirs = [[0,1],[-1,0],[0,-1],[1,0]] //right, up, left, down
    let dir = 0 //current direction;
    let length = len;
    let coor = [Math.floor(length/2),Math.floor(length/2)];
    let count =2;
    let matrix = new Array(length);
    
    //initiate matrix
    for(let i=0; i<matrix.length; i++){
        matrix[i] = new Array(length);
    }
    
    //init center
    matrix[coor[0]][coor[1]]=count-1;
    while(true){
        for(let i=0; i<2; i++){ //walk in two directions s amount of steps after which step size increase
            for(let s=0; s<steps; s++){
                coor=coor.add(dirs[dir]);
                matrix[coor[0]][coor[1]] = count
                count++;
            }
            dir+=1;
            if(dir >3){
                dir=0;
            }
        }
        steps++;
        if(steps==length){//last step goes outside so have to restrict and fill it like so
            for(col=1; col <matrix[length-1].length; col++){
                matrix[length-1][col]=count;
                count++;
            }
            break;
        }
    }
    //console.log(matrix);
    return matrix;
}

function primeGenerator(max){
    let search = []
    let maxNumber = max;
    for(let i=2; i<maxNumber; i++){
        if(search[i]==undefined){
            primes.push(i);
            for(let j=i+i; j<maxNumber; j+=i){
                search[j] = j;
            }
        }
    }
    return primes;
}

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

function getDiagonalValues(mat){
    let matrix = mat;
    let len = mat.length;
    let values = new Set();
    for(let r=0; r<len; r++){
        for(let c=0; c<len; c++){
            if(r+c==len-1){
                values.add(mat[r][c]);
            }
            if(r==c){
                values.add(mat[r][c]);
            }
        }
    }
    return values;
}

function ratioOfPrimes(values, primes){
    let len =values.size;
    let numPrimes = 0.0;
    values.forEach(function(v1,v2, set){
        if(binarySearch(primes, v1)!= -1){
            numPrimes++;
        }
    });
    return numPrimes/len*100;
}

//Binary search?...would still take too long
//could reduce by only computing the diagonals when creating the matrix.
//and then not create the matrix at all
//one loop of steps is a diagonal.(except the first. But just remove it).
//so take steps and add it to count and then add to array
function solution(){
    primes = primeGenerator(10000000);
    for(let len=9; len<30000; len+=2){
        let mat = generateSpiral(len);
        let values = getDiagonalValues(mat);
        let ratio = ratioOfPrimes(values, primes);
        console.log("len: "+len+" ratio: "+ratio);
        if(ratio < 10.0){
            console.log(len);
            break;
        }
    }
}

solution();