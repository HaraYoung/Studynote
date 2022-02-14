//클래스 형태 모듈 참조
let myModule3= require('./3-1-My_moudule3');

/*리턴된 모듈은 클래스 형태
-> 기능 사용을 위해 인스턴스 생성
 */
let module_obj= new myModule3();
module_obj.say();

//객체 형태 모듈 참조
let myModule4= require('./3-2-My_moudule4');

//리턴된 모듈은 객체 형태, 직접 모듈 기능호출 가능
myModule4.say();
