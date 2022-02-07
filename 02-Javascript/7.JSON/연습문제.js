//문제1
const student =[
    "A", "A", "A",
    "O", "B", "B",
    "O", "AB", "AB", "O"
];
//아래와 같은 json을 정의하고
//각 혈액형별 학생수를 아래 json의
//각key에 대한 value에 저장(for문 활용)
const result = {"A": 0, "B": 0, "AB": 0, "O": 0};
for (const b of student){
    //b는 배열의 원소들 출력
    //console.log(result[b]); =>지금은 0 출력
//result[b]의 b는 student의 값을 하니씩 대입해 result의 맞는값에 대입 
    result[b]++;
}
console.log(result);

//result json에 student의 값을 나누어 담아야함..맞게..

//문제2-1

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
//json의 key에 대한 반복 처리
for(const key in exam){
    let sum=0;
    //총점을 위한 변수 초기화
    for(const p of exam[key]){      //exam[key]는 학생 한명의 각 점수 배열
        //이 배열의 원소를 스캔하는 반복문을 이용해 총점 구하기
        sum+= p;

    }


let avg= sum /exam[key].length
console.log("%s의 총점은 %d이고 평균은 %d점 입니다.", key, sum, avg);
};
//json의 key 이름만 배열로 뽑는것이 필요한가?ㅇㅇ..
/*const keys = Object.getOwnPropertyNames(exam);
console.log(keys);

for(const k of keys)름
    console.log(exam[k]);
}

//학생별 총점과 평균
let sum=0;
let avg=0;
for (let i=0; i<keys.length; i++){
    sum=0;
    for (let j=0; j<exam[k].length; i++){
        sum+= exam[i][j];
    }
    avg= sum/exam[k].length;
    avg= avg.toFixed(2);
    console.log(exam.key +"의 총점은"+ sum +"이고 평균은 "+ avg+ "점 입니다");
}
*/
//문제2-2
//국어,영어,수학,과학 순의 성적
//수학 과목의 모든 학생 총점과 평균
let sum=0;     //전체학생의 총점이므로 바깥에 변수초기화
let student_count=0;
/*
json은 길이를 알수없다.
json의 원소 하나를 반복문으로 스캔할때마다 count변수를 1씩 증가시켜 전체 학생수를 알아내야함.
*/
for(const key in exam){     //key:: 학생들 이름
    sum+=exam[key][2];
    //몇번째 학생인지 카운트
    student_count++; //학생을 한명씩 센다..
};
let avg= sum/ student_count;

console.log("모든 학생의 수학 총점은 %d이고 평균은 %d점 입니다.", sum, avg);


//문제3-1
//1/25~2/1 까지 일별 확진자수
covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]
//누적 확진자수(active총합)와 일평균 확진자수(active총합/covid19.length)
let sum=0;
for (const j of covid19){
    console.log(j.active);
    sum+= j.active;
};
console.log("누적 확진자수: %d", sum);
console.log("평균 확진자수: %d", sum /covid19.length);


//문제 3-2 최댓값
//active의 값중에서 최댓값에 매칭되는 date의 값

let max_active= covid19[0].active;
let max_day=  covid19[0].date;

for(const j of covid19){
    if(max_active<j.active){
        max_active=j.active;
        max_day= j.date;
    }
}
console.log("확진자가 가장 많이 발생한 날:%s", max_day);