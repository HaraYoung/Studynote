//개발자가 직접 정의하는 에러
let err= new Error("이상한 일이 벌어졌다!!");
//생성자 파라미터로 에러의 내용 전달
console.log("에러이름: %s", err.name);
console.log("에러내용: %s", err.message);
throw err;      //실제 에러로 인식하기때문에 이위치에서 중단
console.log("프로그램 종료");
