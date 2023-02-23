const numbers = [1, 2, 3, 4, 5];
// .reduce(accumulator function, initial value)
const total = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// const total = numbers.reduce((previousValue, currentValue) =>{
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue
// },0);
console.log(total);