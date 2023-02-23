const student = {
    name: 'abul mal',
    age: 17,
    class: 'Ten',
    marks: {
        bangla : 50,
        physics: 74,
        chemistry : 80,
        math : 89
    }
};

const marks = student.marks;
const bangla = student.marks.bangla;
// const physics = student['marks']['physics'];
// const physics = student.marks['physics'];
const subject = 'physics';
const physics = student.marks[subject];
console.log(bangla);
console.log(physics);