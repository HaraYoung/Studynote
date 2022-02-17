//반복 회수를 구하기 위한 연산
/* 원소가 5개일 경우 반복 횟수 :2회
-> 5/2를 연산 ->연산 결과를 parseInt()명령
->나머지 버림 => 5/2->나머지 2이지만 버리고->출력 2

원소가 6개일 경우 반복 횟수 :3회
->6/2를 연산
==>즉, 배열길이/2 만큼 반복처리
[대비되는 반대쪽 위치 원소 구하기]
=>배열의 길이 - i - 1
*/

const data = [1, 5, 2, 4, 3];
console.log(data);

//반복 횟수 - 2로나누고 소수점 이하 버림
const p = parseInt(data.length/2);
for (let i=0; i<p; i++) {
    //반대쪽 원소 위치
    const k =data.length- i -1;   //c

    //i번째 원소와 k번째 원소 교환
    const tmp =data[i];  //a
    data[i] = data[k];   //a =b
    data[k] = tmp;      //b=c

}
console.log(data);