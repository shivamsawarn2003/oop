// inheritance refers to the mechanism by which a class can inherit properties and methods from another class

 // class from which properties are innherited are called as base class.

 //and class that inherit properties from base class is called as derived class 

 //derived class can be base class for other derived class that inherit properties from it this is called as multi level inheritance.

// do not repeat yourself principle can be followed by using inheritance

// Example 
class employee{
    constructor(name,age,salary){
        this.empname=name;
        this.empage=age;
        this.empsalary=salary;

        console.log("constructor : employee");
    }
    info(){
        document.write(`<h3>Employee Class</h3>
        Name:${this.empname}<br>
        Age:${this.empage}<br>
        Salary:${this.empsalary}<br>`)
    }
}
class manager extends employee{//manager class is ineriting all methods from employee class

info(){
    let travellingAllowance=10000;
let phoneAllowance=3000;
let totalsalary=this.empsalary+travellingAllowance+phoneAllowance;
    document.write(`<h3>Manager Class</h3>
    Name:${this.empname}<br>
    Age:${this.empage}<br>
    Salary:${totalsalary}<br>`)
}

}
let a=new manager("TechTimes",25,20000);
let b=new employee("Youtube",20,10000);
a.info();
b.info();
