//이중 반복문
/*부모(바깥 반복문)가 1회 수행할때 마다 자식(안쪽 반복문)이
매번 처음부터 새로 시작하는 이중 반복문*/

//두 반복문간의 조건값이 서로 달라야한다.
for (let i = 0; i<3; i++){  //i =0~2
    console.group("i에 대한 반복 수행 시작 >> i =%d", i);
    for (let j=0; j<5; j++) {  //j =0~5
        console.log("i=%d, j=%d", i ,j);
    }
}
console.groupEnd();