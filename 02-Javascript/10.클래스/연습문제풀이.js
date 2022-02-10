class Student{
    constructor(departmentName,departmentNumber){
        //프로퍼티로 선언.
        this.departmentName= departmentName;
        this.departmentNumber= departmentNumber;
    }
    get departmentName(){

    }
    set departmentName(){

    }
    get departmentNumber(){

    }
    set departmentNumber(){

    }
}

//

class Account{
    constructor(owner, balance){
        this._owner= owner;
        this._balance= balance;
    }
    get owner(){
        return this._owner;
    }
    set owner(value){
        this._owner=value;
    }
    
    get balance(){
        return this._balance;
    }
    set balance(value){
        this._balance=value;
    }
    deposit(amount){
        this.balance+= amount;
    }
    withdraw(amount){
        if(this.balance<amount){
            console.log("잔액이 부족합니다.")
            return;
        }
        this.balance-= amount;
        return amount;
    }
}
const acc = new Account("안녕", 20000);
console.log ("%s의 잔액은 %d원 입니다",acc.owner, acc.balance);

//저축
acc.deposit(6000);
console.log ("%s의 잔액은 %d원 입니다",acc.owner, acc.balance);

//인출
acc.withdraw(10000);
console.log ("%s의 잔액은 %d원 입니다",acc.owner, acc.balance);

//잔액부족
acc.withdraw(1000000);
console.log ("%s의 잔액은 %d원 입니다",acc.owner, acc.balance);
