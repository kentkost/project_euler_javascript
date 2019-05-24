// 1: High Card
// 2: One pair
// 3: Two pairs
// 4: Three of a kind
// 5: Straight
// 6: Flush
// 7: Full house
// 8: Four of a kind
// 9: Straight flush // same as 9. since higher straight will win
// 9: Royal flush
function compareNumber(a,b){
    let nums = [a.charAt(0), b.charAt(0)];
    for(let i=0; i<nums.length; i++){
        nums[i] = cardValue(nums[i][0]);
    }
    if(nums[0] < nums[1]){
        return 1;
    }
    else if(nums[0] > nums[1]){
        return -1
    }
    return 0;
}

function solution(){ 
    const fs = require('fs') 
    let path ="project_euler_javascript/51-100/p054_poker.txt"
    
    let p1Wins =0;
    let p2Wins =0;
    let draws =0;
    require('fs').readFileSync(path, 'utf-8').split(/\r?\n/).forEach(function(line){
        if(line.length !== 0){
            let winner  = readPlay(line);
            if(winner === 1){
                p1Wins +=1;
            }else if(winner ===2){
                p2Wins +=1;
            }else{
                draws+=1;
            }
        }
    })
    console.log("p1: "+p1Wins+"\np2: "+p2Wins+"\ndraws: "+draws+"\ntotal: "+(p1Wins+p2Wins+draws));
}

function readPlay(s){
    let show = s;
    let p1, p2;
    p1 = show.substr(0, show.length/2).split(" ");
    h1 = handRank(p1);
    p1 =p1.sort(compareNumber)
    p2 = show.substr(show.length/2+1).split(" ");
    h2 = handRank(p2);
    p2 = p2.sort(compareNumber)
    return winner(h1,h2);
}

function winner(hand1, hand2){
    if(hand1.rank > hand2.rank){
        return 1;
    }
    else if(hand1.rank < hand2.rank){
        return 2;
    }
    else{
        let h1=hand1.hand;
        let h2=hand2.hand;
        for(let i=0; i<h1.length; i++){
            if(h1[i] > h2[i]){
                return 1;
            }
            else if(h1[i] < h2[i]){
                return 2;
            }
        }
    }
    return 0;
}

function cardValue(card){
    if(card ==="T"){
        return 10;
    }
    else if(card ==="J"){
        return  11
    }
    else if(card==="Q"){
        return 12;
    }
    else if(card==="K"){
        return 13;
    }
    else if(card==="A"){
        return 14;
    }
    else{
        return parseInt(card);
    }
}
function handRank(hand){
    let h = hand;
    //sortfrom high to low because if hand rank is equal the have to see which one has the highest card.
    h = h.sort(compareNumber)
    let rank = handAnalyzer(h);
    
    let straight =isStraight(h);
    if(rank.rank < straight.rank){
        rank = straight;
    }
    
    let flush = isFlush(h);
    if(rank.rank == 5 && flush.rank ==6){
        rank.rank = 9;
    }else if(flush.rank > rank.rank){
        rank = flush;
    }
    return rank;
}


function isStraight(hand){
    //cards sortest from high -> low
    let order = [];
    let h = hand;
    let check = []
    for(let i=0; i<h.length; i++){
        order.push(cardValue(h[i][0]));
    }
    check.push(order);
    //there's an ACe check forward and backward
    if(order[0] == 14){
        let aceEnd = order.slice(1);
        aceEnd.push(1);
        check.push(aceEnd);
    }
    for(let i=0; i<check.length; i++){
        let tmp = consecutiveSequential(check[i]);
        if(tmp){
            return {"hand":check[i], "rank": 5};
        }
    }
    //No straight
    return {"hand":h, "rank":1};
}

function consecutiveSequential(a){
    let o = a.slice(0);
    let num = o.shift();
    while(o.length != 0){
        let temp = o.shift();
        if(num !== temp+1){
            return false;
        }
        num = temp
    }
    return true;
}

function isFlush(hand){
    let h = hand.slice(0);
    for(let i=1; i<h.length; i++){
        if(h[0][1] !== h[i][1]){
            return {"hand":h, "rank": 1}; //NOTHING!
        }
    }
    let order = []
    for(let i=0; i<h.length; i++){
        order.push(cardValue(h[i][0]));
    }
    return {"hand":order, "rank": 6};
}

//returns a hand that isn't straight or flush.
function handAnalyzer(hand){
    let h = hand.slice(0);
    let order = [];
    let ha = []
    let rank = 1
    for(let i=0; i<h.length; i++){
        order.push(cardValue(h[i][0]));
    }
    let aCount = new Map([...new Set(order)].map(
        x => [x, order.filter(y => y === x).length]
    ));

    // sort by value. From high to low
    aCount = new Map([...aCount.entries()].sort((a, b) => b[1] - a[1]));
    for (const key of aCount.keys()) {
        let tmp = aCount.get(key)
        for(let i=0; i<tmp;i++){ //can't just String.repeat because ACE,KING,QUEEN,JACK, TEN
            ha.push( key);
        }
        if(tmp == 4){
            rank = 8
        }
        else if(tmp == 3){
            rank = 4
        }
        else if(tmp == 2){
            if(rank == 4){
                rank = 7;
            }else if(rank == 2){
                rank =3;
            }
            else{
                rank = 2
            }
        }
    }
    return {"hand":ha, "rank": rank}
}

function rankToString(rank){
    switch(rank){
        case 1:
            return "High Card";
        case 2:
            return "One pair";
        case 3:
            return "Two pair";
        case 4:
            return "Three of a kind";
        case 5:
            return "Straight";
        case 6:
            return "Flush";
        case 7:
            return "Full house"
        case 8:
            return "Four of kind"
        case 9:
            return "Straight Flush";
        default:
            return "No hand?"
    }
}

solution();