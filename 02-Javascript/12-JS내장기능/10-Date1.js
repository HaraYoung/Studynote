//Date
/*
객체를 생성하는 순간 시스템 시각이나 생성자 파라미터로 전달된 시각을
플랫폼(환경)에 종속되지 않는 형태로 나타남
 */

//요일의 이름을 저장하고 있는 배열 생성
const days= ["일", "월", "화", "수", "목", "금", "토"];
//외국과 요일을 표기하는 단어가 다르니 배열 생성

const date1= new Date();
//이 코드가 실행되는 순간의 컴퓨터의 시간을 복사해 가져감

//년,월,일,시간,분,초 리턴받기
const yy= date1.getFullYear();
const mm= date1.getMonth()+ 1;
//월은 0=1월,11= 12월
/*외국의 월단위 표기는 영문이기에 따로 배열을 생성해 인덱스를 리턴
숫자로 표기할 경우는 +1*/
const dd= date1.getDate();

//0=일요일,6=토요일 값 리턴 Day=요일
const i= date1.getDay();
const day= days[i];     //배열요일 인덱스값

//시간
const hh= date1.getHours();
const mi= date1.getMinutes();
const ss= date1.getSeconds();

let result= yy+ "-"+ mm+ "-"+ dd+ " "+ day+ "요일"+ hh+ ":"+ mi+ ":"+ ss;
console.log(result);


//날짜를 의미하는 문자열 반환받기

//날짜 부분만 나타내는, 사람이 읽을수 있는 문자열 반환
console.log(date1.toDateString());

//Date를 나타내는 문자열을 ISO 8601확장 형식에 맞춰 반환(국제 표준 시간)
console.log(date1.toISOString());

//형식 문자열을 사용해 Date를 나타내는 문자열 생성
console.log(date1.toLocaleString());
console.log(date1.toLocaleString("de-DE"));
console.log(date1.toLocaleString("ko-KR"));

//Date의 날짜부분을 나타내는 문자열을 시스템에 의해 설정된 현재지역의 형식으로 반환
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString("de-DE"));
console.log(date1.toLocaleDateString("ko-KR"));

//Date의 시간부분을 나타내는 문자열을 시스템에 의해 설정된 현재지역의 형식으로 반환
console.log(date1.toLocaleTimeString());
console.log(date1.toLocaleTimeString("de-DE"));
console.log(date1.toLocaleTimeString("ko-KR"));


//특정 날짜를 의미하는 객체 생성
let date2= new Date(2022, 2, 12);
//시각이 없으므로 자정으로 설정됨
console.log(date2.toLocaleString("ko-KR"));


//특정 시점를 의미하는 객체 생성
let date3= new Date(2022, 2, 12, 21, 19, 31);
console.log(date2.toLocaleString("ko-KR"));

//이미 생성된 날짜 객체의 성분 변경
date3.setYear(2021);
date3.setMonth(6);
date3.setDate(5);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString("ko-KR"));
