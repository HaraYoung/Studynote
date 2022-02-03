
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

 grade = [
     [ 263, 87.67],
     [ 206, 68.67],
     [ 224, 74.67],
     [ 297, 99.00]
 ]
 let class_sum =0;
 let class_avg =0;
 for (let i=0; i<grade[i]; i++){
     for(let j=0; j<grade[i]; j++){
         class_sum+= grade[i][j];
     }
 }
console.log();

//문제11

let inven = [
[500, 320, ]

]
//문제12
