/*에러의 종류를 세분화하기 위해 기본 Error클래스의 기능을 확장하여
개발자가 직접 에러에 대한 경우의수를 정의할 수 있다.
 */
//에러의 종류 세분화 가능
class XlessError extends Error{
    constructor(msg){
        super(msg);
        /*자식 클래스가 생성자를 갖을경우 부모의 생성자 
        반.드.시. 강제 호출->super(...)*/
        super.name= "XlessError";
    }
}

class YlessError extends Error{
    constructor(msg){
        super(msg);
        /*자식 클래스가 생성자를 갖을경우 부모의 생성자 
        반.드.시. 강제 호출->super(...)*/
        super.name= "YlessError";
    }
}

function foo(x, y){
    if(x< 0) {
        throw new XlessError("x가 0보다 작습니다.");
    }
    if(y< 0) {
        throw new YlessError("y가 0보다 작습니다.");
    }
    return x+ y;
}

const a= null;
const b= null;

try{       
    a= foo(-1, 10);
}catch (err){
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
try{       
    b= foo(10, -1);
}catch (err){
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
console.log(a);
console.log(b);