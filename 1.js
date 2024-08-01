class BankAccount{
    constructor(name,initialamount){
        this.name=name;
        this.initamount=initialamount;
    }
    deposit(amount){
        if(amount>0){
            this.initamount+=amount;
            console.log(`Deposited Rs.${amount}. New balance: Rs.${this.initamount}`);
        }else{
            console.log('Invalid deposit amount. Please enter a positive amount.');
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.initamount) {
                this.initamount -= amount;
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.initamount}`);
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    }
    checkBalance() {
        console.log(`Account balance for ${this.name}: Rs.${this.initamount}`);
    }
}
const myAccount = new BankAccount("Mithun s", 1000);

myAccount.checkBalance();
myAccount.deposit(500); 
myAccount.deposit(-50); 
myAccount.withdraw(200); 
myAccount.withdraw(1500); 
myAccount.withdraw(-500);
myAccount.checkBalance();