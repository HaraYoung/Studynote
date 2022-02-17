//에러 객체를 활용
function foo(x,y){
    if(x< 0 && y< 0){
        throw new Error("x와 y가 0보다 작습니다");
//함수안에서 에러를 강제로 발생 : 이 함수를 호출하는 위치를 에러로 인식
    }
    return x+ y;
}

const k= null;
/*에러 점검이 끝난후 try-catch블록 밖에서 k값을 활용 하려면
변수의 선언 위치가 try 블록보다 상위에 위치해야함
(변수의 스코프규칙) */

try{       
//try블록 안의 코드는 최소화하는것이 프로그램 효율에 좋음
    k= foo(-1, -2);
}catch (err){
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
    /*이블록으로 전달되는 err객체:
     10번째 라인에서 생성한 Error 클래스의 객체*/
}
console.log(k);
//k값 할당x = null