function setup() {
    createCanvas(800, 800);
    background(0);
    for (let i = 1; i < 10000; i++) { 
        let sequence = [];
        let n = i;
        do {
            sequence.push(n);
            n = collatz(n);
        } while (n != 1);
        sequence.push(-1);
        sequence.reverse(); 

        let len = 10;
        let angle = 0.12;
        resetMatrix();
        translate(0, height/2-50);
        stroke(0, 180, 0, 4);
        for (let j = 0; j < sequence.length; j++) {
            let value = sequence[j];
            if (value % 2 == 0) {
                rotate(angle);
            } else {
                rotate(-angle);
            }
            strokeWeight(2);
            fill(0, 255, 0, 2)
            circle(1, 5, len);
            translate(len, 0);
        }
    }
}
  
function collatz(n) {
    // even
    if (n % 2 == 0) {
        return n / 2;
        // odd
    } else {
        return (n * 3 + 1)/2;
    }
}