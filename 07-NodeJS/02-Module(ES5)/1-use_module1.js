/**
 require() 함수는 module.exports를 통해 등록된 기능들을 리턴
 리턴받을 my객체는 module.exports에 확장된 기능들을 참조
 파일경로 명시할때 확장자 생략가능
 동일 경로라도 './'는 생략 불가
 './' 생략되는 경우 node의 내장 모듈로 인식함
 */
const my1 =require('./1-1-My_module1');
my1();
//모듈 형태로 참조된 함수 호출

const my2 =require('./2-1-My_moudule2');

console.log(my2.name);
console.log(my2.property.id);
console.log(my2.property.type);
my2.say;
console.log(my2.home.postcode);
console.log(my2.home.address);
my2.home.getAddress();

//클래스 형태의 모듈 참조
const my3 =require('./3-1-My_moudule3');

/*리턴된 모듈을 클래스 형태이므로,
 기능 사용을 위해서는 인스턴스를 생성해야함*/
let module_obj= new my3();
module_obj.say();

//객체 형태의 모듈 참조
const my4= require('./3-2-My_moudule4');

/*리턴된 모듈은 객체 형태 이므로
직접 모듈내의 기능을 호출 할 수 있다. */
my4.say();
