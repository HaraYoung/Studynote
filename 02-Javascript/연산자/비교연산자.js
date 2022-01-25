//이상,이하,미만,초과

let x = 100 ;
let y = 20 ;
let sample1 = x >= y;  //이상
let sample2 = x > y;  //초과
let sample3 = x <= y;  //이하
let sample4 = x < y ;  //미만

console.group("이상,이하,미만,초과");
console.log(sample1);
console.log(sample2);
console.log(sample3);
console.log(sample4);
console.groupEnd();

//같다
let a1 ="1";
let a2 =1;
let a3 =1.0;
let a4 =true;

console.group("같다");
console.group("내용만 비교하는 경우");
console.log(a1 == a2);
console.log(a1 == a3);
console.log(a1 == a4);

console.log(a2 == a3);
console.log(a2 == a4);

console.log(a3 == a4);
console.groupEnd();

console.group("데이터 타입까지 비교하는 경우");
console.log(a1 === a2);
console.log(a1 === a3);
console.log(a1 === a4);

console.log(a2 === a3);
console.log(a2 === a4);

console.log(a3 === a4);
console.groupEnd();
console.groupEnd();

//다르다
let b1 ="1";
let b2 =1;
let b3 =1.0;
let b4 =true;

console.group("다르다");
console.group("내용만 비교하는 경우");
console.log(b1 != b2);
console.log(b1 != b3);
console.log(b1 != b4);

console.log(b2 != b3);
console.log(b2 != b4);

console.log(b3 != b4);
console.groupEnd();

console.group("데이터 타입까지 비교하는 경우");
console.log(b1 !== b2);
console.log(b1 !== b3);
console.log(b1 !== b4);

console.log(b2 !== b3);
console.log(b2 !== b4);

console.log(b3 !== b4);
console.groupEnd();
console.groupEnd();


