//1- 모듈 참조
import axios from 'axios';

//2- 접속할 서버의 호스트 이름과 요청 정보(path)를 설정
const url = 'http://itpaper.co.kr/data/simple_text.txt';

//3- get방식으로 접속하기 위한 객체 생성 - promise방식
axios
    .get(url)
    .then(function (response) {
        /*지정된 url의 컨텐츠를 성공적으로 가져온 경우 호출됨
        -> 응답을 성공적으로 수신했다고 표현함 */
        console.log('Promise방식 - ' + response.data);
    })
    .catch(function(error){
        /*지정된 url로의 요청에 실패한 경우 호출됨
        에러 내용에서 상태코드(숫자)와 에러 메세지만 추출
        [HTTP 상태 코드]
        200 : OK, 404 : Page Not found, 401 : 권한없음,로그인 필요,
        403 : 접근금지,폴더에 접속한 경우 , 50x : 접속 대상에서 에러가 나고있는 경우*/
        const errorMsg= '['+ error.respnse.status+'] '+ error.respnse.statusText;
        console.log('Promise방식 - '+ errorMsg);
    })
    .finally(function() {
        /*성공,실패 여부에 상관없이 마지막에 무조건 호출됨
        필요없다면 이 부분은 구현 X */
        console.log('Promise방식 - fin: )');
    });
console.log('Promise 방식으로 HTTP요청')