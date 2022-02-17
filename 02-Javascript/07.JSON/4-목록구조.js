const student1 ={
    studno :10101,
    grade :1,
    name :"학생1"
};
const student2 ={
    studno :20201,
    grade :2,
    name :"학생2"
};

//목록 구조를 갖는 json객체
const classRoom = {
    student: [student1, student2]
};
console.log(classRoom);

//배열 기본 특성 활용->반복문으로 접근
for(let i=0; i<classRoom.student.length; i++){
    console.group(i+ "번째 학생");
    console.log("->학번: " + classRoom.student[i].studno);
    console.log("->학년: " + classRoom.student[i].grade);
    console.log("->이름: " + classRoom.student[i].name);
    console.groupEnd();
}

//for-of문 사용: 몇번째 항목인지 알기위해 반복문 시작전 
//별도의 초기식과 반복문 안 별도의 증감식 추가해야함
i=0;
for (const s of classRoom.student){
    console.group(i+ "번째 학생")
    console.log("->> 학번:" + s.studno);
    console.log("->> 학년:" + s.grade);
    console.log("->> 이름:" + s.name);
    console.groupEnd();
    i++
}