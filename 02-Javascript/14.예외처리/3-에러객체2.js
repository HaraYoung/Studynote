//개발자가 직접 정의하는 에러
let err= new Error("이상한 일이 벌어졌다!!");
try{
    throw err;  //에러로 인식하기때문에 try-catch처리 가능
}catch (err){  
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
console.log("프로그램 종료");
/*에러상황을 try-catch로 처리했으니 프로그램 중단x,무사히 종료 */