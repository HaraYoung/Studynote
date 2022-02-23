for (let i=0; i<7; i++){   //행 =>7개의 행 생성
    let str ="";
    for (let j=1; j<i+1; j++){  //열
        str +="*";
    }
    console.log(str);
}
let star= function(n){
for (let i = 1; i < n; i++) {
  let floor = '';
  for (let j = 1; j < n; j++) {
    if (n -i < j)   {
      floor += '*';
    } else {
      floor += ' ';
    }
  }
  console.log(floor);
 }
}
star(7);


let msg = "aaaaaaaaffeerepoeneppppfqq"
let sum=0;
   let e1= msg.indexOf("e");
   while( e1 !== -1){
       sum++;
       e1=msg.indexOf("e",e1+1);
   }
   console.log(sum);


//개강 후 몇일이 지났는지 계산
const date= new Date();
const ts1= date.getTime();
const prevDay= new Date(date.getFullYear(),0,18);
const ts2= prevDay.getTime();
const temp1= ts1- ts2;
const day1= Math.floor(temp1/ (24*60*60*1000));
console.log("수업을 개강한지 벌써 "+day1 +"일 지났습니다!!")