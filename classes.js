class BankAccount{
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
console.log(shivaAccount);