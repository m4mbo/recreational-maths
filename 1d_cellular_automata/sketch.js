let n = 201;
let cells = getCells(n);
let w = 5;
let y = 0;

let rule = 90;
let ruleSet = getRuleSet(rule);

function setup() {
    console.log(ruleSet);
    createCanvas(w*n, w*n);
}

function draw() {
    let nextCells = cells;
    cells.forEach((cell, i) => {
        let x = i*w;
        stroke(0);
        fill(cell*255);
        square(x, y, w);
        if (i == nextCells.length) nextCells[i] = getNextGen(cells[i-1], cells[i], cells[0]);
        else if (i == 0) nextCells[i] = getNextGen(cells[cells.length-1], cells[i], cells[i+1]);
        else nextCells[i] = getNextGen(cells[i-1], cells[i], cells[i+1]);
    });
    cells = nextCells;
    y += w;
}

function getCells(n) {
    let cells = [];
    for (let i = 0; i < n; i++) {
        if (i == (n-1) / 2) cells.push(0)
        else cells.push(1);
    }
    return cells;
}

function getNextGen(left, center, right) {
    let state = "" + left + center + right;

    let index = parseInt(state, 2);

    return ruleSet[index];
}

function getRuleSet(rule) {
    let bin = rule.toString(2).padStart(8, "0");
    let arr = bin.split('');
    return arr.map(x => x = parseInt(x)).reverse();
}


