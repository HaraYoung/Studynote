//예제를 위한 임의JSON
const student ={
    studon: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-1234-1234"
};
/*JSON이나 멤버변수를 갖는 객체에 대한 반복문
->변수로 선언한 k에 객체의 key가 순차적으로 저장*/
for (let k in student){
    console.log("%s : %s", k, student[k]);
}

//key와 value 전부 스캔가능->json용
