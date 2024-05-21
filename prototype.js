// in js every function is added by some property that property is called prototype
// it adds an empty object
// . can be used when we have to access properties of an object
// in js functions is itself an object

function BankAccount(customerName,balance=0){
    this.cutomerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;
    
/* 
    this.deposit=function(amount){
        this.balance+=amount;
    }
    this.withdraw=(amount)=>{
        this.balance-=amount;
    } */
}

/* const shivaAccount=new BankAccount("Shiva",2000);
const myAccount=new BankAccount("Rohan");
console.log(shivaAccount,myAccount); */
const shivaAccount=new BankAccount("Shiva");
BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;

};
BankAccount.prototype.withdraw=(amount)=>{
    this.balance-=amount;
}

shivaAccount.deposit(3000);

console.log(shivaAccount);