type Combinable = number | string;


function combine(n1: Combinable, n2: Combinable, resultConversion: 'as-number' | 'as-text') {
    let result
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString()
    }
    return result;
}

const combineNames = combine('A', 'B', 'as-text')
console.log(combineNames);