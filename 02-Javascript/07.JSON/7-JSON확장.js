//존재하지 않는 key를 사용하는 경우
const foo ={
    name: "자바스크립트",
    age: 19
};
//존재하지 않는 값 출력->undefined
console.log(foo.email);

//존재하지 않는 값 활용한 연산
/*age를 고의로 aga로 오타->undefined+1
-> 숫자가 아닌 결과값 => NaN*/
const nextAge= foo.aga+1;
console.log(nextAge);

//존재하지 않는 key에 대한 대입
foo.email= "hello@world.com";
console.log(foo);

//빈 객체 확장
const myJson= {};       //빈 객체
console.log(myJson);

for (let i=0; i<10; i++){
    const key = "value"+ i;
    myJson[key] =i *100;
};
console.log(myJson);