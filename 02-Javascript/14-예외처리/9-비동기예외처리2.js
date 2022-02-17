const data= [1,2,3];
//timer처리와 같은 비동기방싱의 예외처리는 콜백함수 내부에서 처리해야함
//=> try-catch를 콜백함수에 넣어야함
setTimeout(()=>{
    try{
        console.log("배열 탐색 시작!");
        //이 부분만 별도의 구역에서 실행=>에러발생해도 try의 영향받지 않음
        for(let i=0; i<10; i++){
            console.log(data[i].toFixed(2));
        }
     }
    catch(err){    //setTimeout()과 같은 비동기함수는 처리하지 못함=>블록실행x 
    console.log("에러발생(2)");
    console.error(err.name);
    console.error(err.message);
    }
    console.log("배열 탐색 종료");

},1000);
console.log("프로그램 종료");