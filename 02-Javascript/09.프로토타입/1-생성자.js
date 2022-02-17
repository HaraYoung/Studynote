//멤버변수를 갖는 생성자를 통해 객체 생성
function User(){
    this._id= null;
    this._email= null;
} //맴버 변수 정의-언더바를 사용해 일반변수와 구분

//생성자를 통한 객체 생성
const foo =new User();
foo._id= "hello";
foo._email= "hello@javascript.com";
console.log(foo);

const bar =new User();
bar._id= "world";
bar._email= "world@javascript.com";
console.log(bar);