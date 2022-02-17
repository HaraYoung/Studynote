//parseFloat(value)
/*주어진 값에서 변환한 보동소수점 수(실수)를 리턴
변환할수 없다면 NaN 리턴*/

//정상적인 경우
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('3.14e-2'));
console.log(parseFloat('0.0314e+2'));

//NaN 반환하는 경우
console.log(parseFloat('FF2'));
