import axios from 'axios';

(async ()=>{
    let result= null;
    try{
        /*axios를 활용하여 다른 백엔드에게 HTTP get 파라미터를 전달하고 결과를 리턴받음
        const response= await axios.get('http://itpaper.co.kr/data/get.php?num1=100&num2=200'); */
        const response= await axios.get('http://itpaper.co.kr/data/get.php',{
            params:{
                num1: 100,
                num2: 200
            },
            /*HTTP해더를 전송해야하는 경우
            현재 이 예제에서 사용하는 php페이지는 http 해더에 대한 처리를 전혀 하지 않고 있으므로
            전송해도 아무 영향이 없음, 설명을 위해 아래 코드를 유지함 */
            headers:{
                'Authorization': 'KakaoAk ####################'
            }
        });
        result= response.data;
    }catch (error){
        const errorMsg= '['+ error.response.status+ '] '+ error.response.statusText;
        console.error(errorMsg);
        return;
    }
    console.log('다른 백엔드로부터 응답받은 결과값: '+ result);
})();