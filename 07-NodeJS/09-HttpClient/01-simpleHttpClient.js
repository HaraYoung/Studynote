//1- 모듈 참조
import http from 'http';    //node내장 모듈- 추가 설치 안함

//2- 접속할 서버의 호스트 이름과 요청 정보(path)를 설정
const url = 'http://itpaper.co.kr/data/simple_text.txt';

//3- get방식으로 접속하기 위한 객체 생성
var req= http.get(url, function(res) {
    //응답이 수신되는 경우 (수신 데이터의 용량에 따라 여러번 호출될 수 있음)
    var resData= '';
    res.on('data', function(chunk) {
        resData += chunk;
    });

    //응답 수신이 종료된 경우(읽은 데이터를 처리함)
    res.on('end', function() {
        console.debug(resData);
    });
});

//4- 접속 객체에 error 이벤트 리스너 설정
req.on('error', function(err) {
    console.error(err);
    console.error('에러 발생: ' + err.message);
});