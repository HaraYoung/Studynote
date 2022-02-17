//반복 범위 동작 설정
/*자식 조건식이 부모 조건 변수를 활용하여 새로운 값 게산
-> 자식 범위에 변화를 줄수 있다.*/

for (let i=0; i<5; i++){  //i =0~4
    console.group("i에 대한 반복 수행 시작 >> i=" +i);
    for (let j=0; j<i+1; j++){  //j = i(0~4)+1 보다 작다 =>5보다 작다 =4
        console.log("i=%d, j=%d", i ,j);
    }
    console.groupEnd();
}