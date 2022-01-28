//학생별 총점과 평균 구하기
/*
|이름|국어|영어|수학|
|철수|92 |81 |76 |
|영희|72 |95 |84 |
|민혁|80 |86 |98|
*/
//학생 성적표 배열
const grade =[
    ["철수", 92, 81, 76 ],
    ["영희", 72, 95, 84 ],
    ["민혁", 80, 86, 98 ]
];

//이 위치에서 변수를 초기화 =>모든 학생의 총점!
let sum =0;
//2차배열 탐색
for (let i=0; i<grade.length; i++){
    //한명을 의미하는 부보안에서 변수를 초기화 =>학생 개인 총점
    let personal1_sum = 0;

    //i번째 행에서 0번째열-학생이름=>합산제외
    for (let j=1; j<grade[i].length;j++){
        //console.log(grade[i][j]);
        sum +=grade[i][j];
        personal1_sum+=grade[i][j];
    }
    //과목수에서 이름은 제외 => 길이-1
    const personal_avg= personal1_sum/ (grade[i].length-1);
    console.log("%s의 총점은 %d, 평균은 %d입니다.", grade[i][0], personal1_sum, personal_avg);
}
console.log("모든 학생의 총점은 %d입니다", sum);