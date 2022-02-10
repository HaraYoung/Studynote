//생성자 함수안에서 this키워드를 통해 객체안에 탑제될 변수 초기화
class MemberClass{
    constructor(){    //생성자이름은 고정.예약어x,필요시 파라미터정의는 가능,리턴x
        this.userName= null;
        this.email= null;
    }
}

//클래스활용 객체생성
const m1 =new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 =new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

//객체 특성- 같은구조를 갖지만 저장되는 내용은 개별적
m1.userName= "민혁";
m1.email= "mh@gmail.com";

m2.userName= "철수";
m2.email= "cs@gmail.com";

console.log(m1);

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);