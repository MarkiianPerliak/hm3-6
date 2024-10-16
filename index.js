// 1 start.
let b = 1;

while (b <= 10) {
    console.log(b)
    b = b + 1
}


// 1 end.

// 2 start.
for (let u = 2; u <= 20; u++) {
    if (u % 2 !== 0) {
        continue;
    }
    console.log(u)
}


// 2 end.

// 3start
for (let j = 7; j <= 70; j = j + 7) {
    console.log(j)
}
// 3 end.

// 4 start.
let massive = [1, 2, 3, 4, 5];
let i = 0;

while (i < massive.length) {
    console.log(massive[i]);
    i++;
}
// 4 end.

// 5 start.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let m = 0; m < numbers.length; m++) {
    if (numbers[m] === 7) {
        break;
    }
    console.log(numbers[m]);
}
// 5 end.

// 6 start.
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 9;

for (let c = 0; c < numbers1.length; c++) {
    if (numbers1[c] >= n) {
        break;
    }
    console.log(numbers1[c]);
}

// 6 end.

// 7 start.
let num = 1;

while (num <= 20) {
    if (num % 3 === 0) {
        num++;
        continue;
    }
    console.log(num);
    num++;
}

// 7 end.