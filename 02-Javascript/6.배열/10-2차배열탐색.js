//2차배열 탐색
const myArr =[
    [1, 2, 3],
    [4, 5, 6, 7, 8]
]

//배열 자체의 길이는 행을 의미
console.log(myArr[0].length);
console.log(myArr[1].length);

//2배열 반복문으로 탐색 ->2중 반복문 사용

//바깥은 행을 담당
for (let i=0; i <myArr.length; i++){
    console.group(i + "번째 행 -----");
    console.log(myArr[i]);
    //안쪾은 i번째 행에 대한 열을 담당
    for (let j=0; j<myArr[1].length; j++){
        console.log(myArr[i][j]);
    }
    console.groupEnd();
}