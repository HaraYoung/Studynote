//1- 모듈 참조
import axios from 'axios';

//2- 접속할 서버의 호스트 이름과 요청 정보(path)를 설정
const url = 'http://itpaper.co.kr/data/simple_text.txt';

//3- async-await 방식을 즉시 실행 함수 형태로 정의
(async () => {
    let result= null;
    try{
        const response= await axios.get(url);

        /*정상적으로 처리에 성공한 경우 promise 방식의 첫번째  then역할은 이 위치에서  
        자연스럽게 코드가 이어짐
        첫번째 then의 콜백함수에 전달되던 파라미터는 앞에서 리턴받은 response*/
        result= response.data;
    }
    catch(error) {
        /*에러가 발생한 경우 실행되는 부분
        promise방식의 catch에 해당 */
        const errorMsg = '['+ error.response.status+ '] '+ error.response.statusText;
        console.log('즉시 실행 함수 방식 - '+ errorMsg);
        return;
    }
    //promise방식의 마지막 then은 뒷부분에 일반 코드로 작성함
    console.log('async-await 방식- '+ result);
})();

console.log('async-await + 즉시 실행함수 방식으로 HTTP 요청')