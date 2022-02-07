//두개의 파라미터를 갖는 함수 정의
function foo(x, y){
    console.log("x="+ x +"y="+ y);
    let result =x+ y;
    //x나 y의 값이 하나라도 없을경우 result= NaN
    //x나 y는 undefined로 출력
    let result=0;
    if (x!= undefined) {result+= x;}
    if (y!= undefined) {result+= y;}
//견고한 코드..
    console.log("result="+ result);
}

foo(100,200);
foo(200);
foo();