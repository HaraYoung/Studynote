class Student{
    constructor (h1, studno){
        this._h1= h1;
        this._studno= studno;
    }
    get Student(){
        return this._h1;
    }
    set Student(h1){
        this._h1= h1;
    }
    get Student(){
        return this._studno;
    }
    set Student(studno){
        this._studno= studno;
    }

   
    sayHello(){
        console.log("나는 %s학과 %d학번 입니다.",this._h1, this._studno);
    }
};

const user= new Student("디자인",103);
user.sayHello();


//문제2

class Account{
    constructor(owner, balance){
    this._owner =owner;
    this._balance= balance;
    }
    get owner(){
        return this._owner;
    }
    set owner(param){
        this._owner=param;
    }
    get balance(){
        return this._balance;
    }
    set balance(param){
        this._owner=param;
    }
    deposit(amount){
        this._balance+=amount;
    }
    withdraw(amount){
        if (this._balance<amount)
        {console.log("잔액이 부족합니다.")
            return;}
        this._balance-=amount;
        return amount;
    }

}
const acc = new Account("hi", 100);

console.log("%s의 잔액은 %d원 입니다", acc.owner, acc.balance);


acc.deposit(100000);
console.log("%s의 잔액은 %d원 입니다", acc.owner, acc.balance);

acc.withdraw(5000);
console.log("%s의 잔액은 %d원 입니다", acc.owner, acc.balance);


acc.withdraw(10000000);
console.log("%s의 잔액은 %d원 입니다", acc.owner, acc.balance);

