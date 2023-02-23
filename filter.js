const numbers = [12,43,5,76,4,21,10,23,40];
const bigNums = numbers.filter(x => x > 20);
// console.log(bigNums);
const tiny = numbers.filter(x => x < 21);
// console.log(tiny);

const products = [
    {id: 1, name: 'laptop', price: 84000},
    {id: 2, name: 'watch', price: 8000},
    {id: 3, name: 'mobile', price: 78000},
    {id: 4, name: 'tablet', price: 23000}
];

const expensive = products.filter(product => product.price >= 78000);
console.log(expensive);
const overExpensive = products.filter(product => product.price > 100000);
console.log(overExpensive);