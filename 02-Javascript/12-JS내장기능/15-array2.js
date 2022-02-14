//배열 탐색

/*  *요소를 찾을때 완전 항등 연산자(===)를 사용하니 유의해야함
    *false를 검색할시 정확히 false를 검색함(0을 검색하진 않는다.)
*/
/*
arr.indexOf(item,from)
인덱스 from부터 시작해 item(요소)을 찾음
요소를 발견하면 해당 요소의 인덱스를 반환
*/
/*
arr.lastIndexOf(item,form)
arr.indexOf(item,from)메서드와 동일한 기능
검색을 끝에서부터 시작
두번째 파라미터(from)이 없으면 처음부터 탐색
*/
let arr1= [1, 0, false];
console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null));
//발견하지 못하면 -1을 반환

/*
arr.includes(item,from)
인덱스 from부터 시작해 item이 있는지를 검색
해당 요소를 발견하면 true 반환
있다 없다만 판별
요소의 위치를 정확하게 알고싶은게 아니고 요소가 배열내에 존재하는지 여부만 확인할때 용이
NaN도 제대로 처리함(IndexOf/lastIndexOf과의 차이점)
 */
console.log(arr1.includes(1));
console.log(arr1.includes(100));


//배열 검색

const arr3=[5,12,8,151,44];
/*
주어진 판별함수를 만족하는 첫번째 값 반환
못찾으면 undefined를 반환
규칙을 충족하는것을 검색
찾고자하는 항복이 아닌 검색규칙을 구현한 콜백함수를 전달됨
 */
const found= arr3.find(function(v){     //v를 원하는 조건에 충족하는지 검사-true/false 리턴
    console.log(v);
    //파라미터로 전달되는 v배열의 모든 원소가 순차적으로 전달
    if(v%2 == 0){
        return true;
        //true가 리턴되는 경우: v는 found에 저장
    }else{
        return false;
        //false가 리턴되는 경우: v는 버려짐
    }
});
console.log(found);


//filter는 배열, 맞는값을 저장. 모든원소를 탐색하기 전까지 종료x
//i는 배열 인덱스값? arr은 배열자체가 계속 들어오는것

//배열 정렬
/*
퀵정렬 알고리즘을 사용해 배열 자체를 정렬
->배열의 모든 원소를 문자열로 취급함,sort는 문자 정렬 기준으로 정렬함
sort 함수도 정렬조건을 콜백함수로 처리*/
const arr5= [2,1,15];
arr5.sort(function(a,b){
    //정렬을 위해 비교되는 원소값들이 파라미터로 전달
    console.log("a=%s, b=%s", a, b);
    if(a> b){       //리턴값이 양수인 경우: a가 b보다 크다
        return 1;
    }else{          //리턴값이 음수인 경우: b가 a보다 크다
        return -1;
    }
});
console.log(arr5);

//역순 배치
let arr6= [1,2,3,4,5];
arr6.reverse();
console.log(arr6);
