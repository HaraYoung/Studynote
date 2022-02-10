const m3 ={
    userName: "철민",
    email: "ch@naver.com"
};

const m4= m3;
//m3와 같은구조를 갖는 m4를 정의
console.log(m3);
console.log(m4);

//값변경

m3.userName= "민수";
m3.email= "ms.gmail.com";

console.log(m3);
console.log(m4);
/*객체간의 복사는 서로 영향을 줌
객체끼리의 대입은 복사가 아닌 참조.
원본 데이터 변경-> 복사본도 변경(반대도 동일)  */