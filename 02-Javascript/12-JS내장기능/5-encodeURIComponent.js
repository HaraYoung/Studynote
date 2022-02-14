//encodeURLComponent(string)
/*알파벳과 숫자 및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬수 있는 문자열로 인코딩함
-> URL에 사용해도 문제가 없는 특수문제 제외하고 모든 글자 변환*/

const set1=  ";,/?:@&=+$#"; //예약 문자
const set2= "-_.!~*'()";    //비예약 문자
const set3="ABC abc 123";   //알파벳 및 숫자, 공백
const set4= "자바스크립트";

//특수문자(예약문자 및 비예약 문자를)변환 못함
//UTF-8 환경에서는 사용 불가
const enc1= encodeURIComponent(set1);
const enc2= encodeURIComponent(set2);
const enc3= encodeURIComponent(set3);
const enc4= encodeURIComponent(set4);

console.group("encodeURTComponent")
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

//인코딩된 문자열을 원래의 문자열로 역변환 (디코딩)

console.group("decodeURTComponent")
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();