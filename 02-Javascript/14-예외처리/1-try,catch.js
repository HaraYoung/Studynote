//기본적인 에러 핸들링

const data= [1,2,3];
console.log("배열 탐색 시작");

/*
try {...}안의 코드가 실행
에러x => try안의 마지막 줄까지 실행, catch블록은 건너뜀
에러o => try안 코드의 실행이 중단-> catch(err) 블록으로 제어흐름이 넘어감
변수 err(:이름변경 가능)는 무슨일이 일어났는지에 대한 살명이 담긴 에러 객치를 포함
*/
try{
    for (let i=0;i<10; i++){
        console.log(data[i].toFixed(2));
    }
    console.log("try 블록 실행완료");
}catch (err) {
    console.group("%s 에러발생",err.name);
    console.error(err.message);
    //console.error(err);  => 에러의 정보 전체
    console.groupEnd();
}finally{ 
    console.log("배열 탐색이 종료되었습니다.");
}
console.log("프로그램 종료");
//try-catch로 발생할 에러에 대비하면 에러가 발생하더라도 프로그램 중단x
