const users = [
    {id: 1, name: 'abul', job: 'doctor'}
];

// console.log(users[0].name);
const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'}
    ]
};
// console.log(data.data[1].name);

const user = {
    id: 5001,
    name: 'Tomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
};
// const userFloor = user.address.street.second;
// optional chaining 
const userFloor = user.address?.stret.second;
console.log(userFloor);