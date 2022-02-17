const RegexHelper = require("./RegexHelper");

const username= "자바스크립트";
const age= "20"
const userid= 'jer123';

const trgex= new RegexHelper();

//입력값 검사를 수행하기 위한 객체
const regex= new RegexHelper();

//입력값 형식검사 수행
try{
    regex.kor(username, "이름은 한글로만 입력하세요");
    regex.maxLen(username, 20, "이름은 최대 20자까지만 가능합니다.");
    regex.num(age, "나이는 숫자로만 입력하세요");
    regex.kor(userid, "아이디는 영어와 숫자의 조합만 가능합니다.");
    regex.kor(userid, "아이디는 최대 20자까지만 가능합니다.");
}catch (err){
    console.group("%s 에러 발생", err.name);
    console.error("에러 코드: %d", err.statusCode);
    console.error("에러 내용: %s", err.message);
    console.groupEnd();
}
console.log("검사 완료!");