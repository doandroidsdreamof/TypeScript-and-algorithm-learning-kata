// Find the odd int //
// based on code wars challenge //
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript //

function findOdd(A: any[]) {
    let hash: any = {};

    A.forEach((current) => {
        if (hash[current] == hash[current]) {
            hash[current] = hash[current] + 1;
        }
        if (hash[current] != hash[current]) {
            hash[current] = 1;
        }
    });
    for (let x in hash) {
        if (hash[x] % 2 === 0) {
            delete hash[x];
        }

    }
    let result: any = Object.keys(hash);
    return parseInt(result);
}

