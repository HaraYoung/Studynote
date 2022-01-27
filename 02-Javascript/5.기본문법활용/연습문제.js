//문제 1
/*
for (let i =1; i<10; i++) {
     let x = 0;
     if(i%2 == 1){  
         for (let j= 1; j<10-i; j++){
             x=j+1;
         }console.log(x);
        }
}
*/

//문제2
/*
let i =9 ;
while (i>-1){
    console.log(i);
    i-=2
}
*/
//문제3
/*
const x =2;
const y= 3;

let num =0;  //공배수 합 넣을 변수
for (let i =1; i<20 ;i++){
    if (i%x==0 || i%y==0){
        num+=i;
    }
    
}
console.log(num);
*/

//문제4
/*
let Num1 = 0;
for (let i=1; i<=6; i++){
       
    for (let j=1; j<=6;j++ ){
        
        if (i+j==6) {
            console.log("%d ,%d" ,i,j);
            Num1++;
        
    }
        }
}
console.log("경우의 수는 %d입니다", Num1);
*/

//문제 5
/*
for (let i=0;i<4; i++){
    let str=" ";
    for(let j=0;j<4; j++){
        str+=i+j;
        if(j+1<4){
            str+=" ";
        }
    }console.log(str);
}
*/
//문제5 
/*
for (let i=0; i<4; i++){
    let str ="";
    for(let j=0; j<4; j++){
    str +=i+j
    if (j+1 <4){
        str +=" ";
        }
    }
console.log(str);
}
*/
//문제 6
/*
for (let i =0;i <7; i++){
    let str ="";
    for (let j=0; j<i+1; j++){
        str += j+1;
    }console.log(str);
}
*/
/*

for (let i =1; i <10; i++){

let x =0;

if(i%2 == 1){

for (let j =0; j<10-i; j++) {

x=j+1;
} console.log(x);

}

}

*/

/*let i = 9;*

*while (i>-1) {*

*console.log(i);*

*i-=2*

*}*

- */

/*let sum = 0;*

*for (let i=1; i<20; i++) {*

*if (i%2==0 || i % 3 ==0){*

*sum+=i;}*

*}*

*console.log(sum);*

- */
//문제7
const number =1;
//const number =2 ;
let start =number == 2 ?2:3;
for(let i= start; i<10; i+=2){
    for(let j=1; j<10; j++){
        console.log("%d x %d =%d", i , j, i*j);
    }
}