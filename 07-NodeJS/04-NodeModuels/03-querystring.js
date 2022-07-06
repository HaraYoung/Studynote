//1- 모듈 참조하기
import { URL, URLSearchParams } from 'url';

//2-url에서 querystring 부분만 추출
//분석할 URL에서 쿼리 부분만 추출하기
const address= 'http://www.iitpaper.co.kr/hello/world.html?a=123&b=456';
//객체 생성
const {searchParams}= new URL(address);
//searchParams= URLSearchParams 클래스의 객체 타입- querystring을 객체로 분할해 갖고있음

// URL에서 추출한 모든 변수는 string타입임
console.debug('요청 파라미터 중 a의 값: %s (%s)', searchParams.get('a'), typeof searchParams.get('a'));
console.debug('요청 파라미터 중 b의 값: %s (%s)', searchParams.get('b'), typeof searchParams.get('b'));

/* json 객체를 querystring문자열로 반환
URL에 포함될 수 없는 글자는 자동으로 Encoding처리*/
const obj= {name: 'hello', nick: 'world', address: '서울시 서초구'};
const str= new URLSearchParams(obj);
console.log('조합된 요청 파라미터: %s', str);
