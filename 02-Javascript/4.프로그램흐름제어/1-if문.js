//논리값을 사용한 경우
console.group("논리값 사용 가능")

//일반 구문 - 무조건 실행
console.log("배고픈데");

//조건문에서 사용할 조건값 생성
//const have_money = true;
const have_money = false;

if (have_money){
    console.log("식당에서");
}

console.log("밥을 먹자");
console.groupEnd();

//숫자형값을 사용한 경우
console.group("숫자형값을 사용한 경우");

//const money1 = 10000;
const money1 = 0; //0은 거짓이니까

if (money1) {
    console.log("택시를 타고");
}
console.log("집에 가자");
console.groupEnd();

//비교식을 사용한 조건문
console.group("비교식을 사용한 조건문");

