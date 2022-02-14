//배열의 원소를 추가, 삭제, 변경
const data= [10, 20, 30, 40, 50];

//배열의 맨끝에 요소 추가( 파라미터 수 제한 없음)
data.push(60, 70);
console.log(data);
//[10,20,30,40,50,60,70]

//마지막 요소를 리턴하고 제거
const k= data.pop();
console.log(k);     //70
console.log(data);
//[10,20,30,40,50,60] 원본꺼내고 원본에서 삭제

//맨앞 요소 리턴하고 제거
const x= data.shift();
console.log(x);     //10
console.log(data);
//[20,30,40,50,60]

//맨앞에 요소 추가(파라미터 수 제한 없음)
data.unshift(0,10);
console.log(data);
//[0,10,20,30,40,50,60,70]

//2번째 위치부.터. 3개를 잘라서 반환하고 원본에서는 제거
const z= data.splice(2, 3);
console.log (z);    //[20,30,40]
console.log(data);
//[0,10,50,60]

//0번째 위치부.터. 2개를 제거하고 그 위치에 다른 요소들 배치
/*제거수< 추가되는 원소수 =>배열 확장.기존 원소들은 뒤로 밀림
제거수> 추가되는 원소수 => 배열 축소*/
data.splice(0,2, 'a','b','c');  //(시작위치,갯수,추가되는 원소)
console.log(data);
//['a','b','c',50,60]

data.splice(3,0, 'd','e');  //삭제할 원소수 0으로 지정: 중간 삽입 효과
console.log(data);
//['a','b','c','d','e',50,60]   기존의 원소들은 뒤로 밀려남


//a에 b와c를 결합한 새로운 배열 반환
const a=[1, 2];
const b=[3,4,5];
const c=[6,7,8,9];
const d= a.concat(b,c);
console.log(d);
//[1,2,3,4,5,6,7,8,9]



