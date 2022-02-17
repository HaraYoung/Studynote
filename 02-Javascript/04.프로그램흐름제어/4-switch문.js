//기본 구문
console.group("switch 기본 구문");
const 국어 = "B";

//조건에 맞는 case 블록부터 break 키워드를 만날때 까지 실행
switch (국어) {
    case 'A':
        console.log("A학점 입니다.")
        break;

    case 'B':
        console.log("B학점 입니다.")
        break;

    case 'C':
        console.log("C학점 입니다.")
        break;
    default:
        console.log("C학점 미만 입니다.")
        break;
}
console.groupEnd();

//break가 없는경우
console.group("break가 없는 경우")
const 영어 = "B";

switch (영어) {
    case 'A':
        console.log("A학점 입니다.")
    case 'B':
        console.log("B학점 입니다.")
    case 'C':
        console.log("C학점 입니다.")
    default:
        console.log("C학점 미만 입니다.")
}
console.groupEnd();

/*의도적으로 break 위치 조절
case는 다르지만 수행해야할 로직이 동일한 경우*/
console.group("의도적으로 break 조절하기")
const 수학 = "B";

switch (수학) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다")
        break;    
}
console.groupEnd();


//break의 조건을 식으로 설정하는 경우
console.group("break의 조건을 식으로 설정하는 경우")
const 과학 =72 ;

//수식이 비교식임.case는 true/false에 대한 경우의 수가 되어야함.
switch (과학 > 70) {
    case true:
        console.log("이 과목을 Pass 했습니다")
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}
console.groupEnd();
