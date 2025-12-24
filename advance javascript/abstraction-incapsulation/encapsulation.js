class bankAccount{
    constructor(owner , balance , age){
        this.age = age;
        this.owner = owner;
        this.balance = balance;

        document.write(`your account is currently created and your current balance is ${this.balance} <br>`)
    }

    deposite(amount){
        if(amount > 0){
            this.balance += amount
        }

        document.write(`your current balance is after deposite ${this.balance} <br>`)
    }

    withdraw(amount){
        if(amount > 0 && amount <=this.balance){
        this.balance -= amount
            document.write(`your current balance is after withdraw ${this.balance} <br>`)

        }
        else{
            document.write("you have insufficient balance")
        }
    }

     owner_age(){

        document.write(`your current age is ${this.age} <br>`)
            
        }
}


let acc = new bankAccount("Gulzaman" ,3000 , 27)

acc.age = 27
acc.deposite(1000)
acc.withdraw(3000)
acc.owner_age();