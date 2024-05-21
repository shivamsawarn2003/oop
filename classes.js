//JavaScript Classes are templates for JavaScript Objects.
//Use the keyword class to create a class.
/* class BankAccount{
    customerName;
    acccountNumber;
    balance=0;


    constructor(customerName,balance=0){
this.customerName=customerName;
this.acccountNumber=Date.now();
this.balance=balance;
    }

deposit(amount){
    this.balance+=amount;
}
withdraw(amount){
    this.balance-=amount;
}
}

const shivaAccount=new BankAccount("Shiva",2000);
shivaAccount.deposit(2000);
shivaAccount.withdraw(500);
console.log(shivaAccount); */
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";