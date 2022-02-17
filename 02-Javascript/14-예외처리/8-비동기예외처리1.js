//try catch는 동기방식으로 처리.비동기방식에는 대응 못함(timer처리,ajax)
const data= [1,2,3];
try{
    setTimeout(()=>{
        console.log("배열 탐색 시작!");
        //이 부분만 별도의 구역에서 실행=>에러발생해도 try의 영향받지 않음
        for(let i=0; i<10; i++){
            console.log(data[i].toFixed(2));
        }
        console.log("배열 탐색 종료");
        //에러가 발생해 프로그램이 중단되으모 이메세지는 표시x
    },1000);
}catch(err){    //setTimeout()과 같은 비동기함수는 처리하지 못함=>블록실행x 
    console.log("에러발생(2)");
    console.error(err);
}
console.log("프로그램 종료");