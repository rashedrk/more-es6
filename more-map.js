const numbers = [12,6,4,8];
const half = numbers.map(x => x/2);
const third = numbers.map(x => x/3);
// console.log(half);
// console.log(third);

const friends = ['Tom hanks', 'Tom kurse', 'Tom hank', 'Tom edison'];
const firstLatter = friends.map(friend => friend[0]);
// console.log(firstLatter);
const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength);

const products = [
    {id: 1, name: 'laptop', price: 84000},
    {id: 2, name: 'watch', price: 8000},
    {id: 3, name: 'mobile', price: 78000},
    {id: 4, name: 'tablet', price: 23000}
];

const items = products.map(product => product.name);
console.log(items);
const prices = products.map(product => product.price);
console.log(prices);