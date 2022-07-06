//1- 모듈 참조
import axios from 'axios';

//2- 접속할 서버의 호스트 이름과 요청 정보(path)를 설정
const url = 'http://itpaper.co.kr/data/grade_card.json';

//3- async-await 방식을 즉시 실행 함수 형태로 정의
(async () => {
    let json= null;
    try{
        //axios를 활용하여 json데이터를 요청
        const response= await axios.get(url);

        /*정상적으로 처리에 성공한 경우 promise 방식의 첫번째  then역할은 이 위치에서  
        자연스럽게 코드가 이어짐
        첫번째 then의 콜백함수에 전달되던 파라미터는 앞에서 리턴받은 response*/
        json= response.data;
    }
    catch(error) {
        /*에러가 발생한 경우 실행되는 부분
        promise방식의 catch에 해당 */
        const errorMsg = '['+ error.response.status+ '] '+ error.response.statusText;
        console.error(errorMsg);
        return;
    }
    //promise방식의 마지막 then은 뒷부분에 일반 코드로 작성함
    json.grade_card.map((v, i)=>{
        console.group(i+ '번째 항목');
         console.log('이름: %s, 학년: %d, 성별: %s, 국어: %d, 영어: %d, 수학: %d, 과학: %d',
         v.이름, v.학년, v.성별, v.국어, v.영어, v.수학, v.과학);
    });
})();