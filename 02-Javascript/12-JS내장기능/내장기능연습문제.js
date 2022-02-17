//문제1
const email = "qkrtpdud9899@gmail.com";
p= email.indexOf("@");
id= email.substring(0, p);
domain= email.substring (p+ 1);
console.log(id);
console.log(domain);


//문제2
ssn = '020517-3******';
let date1= new Date();
const now_year= date1.getFullYear();
let yy= parseInt(ssn.substring(0,2));
let mm= parseInt(ssn.substring(2,4));
let dd= parseInt(ssn.substring(4,6));
let gen= parseInt(ssn.substring(7,8));

yy= (gen>2) ? yy +2000 : yy +1900;
const age= now_year- yy+ 1;
const sex= (gen% 2) ? "남자" : "여자";

console.log(yy+ "년 "+ mm+ "월 "+ dd+ "일에 태어난 "+ sex+ "입니다.");




//문제3

str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."

let word= "수업시간";
let flen= word.length;
let find= true;
let count= 0;
while(find){
    let p= str.indexOf(word);
    find= p> -1;
    if(find){
        count++;
        str= str.substring(p+ flen);
    }
}
console.log(count);
/*
var text = 'aaabbbaaabababaaaabaa';
var count = 0;
var searchChar = 'a'; // 찾으려는 문자
var pos = text.indexOf(searchChar); //pos는 0의 값을 가집니다.

while (pos !== -1) {
  count++;
  pos = text.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
}

console.log(count); // 로그에 14를 출력합니다.
*/

//문제4

function random(n1, n2){
    return parseInt(Math.random()* (n2- n1+ 1))+ n1;
}
//let rnd= random(1,45);
let lotto= [];
for( let i =0; i<6; i++){
    //중복되는걸 걸러내야함...
    while(true){      //중복안돼는 숫자가 몇번째가 생성될지 알수없다.무한반복
        let rnd= random(1,45);
        if(!lotto.includes(rnd)){
            //rud값이 lotto배열 안의 원소와 중복되지 않는다면
        lotto.push(rnd);      //배열이 차 들어감..?
        break;
        }
    }
}
console.log(lotto);

//문제5

function random(n1, n2){
    return parseInt(Math.random()* (n2- n1+ 1))+ n1;
}

const balls = new Array(45);
/*balls.forEach((v, i)=> {    //forEach는 원소가 있어야 동작...
    balls[i]= i+ 1;
}); */

for(let i= 0; i<balls.length; i++){
    balls[i]= i+1;
}

const lotto= new Array(6);
for (let i=0; i<lotto.length; i++){
    //balls의 인덱스범위 안에서 임의의 위치를 선정
    const rnd= random(0, balls.length-1);
    
    //balls의 임의의 원소하나 추출해 lotto 배열에 채우기
    lotto[i]= balls[rnd];

    //rnd번째 위치에서 하나의 데이터를 잘라냄
    balls.splice(rnd, 1);   //길이를 하나씩 줄이기에..?
}
console.log (lotto);


//문제6
/*핵심:단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
participant원소 중에서 completion에 포함되지 않는 하나의 원소를 찾아
answer에 저장하는것*/

function solution(participant, completion) {
    var answer = '';
    //for문
    for( let i=0; i<participant.length; i++){
        const p= participant[i];
        if(!completion.includes(p)){
            answer= p;
            break;
        }
    }

    //배열some함수 사용
    /*participant.some((v, i)=> {
        if(!completion.includes(v)){
            answer= v;
            return true;
        }
    });
*/    return answer;
    //participant의 원소를 탐색해 completion에 속하지 않음을 확인하는 순간 반복 중단.
}
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"], 
                     ["eden", "kiki"]));

// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                     ["josipa", "filipa", "marina", "nikola"]));

// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"], 
                     ["stanko", "ana", "mislav"]));
