const numbers = [12,43,5,76,4,21,10,23,40];
const fives = numbers.find( num => num % 5 === 0);
console.log(fives);
const allFives = numbers.filter(num => num % 5 === 0);
console.log(allFives);

const products = [
    {id: 1, name: 'laptop', price: 84000},
    {id: 2, name: 'watch', price: 8000},
    {id: 3, name: 'mobile', price: 78000},
    {id: 4, name: 'tablet', price: 23000}
];

const cheap = products.find(product => product.price < 25000);
console.log(cheap);