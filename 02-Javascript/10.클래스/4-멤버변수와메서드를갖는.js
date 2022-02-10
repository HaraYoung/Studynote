class HelloWorld{
    constructor(){
        //생성자의 역할: 멤버변수를 정의
        this.message= null;
        //선언만하고 추후 할당을 위해 null로 초기화
    }
    sayHello() {
        console.log(this.message);
    }
    setEng() {
        this.message= "Hello Javascript";
    }
    setKor(){
        this.message= "안녕하세요 자바스크립트";
    }
}
const hello= new HelloWorld();
hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();