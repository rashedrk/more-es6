const numbers = [2,8,4,6,3];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// };
// console.log(output);

function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        // const doubled = number * 2;
        const doubled = doubleIt(number);
        output.push(doubled);
};
return output
}

// function doubleIt(number) {
    //     return number*2
    // }
    
    const doubleIt = num => num*2;

    const result = getDoubled(numbers);
    console.log(result);

// purpose:
// 1. get an Array
// 2. for every elements of the array do something
// 3. store the result in an array
// 4. return the result array 

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num*2)
console.log(makeDouble);
console.log(makeDoubleDirect);