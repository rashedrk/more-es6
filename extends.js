// prototypal inheritance

class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    feedback(){
        console.log(`${this.name}, Thank you for your feedback`);
    };
};
class Instructor extends TeamMember {
    designation = 'Web instructor';
    team = 'web team';
    constructor(name, location){
        super(name,location);
    };
    startSupportSeason(time){
        console.log(`start support season at ${time}`);
    };
    makeQuiz(number){
        console.log(`make quiz for module ${number}`);
    };
    
};
class Developer extends TeamMember {
    designation = 'Software Developer';
    team = 'Developer team';
    tech;
    constructor(name, location, tech){
        super(name,location)
        this.tech = tech;
    };

    develope(feature){
        console.log(`please develope the ${feature}`);
    };
    release(version){
        console.log(`please release the ${version}`);
    };
};
class JobPlacement extends TeamMember {
    designation = 'Job placement commandos';
    team = 'Job Placement team';
    region;
    constructor(name, location, region){
        super(name,location)
        this.region = region;
    };

    provideResume(resume){
        console.log(`send the ${resume}`);
    };
    prepareStudent(s_name){
        console.log(`prepare the student: ${s_name}`);
    };
};

const alia = new Developer('alia baht', 'kolkata', 'react');
console.log(alia);
alia.feedback();