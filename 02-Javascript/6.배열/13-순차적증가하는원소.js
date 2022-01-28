/*
6행 7열인 2차배열
배열의 모든 칸에 1부터 순차적으로 증가하는 값을 할당
단,i가 0일때 j가 3보다 작다면 0을 대입.
인덱스가 3인 위치부터 1씩 증가하는 값 할당.
또한 counter가 30보다 크다면 그 자리에는 0을 대신 할당 
*/ 
//6행 7열 배열 만들기
let data = new Array(6);
for (let i=0; i<data.length; i++){
    data[i] = new Array(7);
}
console.log(data);

//1씩 증가할 값
let counter =1;
for (let i=0; i<data.length; i++){
    for (let j=0; j<data[i].length; j++){
        if (i == 0&& j <3 || counter >30){
            data[i][j] =0;    
        } else {
            data[i][j] = counter++;
        }
    }
}
console.log(data);

//출력하기
for( let i=0; i<data.length; i++){
    let str ="";
    for (let j=0;j<data[i].length; j++){
       if (data[i][j] == 0){
        str +="\t";
    }else {
        str+= data[i][j] +"\t";
    } 
 }console.log(str);
}