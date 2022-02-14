//날짜 계산
/*
timestamp 확인하기
getTime()함수는 timestamp를 밀리세컨드 단위로 환산해 반환함
*/
const date= new Date();
const ts1= date.getTime();
console.log(ts1);

//몇일 지났는지 계산
const prevDay= new Date(date.getFullYear(), 0, 1);   //현제 년도값
const ts2= prevDay.getTime();
const tmp1= ts1- ts2;   //ts1=오늘, ts2=1월1일
const day1= Math.floor(tmp1/(24* 60* 60* 1000));
/* 계산 결과를 날짜 단위로 환산
=> 24시간* 60분* 60초* 1000
과거의 시점으로부터 지나온 시간을 계산할 경우 소수점을 내림*/
console.log("올해는 "+ day1+ "일 지났습니다.");


//몇일 남았는지 계산
const nextDay= new Date(date.getFullYear(), 11, 31);    //12월31일
const ts3= nextDay.getTime();
const tmp2= ts3- ts1;
const day2= Math.ceil(tmp2/(24* 60* 60* 1000));
//미래의 시점으로 남은 시간을 계산할 경우 소수점을 올림
console.log("올해는 "+ day2+ "일 남았습니다.");


//지금으로부터 30일 후
const a= date.getDate()+ 30;    //오늘날짜 +30
//단위가 수용할수 있는 값이 초과될 경우 자동으로 올림 처리
date.setDate(a);
console.log(date.toLocaleString("ko-KR"));

//30일이 지난 후에서 다시 100일전 계산
const b= date.getDate()- 100;
date.setDate(b);
console.log(date.toLocaleString("ko-KR"));

//응용
const today= new Date();    //오늘 날짜 객체
today.setDate(1);   //이번달 1일로 이동
const startDay= today.getDay(); //오늘 날짜에 대한 요일을 뽑는다
console.log(startDay);  //화요일=2

//이번달의 마지막날은 몇일인지 구함-> 다음달 0번째 날짜를 구함
const m= today.getMonth();  //1
today.setMonth(m+ 1);   //3월=2
today.setDate(0);   //3월0일->2월 28일
const lastDate= today.getDate();
console.log(lastDate);

//6행7열 빈배열 생성
let data =new Array(6);
for (let i=0;i<data.length; i++){
    data[i]=new Array(7);
}

let counter=1;     //1씩 증가할 값
for(let i=0; i<data.length; i++){
    for(let j=0; j<data[i].length; j++){
        if (i == 0 && j< startDay || counter> lastDate){
            data[i][j]= 0;
        }else{
            data[i][j]= counter++;  //counter를 먼저 대입후 counter증가
        }
    }
}
for (let i=0; i<data.length; i++){
    let str= "";
    for(let j=0; j<data[i].length; j++){
        str+= data[i][j] ==0 ?" \t ": (data[i][j]+ " \t");
    }console.log(str);
}

