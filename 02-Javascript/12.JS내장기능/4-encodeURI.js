//encodeURI(string)

const set1=  ";,/?:@&=+$#"; //예약 문자
const set2= "-_.!~*'()";    //비예약 문자
const set3="ABC abc 123";   //알파벳 및 숫자, 공백
const set4= "자바스크립트";

//특수문자(예약문자 및 비예약 문자를)변환 못함
//UTF-8 환경에서는 사용 불가
const enc1= encodeURI(set1);
const enc2= encodeURI(set2);
const enc3= encodeURI(set3);
const enc4= encodeURI(set4);

console.group("encodeURT")
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

//인코딩된 문자열을 원래의 문자열로 역변환 (디코딩)

console.group("decodeURT")
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();