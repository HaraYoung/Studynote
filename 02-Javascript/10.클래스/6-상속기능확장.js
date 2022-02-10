class SayHello{
    eng(){
        console.log("Hello Javascript");
    }
}

//기본 기능을 확장하는 클래스
class SayHelloWorld extends SayHello{
    kor(){
        console.log("안녕하세요 자바스크립트.");
    }
}
//부모의 기능을 상속받고, 자신이 구현하는 기능도 사용가능

const say= new SayHelloWorld();
say.eng();
say.kor();