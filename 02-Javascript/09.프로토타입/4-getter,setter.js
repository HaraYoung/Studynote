function User4(){
    this._id= null;
    this._email= null;
}   //멤버변수 정의

Object.defineProperty(User4.prototype, "id",{
    get: function(){
        console.log("id에 대한 getter호출");
        return this._id;
        /* 멤버 변수의 값을 반환가능
        반솬전에 필요하다면 멤버변수값을 가공하여 반환 가능*/
    },
    set: function (param){
        console.log("id에 대한 setter호출");
        this._id= param;
        /*파라미터값을 멤버변수에 복사하는 기능
        필요시 파라미터값을 가공해 멤버변수에 복사 가능 */
    }
});

Object.defineProperty(User4.prototype, "email",{
    get: function (){
        console.log("email에 대한 getter호출");
        return this._email;
    },
    set: function(param){
        console.log("email에 대한 setter호출");
        this._email= param;
    }
});

//객체 생성
const friend= new User4();
friend.id= "친구";
friend.email="friend@gmail.com";
console.log(friend.id);
console.log(friend.email);