//배열 탐색 방법

const arr= [10,20,30,40,50];

//배열에 대한 반복 처리1- 배열의 원소 스캔
for (let i=0;i<arr.length; i++){
    if(i ==3){
        console.log("반복 중단!");
        break;
    }
    console.log("%d번째 원소=> %d", i, arr[i]);
}
console.log("-----");

/*콜백 함수에게 배열의 값과 인덱스를 전달
콜백 함수는 원소의 수만큼 순차적 실행됨*/
arr.forEach((v,i)=>{        //파라미터명은 변경해도 상관없음(원소, 인덱스)

    if(i ==3){
        console.log("반복중단!");
        return;
        /*콜백함수 역시 함수,break를 사용해서 중단 x
        break쓰면 문법 에러.for와 while문 안에서만 사용 가능
        return을 중간에 쓰면 현재만 종료, 전체 반복에는 영향x
        */
    }
    console.log("%d번째 원소=> %d", i, v);
});
console.log("-----")


//배열에 대한 반복 처리2- 탐색 중단
arr.some((v, i) => {    //some함수는 콜백함수가 true를 리턴하는 순간 순환 중단
    if(i == 3){
        console.log("반복 중단!");
        return true;
    }console.log("%d번째 원소=> %d", i, v);
});
console.log("-----")

//배열에 대한 반복 처리3- 콜백함수에서 리턴하는 값을 하나의 배열로 묶기

//전통적인 방법
const d1= [];
for(let i=0; i<arr.length; i++){
    if(arr[i]% 4 ==0){
        d1.push(arr[i]);    //배열의 맨뒤에 새로운 원소 추가- 확장
    }
}
console.log(d1);

//foreach를 사용하는 방법
const d2= [];
arr.forEach((v,i) =>{
    if(v% 4 ==0){
        d2.push(v);
    }
});
console.log(d2);
//for문보다 처리속도가 빠름

//map 함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
const hello =arr.map((v, i) => v+ 1);   
//화살표함수 처리로직이 한줄인 경우:{},;,return키워드 생략가능
console.log(hello);
/*(=)
const hello=arr.map(function(v,i){
    return v+1;
});

(=)
const hello= arr.map((v, i)=> {
    return v+1;
});
*/

//원본배열을 가공해 새로운 배열을 만들때?map

