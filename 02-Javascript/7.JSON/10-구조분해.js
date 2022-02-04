//json에 대한 구조 분해(=비구조 할당)
const object ={ a:1, b: 2};

/*   json(혹은 객체)에서 값들을 추출하여 새로운 상수로 만들어줌
    ->object에는 {}안에 명시된 항목과 동일한 key를 같는 데이터가 존재햐야함
    원본key 이름 일치해야함
 */
const {a, b}= object;
/* = const a= object.a;
     const b= object.b;*/
console.log(a);
console.log(b);

//구조분해를 활용해 데이터만 추출

const data= {name:"hello", age: 20, height: 172, weight: 85};
const {name} = data;
console.log(name);
//data안에 hight와 weight를 분해하고 h와 w로 이름변경
const {height: h, weight: w} = data;
console.log(h);
console.log(w);
console.log(data);

//구조분해를 수행한 나머지 별도 분리하기
const dummy={a1: 100, a2: 200, a3: 300, a4: 400};
const {a1, a2, ...rest_b}= dummy;
console.log(a1);
console.log(a2);
console.log(rest_b);
//-> rest_b는 변수이름이므로 변경가능

//구조분해를 활용해 기존 데이터와 추가적인 값을 병합한 새로운 객체 생성
//'...'뒤에 오는 변수명은 반드시 원본 객체 이름!
const origin= {name: "java", age: 25};
const newdata1= {...origin,gender: "M"};
console.log(newdata1);
//구조분해를 통해 새로운 데이터 생성시 원본과 동일한 속성 존재=>원본데이터 수정
const newdata2= {...origin, age: 30, gender: "F"};
console.log(newdata2);

//배열에 대한 구조분해
//기본
const array= [1, 2];
const [one, two]= array;
console.log(one);
console.log(two);

//구조분해를 수행한 나머지 별도분리
[b1,b2, ... rest1]= [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1);
console.log(b2);
console.log(rest1);