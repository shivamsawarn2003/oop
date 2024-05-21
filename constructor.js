// A constructor function is simply a function which acts as a pattern or a template for creating objects
//with constructor function , we can instantiate objects and implement inheritance
//TO define a constructor function , a function is used . It can be a normal function or function expression.


//In oop variables is called as properties as shown in next example and function is called as methods.
//How to create Constructor function
function BankAccount(customerName,balance=0){
    this.cutomerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;

    this.deposit=function(amount){
        this.balance+=amount;
    }
    this.withdraw=(amount)=>{
        this.balance-=amount;
    }
}
/*const myAccount=new BankAccount("Shiva",2000);
 const newAccount=new BankAccount("Hello");
myAccount.deposit(5000);
myAccount.withdraw(1000);
console.log(myAccount); */

const accounts=[];
const accountForm=document.getElementById("accountForm");
const customerName=document.getElementById("customerName");
const balance=document.getElementById("balance");

 const depositeForm=document.getElementById("depositeForm");
const amount=document.getElementById("amount");
const accountNumber=document.getElementById("accountNumber"); 

accountForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const account=new BankAccount(customerName.value,+balance.value);
accounts.push(account);
console.log(accounts);
})

 depositForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const account=accounts.find((account)=>account.accountNumber===+accountNumber.value)
 account.deposit(+amount.value);
 console.log(accounts);
})
