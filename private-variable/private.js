function createAnimal(name, job) {
    // "Private" variables here
    let _name = name;
    let _job = job;

    // Public variables here
    return {
        // Getter Methods
        getName() {
            return _name;
        },
        getJob() {
            return _job;
        },
        // Setter Methods
        setName(newName) {
            _name = newName;
        },
        setJob(newJob) {
            _job = newJob;
        }
    };
}

const presto = createAnimal('Presto', 'Digger');
const fluffykins = createAnimal('Fluffykins', 'Jumper');


console.log(presto._name); 
console.log(presto._job); 
console.log(fluffykins._name); 
console.log(fluffykins._job); 


console.log(presto.getName()); 
console.log(presto.getJob()); 
console.log(fluffykins.getName()); 
console.log(fluffykins.getJob()); 


presto.setName('Quick');
presto.setJob('Bone Finder');
fluffykins.setName('Mittens');
fluffykins.setJob('Fish Eater');

console.log(presto.getName()); 
console.log(presto.getJob()); 
console.log(fluffykins.getName()); 
console.log(fluffykins.getJob()); 