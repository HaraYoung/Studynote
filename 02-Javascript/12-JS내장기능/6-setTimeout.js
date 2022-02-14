/*setTimeout(func, int)
param: func-콜백 함수
param: int - 1/1000초 단위의 시간값 

지정된 함수를 두번째 인자로 전달된 시간 후에 살행 하도록 예약
=> <딜레이 기능>
setTimeout() 이후의 처리 로직들은 func의 실행 여부와 상관 없이 즉시 실행
*/
function foo (){
    for (let i=1; i<10; i++){
        console.log("2 X "+ i+ "="+ (i*2));
    }
}

setTimeout(foo,3000);
console.log("구구단을 외자!");

//일반적으로 콜백함수는 별도로 정의하지 않고 즉시 전달
setTimeout(() =>{
    //= setTimeout(function(){ 
    for (let i=1; i<10; i++){
        console.log("3 x " +i + "="+ (i*3));
    }
},1500);

console.log("프로그램 종료");
