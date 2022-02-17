//화살표 함수 기본형
const foo= (x) =>{      //function키워드 대신 '=>'
    for( let i=0; i<x; i++){
        console.log("Hello World");
    }
};
foo(7);

//()생략 - 파라미터가 하나만 존재할경우
//파라미터가 없거나 두개 이상은 생략불가
const bar = x =>{
    for (let i=0; i<x; i++){
        console.log("Hellow World");
    }
};
bar(3);

//처리로직이 한줄만 존재
const hello= (x, y) => x+y;
console.log(hello(100, 400));
/*파라미터 x,y를 받아서 x+y를 리턴하는 
arrowReturn 이라는 이름의 함수
const hello =(x, y) => {
    return x*y;
};
 */