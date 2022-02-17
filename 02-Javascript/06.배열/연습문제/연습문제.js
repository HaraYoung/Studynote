
//문제1
var check_list = [true, false, false, true, false];
console.log("before ->" + check_list);

const a = parseInt(check_list.length/2);
for (let i =0; i<a; i++){
    const b = check_list.length -i -1
    
    const c =check_list[i];
    check_list[i] = check_list[b];
    check_list[b] = c;
}

console.log("after ->"+ check_list);

//문제 2
var grade = [75, 82, 91];


var sum =0, avg =0;

for(let i=0; i<grade.length; i++){
   
        sum +=grade[i];
        
        }
//평균 구하기
avg = sum/ grade.length;

avg = avg.toFixed(2);
console.log("총점: " +sum + "점, 평균점수: "+avg + "점");

//문제3

var time = [7, 5, 5, 5, 5, 10, 7];
let money =0;
let x= 0;
for (let i=0; i<time.length; i++){
    if(i<4){
        x=4500
    }else{x= 5200}

    money +=time[i] *x;
}
console.log("1주일간 전체 급여:" + money+"원");


//문제4 
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;


for(i=0; i<price.length; i++){
    money+= price[i] *qty[i];
}


console.log("전체 결재 금액: " +money + "원");

//문제 5
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
let money=  price[0] *qty[0];

for(let i=1; i<price.length; i++){
     const sum = price[i]* qty[i];
       if(money< sum){
            money = sum;
        }
}  

console.log("가장 높은 금액: "+money +"원");

//문제6
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
let money= 0;

for(let i=0; i<price.length; i++){
    const sum = price[i] *qty[i]; 
    if(sum>=80000){
        money++;
    }
} 
 console.log("무료 배송 항목:" +money+ "건");

//문제7
    var price = [209000, 109000, 119000, 109000, 94000];
    console.log("상품 가격-->" + price);
    
    for(var i=0; i<price.length-1; i++){
        for(var j=i+1; j<price.length;j++){
            if(price[i]> price[j]){
            var tmp = price[i];
            price[i]= price[j];
            price[j] =tmp;
            }
        }
    }
    console.log("낮은 가격순 ->"+price);


    //문제8
var arr = [5, 3, 2, 8, 9];
console.log ("before->"+ arr);
for (var i =0; i<parseInt(arr.length/2); i++){
    var tmp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tmp;

}
console.log("after ->"+ arr);

//문제9
var student = ['둘리', '도우너', '또치', '희동'];
var grade=[
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];

 var sum =0,avg =0;
//student[0]= grade[0];

 for(i=0;i<grade.length; i++){
     sum =0;
     for (let j=0; j<grade[i].length; j++){
         sum+= grade[i][j];
     }
     avg = sum/grade[i].length;
     avg = avg.toFixed(2);
     
     console.log(student[i] + "의 총점은" +sum+"이고 평균은 " +avg +"입니다.");

 }
 
 //문제10
 //반평균 = 평균점수 총합/ 학생수
 var student = ['둘리', '도우너', '또치', '희동'];
var grade=[
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];

 var sum =0,avg =0;

 let class_sum=0;       //학생별 평균총합
 let class_avg=0;       //반평균

 for(i=0;i<grade.length; i++){
     sum =0;
     for (let j=0; j<grade[i].length; j++){
         sum+= grade[i][j];
     }
     avg = sum/grade[i].length;
     class_sum+= avg;
     avg = avg.toFixed(2);      //반점수 구한후 적용
     
     console.log(student[i] + "의 총점은" +sum+"이고 평균은 " +avg +"입니다.");

 }
 class_avg= class_sum/ student.length;
 class_avg.toFixed(2);
 console.log("반평균 ="+ class_avg +"점");

//문제11

let in1 = [
[500, 320, 100, 120, 92, 30],
[291, 586, 460, 558, 18, 72]
];
let x= 0;
for (let i=0; i<in1[0].length; i++){
    x += (in1[0][i] *0.9) * in1[1][i];
}


console.log("아이템 총 판매가격: "+ x +"G");
//문제12

//자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 ssn을 아래와 같이 정의하시오.

ssn = [9,2,1,8,3,1,2,3,4,6,3,1,2]
/*정의된 배열을 활용하여 유요한 주민등록번호인지 아닌지를 판별하는 코드를 구현해보자.
기본 주민등록코드에는 각 숫자에 대응하는 가중치가 있다. 
가중치는 주민등록번호의 순서에 따라 2 3 4 5 6 7 8 9 2 3 4 5 이다.
먼저 마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합한다.
합한 값을 11로 나눈 나머지 값을 구한다.
11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다.
나머지의 1의 자리 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.
*/
//가중치 변수정의=>2부터 시작
let k= 2;
let sum =0;
for(let i=0;i<ssn.length-1; i++){
    sum+= ssn[i]* k;
    //다음번 숫자와 곱해야하니 가중치 1증가
    k++;
    //가중치 값 9보다 크면 2로 리셋
    if(k>9){
        k=2;
    }
}
let mod = sum %11;
let x= (11-mod) % 10;
let y = x%10;
if( y== ssn[ssn.length-1]){
    console.log("유효한 주민번호 입니다");}
    else{
        console.log("유효하지 않는 주민번호 입니다");
    }
