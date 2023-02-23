//class in js is syntactic sugar
class Instructor {
    name;
    designation = 'Web instructor';
    team = 'web team';
    location;
    startSupportSeason(time){
        console.log(`start support season at ${time}`);
    };
    makeQuiz(number){
        console.log(`make quiz for module ${number}`);
    };
    // constructor(name, location){
    //     this.name = name;
    //     this.location = location;
    // };
    constructor(x, y) {
        this.name = x;
        this.location = y;
    }
};

const amir = new Instructor('amir', 'dhaka');
console.log(amir);
const bijoy = new Instructor('bijoy', 'bogura');
console.log(bijoy);
bijoy.startSupportSeason('9:00pm');
