//다른배열을 원소로 갖는 배열
const a = [1, 2, 3, 4];
const b = [4, 5, 6];
const myArr1 = [a,b];
console.log(myArr1);

//축약 표현 -2행3열
let myArr2 = [ [1,2,3,], [4,5,6]];
console.log(myArr2);

//2차배열의 원소 접근
//행 -> 열 순으로 인덱스 열거.
console.log(myArr2[0] [0]);
console.log(myArr2[0] [1]);
console.log(myArr2[0] [2]);
console.log(myArr2[1] [0]);
console.log(myArr2[1] [1]);
console.log(myArr2[1] [2]);

//Array 클래스를 통한 2차 배열
const c = new Array (10, 20, 30);
const d= new Array (23, 35, 56);
const myArr3 = new Array(c, d);
console.log(myArr3);

const myArr4 = new Array (new Array (10, 20, 30), new Array(23, 30, 56));
console.log(myArr4);
