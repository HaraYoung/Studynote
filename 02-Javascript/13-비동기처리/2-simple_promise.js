//비동기 처리로 실행되는 함수에 대한 결과처리를 별도의 로직으로 실행할수있는 기법
function random(n1, n2){
    return parseInt(Math.random()*(n2- n1+ 1))+ n1; 
}

//promise를 가동하기 위해서는 promise객체를 리턴하는 함수 필요
function getLuckyResult(){
    return new Promise(function (resolve, reject){
//promise객체는 resolve함수와 reject함수를 파라미토로 받는 콜백이 필요
    //이 안에서 비동기 작업을 시작!
    setTimeout(() =>{
        console.log("당신의 추첨 결과는?!!");
        const lucky= random(1,9);
        if(lucky % 2 == 0){  /*작업결과 성공일때 resolve()호출
                            파라미터는 단 하나만 가능
                            여러개의 정보를 보내야하는 경우: json구조 적절*/
            resolve({msg: "당첨입니다!!!", a: 1, b: 2, c: 3});
        }else{
            /*작업결과 실패일때 reject()호출*/
            reject({msg: "꽝!!다음기회에...", d: -1, e: -2 });
        }
    },1000);
 });
}

//콜백안에서 기능 구현해야함 - 네트워크 작엄..?
//생성자는 new키워드 만들때 자동으로 실행됨- 생성자는 new라는 키워드에 반응하는 함수다
//new promise를 만든 순간 function은 이미 실행이 끝난 상태
//1초후에 실행하게 예약이 되어있는 상태- 성공인지 실패인지 이미 결과는 나와있음

const mypromise= getLuckyResult();
//Promise객체를 리턴받기 위한 함수를 호출
/*getLuckyResult()함수 내부에서 Promise객체가 생성 되면서
promise클래스에 전달한 생성자 파라미터(콜백함수)가 실행될것
-> resolve 혹은 reject가 호출된 상태라는 의미 */
//getLuckyResult함수는 리턴을 하기위해 promise객체를 생성->생성자 파라미터 전달

//Promise객체가 생성되는 과정에서 생성자로 전달된 콜백함수의 실행결과를 감지하는 부분
/*resolve 혹은 reject중에서 실행된 함수가 무엇인지 감지 
-> 비동기 작업의 결과를 알아냄
=> 타이머 종료이 이은 후속처리가 가능하다는 의미*/
mypromise.then(({msg, a, b, c}) =>{
    console.log("%s, a= %d, b= %d", "c= %d", msg, a, b, c);
    //작업성공 - resolve()실행
}).catch(({msg, d, e}) =>{
    console.error("%s, d= %d, e= %d", msg, d, e);
    //작업실패 - reject()실행
}).finally(()=> {
    //성공/실패 여부 상관없이 실행되는 마무리 처리, 생략가능
    console.log("finish :-) ");
});
/**
 resolve - then의 json: resolve의 json전달
 reject - catch
 finally는 마지막
 실패부분과 성공부분의 처리로직을 분리하기위해 쓰는 객체
 */

