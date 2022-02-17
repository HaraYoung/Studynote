//변수 스스로 1 증가

let selfPlus = 1 ;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus
console.log(selfPlus);

//변수 스스로 1 감소

let selfMinus = 1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);


//전위 증감 연산자

let sample1 =1;

//sample1을 먼저 1증가시키고 전체 수식을 처리
let sample2 = 100 + ++sample1;

console.log(sample2);
console.log(sample1);

//후위 증감 연산자

let sample3 = 1;
//100 + sample3 먼저 처리하고 나중에 sample3가 1증가

let sample4 = 100 + sample3++;

console.log(sample4);
console.log(sample3);


