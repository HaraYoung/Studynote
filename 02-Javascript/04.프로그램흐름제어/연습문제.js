const 수학 = "B";

if (수학=="A") {
    console.log("이 과목을 Pass 했습니다.");
} else if (수학 =="B") {
    console.log("이 과목을 Pass 했습니다.");
} else if (수학 =="C") {
    console.log("이 과목을 Pass 했습니다.");
} else {console.log("이 과목을 Pass하지 못했습니다.")
}
/*
const 수학 ="B";
if (수학 =="A" || 수학 =="B" || 수학 =="C"){
    console.log("이 과목을 Pass 했습니다.");
} else if console.loge("이 과목을 Pass하지 못했습니다.")
*/



//문제2

//2씩증가,합산
let q=1;
let w=1;

while (w <= 10) {
    q *=2;
    console.log("이진수%d개는 %d의 정보를 표시가능",w ,q);
    w++;
}
console.log("이진수%d개는 %d의 정보를 표시가능",w ,q);
console.log("10개의 이진수 총갯수 :" + q);



//문제3
let x = 1;
for (let i = 1; i <= 10; i++) {
    x *= 2;
    console.log("이진수%d개는 %d의 정보를 표시가능", i, x);

}
console.log("10개의 이진수 총 갯수:" + x);