//콜백함수를 파라미터로 요구하는 함수 정의
function something(x, y, cd){
    const result =cd(x, y);
    console.group(cd);
    console.log(x+ "와 "+ y+ "의 연산결과는 "+ result);
    console.groupEnd();
}
/*x와 y의 연산결과를 파라미터로 전달받은
콜백에게 다시 전달하여 리턴값을 받아 처리함*/

//유형1- 직접 함수 정의
function plus(a, b) {return a+b;}
function minus(a, b) {return a-b;}

something(100, 50, plus);
something(100, 50, minus);

//유형2 - 콜백함수를 익명함수 형태로 전달
something(200, 100, function(a,b){
    return a*b;
});
something(200, 100, function(a,b){
    return a/b;
});

//유형3 - 익명함수를 화살표 함수로 사용
something(5, 7, (a, b)=> {
    for (let i=a; i<b; i++){
        console.log("7 x "+ i+ "="+ (i*7));
    }
});
//함수 로직이 한줄인 경우 축약된 형태
something(5, 7, (a, b)=> console.log(a+ b));