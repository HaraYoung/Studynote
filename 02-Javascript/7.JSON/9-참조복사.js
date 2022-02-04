//값 복사-> 일반 변수끼리의 복사
let a =100;
let b = a;
console.log("a="+a +", b="+ b);
//a의 값을 b에 저장
a++;
console.log("a="+a +", b="+ b);
//원본 변경해도 복사본은 변경x

/*참조 복사 (=얕은복사)
배열,json,객체 끼리의 복사 참조처리
원본수정 -> 복사본 함께 수정(반대도 마찬가지)
 */
const user ={
    name: "Lee"
};

const member = user;
console.log(user);
console.log(member);

member.name ="Kim";
console.log(user);
console.log(member);

const d1= [1, 2, 3];
const d2= d1;
console.log(d1);
console.log(d2);

d1[0]+= 10;
d1[1]+= 10;
d1[2]+= 10;
console.log(d1);
console.log(d2);

//배열끼리의 값 복사(=깊은 복사)
const a1= [1, 2, 3];
const a2 = new Array(a1.length);
//아무것도없는(값이없는) 3칸짜리 칸을 만듦

//사이즈을 같은 길이로 정의 하고 값 하나씩 복사(개별 복사)
//=배열을 온전히 값복사하기 위해 원소끼리 개별복사
for (let i=0; i< a1.length; i++){
    a2[i]= a1[i];
};      

//배열객체가 갖는 메서드를 활용한 깊은복사
const a3 =a1.slice();
console.log(a1);
console.log(a2);
console.log(a3);

a1[0]+= 100;
console.log(a1);
console.log(a2);
console.log(a3);

//json 깊은 복사
const addr ={
    city: "서울",
    gu: "서초"
};

const copy= {};
//깊은 복사를 수행할 빈 json객체 생성

for (let key in addr){
    copy[key]= addr[key];
    //copy.city와 copy.gu 동일처리
};
console.log(addr);
console.log(copy);


addr.gu ="강남";
console.log(addr);
console.log(copy);

//JS가 제공하는 기능 활용
const addr ={
    city: "서울",
    gu: "서초"
};
const copy2={};
/*addr을 copy2에 깊은복사 수행하는 JS내장기능
복사될 copy2가 비어있는 json일 경우 복사
비어있지 않다면 누적(기존값+새로운값) */

Object.assign(copy2, addr);
console.log(copy2);