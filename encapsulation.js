//Encapsulation  restricts direct access to some of an object's components, which helps to prevent unintended interference and misuse of the data.

//wrapping up variables and methods in one single unit
//use setter for setting up variables and getter methods to get that data
class Students{
    constructor(){
        let name;
        let marks;

    }
    setName(name){
        this.name=name;

    }

    getName(){
        return this.name;
    }
    setMarks(marks){
        this.marks=marks;


    }

    getMarks(){
        return this.marks;
    }
}
const student1=new Students();
student1.setName("Shiva");
student1.setMarks(70);
console.log(student1.getName()+" "+student1.getMarks());