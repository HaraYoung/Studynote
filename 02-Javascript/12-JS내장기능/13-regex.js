//정규표현식(프로그램언어에서 독립적, js의 특정기능이 x)
/*
문자열의 형식을 의미하는 수식.
문자열이 특정 조건을 충족하는지 검사하거나 특정 패턴의 문자열 탐색, 치환하기 위해 사용

const 변수명= /정규표현식/
변수명.test(검사할 문자열)
=>
/^[ ]*$/ 모든 내용 포함..?

!가 붙으면 false일때 출력하겠다..?

//입력값검사는 모듈화를 해놓으면 평생씀..

 */

//회원가입시 입력받은 값을 가정한 변수
const username= "자바스크립트";
const age= "20";
const userid= "js123!";
//사용자가 입력한 모든 내용은 문자열 변수

//이름의 한글 입력검사
const pattern1= /^[ㄱ-ㅎ가-힣]*$/;
if (!pattern1.test(username)){
    //username이 pattern1 정규식에 부합하지 않는다면?
    console.log("이름은 한글만 입력 가능합니다.");
}

//나이의 숫자 입력검사
const pattern2= /^[0-9]*$/;
if (!pattern2.test(age)){
    //username이 pattern2 정규식에 부합하지 않는다면?
    console.log("나이는 숫자만 입력 가능합니다.");
}

//아이디 영문+숫자 검사
const pattern3= /^[a-zA-Z0-9]*$/;
if (!pattern3.test(userid)){
    //username이 pattern3 정규식에 부합하지 않는다면?
    console.log("아이디는 영문+숫자 조합으로만 입력 가능합니다.");
}

//아이디의 최대 글자수 검사
if (userid.length>20){
    console.log("아이디는 최대 20자 까지만 입력 가증합니다.");
}

console.log("검사 완료");