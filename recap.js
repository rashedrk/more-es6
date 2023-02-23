// 1. var let const 
// break up with var 
const numbers = [12,55,32,442];
let salary = 450;
salary = 455;

// 2. default parameter 
function calculateSalary(salary, tax=0.25, bonus=0) {
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total
}

// 3. template string 
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000,0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`;

// 4. arrow function 
const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary -salary*tax + bonus;

// 5. spread 
const ages = [23,43,12,33,32];
const newAges = [...ages, 11,10,34];

// 6. destructuring 
const {x, y, z, ...c} = {x:12, y:32, z:15, name: 'shakib', age: '20'};
const [a, b, ...r] = [12,32,45,6];