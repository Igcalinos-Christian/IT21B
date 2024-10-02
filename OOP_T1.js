class StudentInfo{
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation){
        this.#name = name;
        this.#age = age;
        this.#occupation =  occupation;
    }

    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age; 
    }
    getOccupation(){
        return this.#occupation;
    }
}

class Major extends StudentInfo{
    #major;

    constructor(name, age, occupation, major){
        super(name, age, occupation);
        this.#major = major;
    }

    StuInfo(){
        return `<b>Name: </b> ${this.getName()} <br>
        <b>Age: </b> ${this.getAge()} <br>
        <b>Occupation: </b> ${this.getOccupation()} <br>
        <b>Major: </b> ${this.#major}`;
    }

    Name(){
        return `Name: ${this.getName()}`;
    }
    Age(){
        return `Age: ${this.getAge()}`;
    }
    Occupation(){
        return `Occupation: ${this.getOccupation()}`;
    }
    Major(){
        return `Major: ${this.#major}`;
    }

}

const sInfo = new Major('Hacube', 20, 'Youtuber', 'Batchelor in Science and Information Technology');
document.getElementById('sInfo').innerHTML = sInfo.StuInfo();
const nAme = sInfo.Name();
const age = sInfo.Age();
const occupation = sInfo.Occupation();
const major = sInfo.Major();

console.log(nAme);
console.log(age);
console.log(occupation);;
console.log(major);