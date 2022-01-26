//and -전체가 참인 경우만 결과 :참
console.group("And");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.groupEnd();

//and연산 여러개 사용
console.group("and연산 여러개 사용");
console.log(true && true && true);
console.log(true && true && false);
console.log(false && false && true);
console.log(false && true && true);
console.groupEnd();

//or - 하나라도 참이 포함되어있는 경우 :참
console.group("or");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.groupEnd();

//or 연산 여러개 사용
console.group("or연산 여러개 사용");
console.log(true || true || true);
console.log(true || true || false);
console.log(false || false || true);
console.log(false || true || true);
console.groupEnd();

//복합 사용
console.group("복합사용");
//and가 항상 or 보다 우선
console.log(true && true || true);
console.log(true && true || false); //and가 true이니까.
console.log(false && false || true);
console.log(false && true || true);

console.log(true || true && true);
console.log(true || true && false);
console.log(false || false && true);
console.log(false || true && true);
console.groupEnd();