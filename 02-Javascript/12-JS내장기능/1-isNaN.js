//isNaN(value)

/*NaN의 여부는 ==,===을 통해 판별할수 없기에 판별하는 함수 필요
파라미터로 전달된 값이 NaN일 경우 true, 아닐경우 false 반환
    =>숫자가 아닐경우 true, 
    숫자일 경우, 숫자로 변환 가능한 형식일 경우 false
*/

//숫자로 변환할수 없다고 판단하는 경우
console.log(isNaN(NaN));
console.log(isNaN(undefined)); 
console.log(isNaN({})); 
console.log(isNaN('baba')); 
console.log(isNaN('123asd')); 

//숫자로 변환할수 있다고 판단하는 경우
console.log(isNaN(true));   //1 
console.log(isNaN(null));   //0
console.log(isNaN(33)); 
console.log(isNaN('61'));   //''제거하면 숫자로 변환가능 
console.log(isNaN('12.4')); 
console.log(isNaN(''));     //빈문자열= 0
console.log(isNaN(' '));    //공백으로 구성된 문자열=0


