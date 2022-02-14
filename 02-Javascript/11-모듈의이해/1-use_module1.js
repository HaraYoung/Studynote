/**
 require() 함수는 module.exports를 통해 등록된 기능들을 리턴
 리턴받을 my객체는 module.exports에 확장된 기능들을 참조
 파일경로 명시할때 확장자 생략가능
 동일 경로라도 './'는 생략 불가
 './' 생략되는 경우 node의 내장 모듈로 인식함
 */
const my =require('./1-1-My_module1');
my();
//모듈 형태로 참조된 함수 호출