import {useLocation} from 'react-router-dom';

const useQueryString =() =>{
    //QueryString 문자열 추출함
    const { search } = useLocation();

    //QueryString문자열을 객체로 반환
    const params= new URLSearchParams(search);
    
    /*모든 key와 value의 쌍을 for..in반복문으로 처리 가능한 
    [key, value]쌍의 배열로 반환함 */
    const entries= params.entries();

    //리턴할 빈 객체
    const result= {};

    //추출한 배열을 반복문으로 처리하여 JSON객체로 변환함
    for(const [key, value] of entries){
        result[key]=value;
    }
    return result;
};
//querystring으로 전달된 변수값을 hook으로 정의함 - query string을 가져올수 있음
//컴포넌트를 거슬러 올라가 상태값을 전달해야할때 query string을 쓸경우 원하는곳에서 값을 추출할수있음

export {useQueryString};