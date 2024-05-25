//Static class methods are defined on the class itself.
//You cannot call a static method on an object, only on an object class.
//accessing static properties and methods
/* class config{
static dbUser="username";
static dbPassword="secret";
static apiToken="abcd";


}

console.log(config.dbUser); */

/*static method
Math.random();
Object.hasOwnProperty();*/

/* class User{
    static id=1;
    constructor(name,age,income){
        this.name=name;
        this.age=age;
        this.income=income;
        this.id=User.id;
    } */
//static functions/methods
/* static compareByAge(user1,user2){
    return user1.age-user2.age
}
static compareByIncome(user1,user2){
    return user1.income-user2.income
} 
}



//sort the users by their age
const user1=new User("Shiva",20,5000);
const user2=new User("John",40,1000);
const user3=new User("Jane",30,7000);

 const users=[user1,user2,user3];
users.sort(User.compareByAge); 
users.sort(User.compareByIncome); 
console.log(user1,user2,user3);*/

//If you want to use the myCar object inside the static method, you can send it as a parameter:
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  const myCar = new Car("Ford");
  console.log(myCar);