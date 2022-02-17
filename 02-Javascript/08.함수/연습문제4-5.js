//문제 4
//화살표 함수가 적용된 재귀함수로 다시 구현
/*
    function printStar(max){
        for( let i=0;i<max;i++){
            let str= "";
            for(let j=0; j<i+1; j++){
                str+="*";
            }
          console.log(str);
        }
    }
    printStar(5);

*/
//max는 최대 행수, current는 현재 출력중인 행의 위치
const printStar= (max, current=1)=> {
    if(current>max){
        return;
    }else{
        //한줄을 출력하기 위한 코드는 구성해야함
        let star="";
        for( let j=0; j<current;j++){
            star+="*";
        }
        console.log(star);
       printStar(max,current+1);

    }
};
printStar(5);

let str="";
str+="*";
console.log(str);

//문제5
//화살표 함수가 적용된 재귀함수로 다시 구현
/*function printRevStar(max){
    for( let i=0;i<max;i++){
        let str= "";
        for(let j=0; j<max-i; j++){
            str+="*";
        }
      console.log(str);
    }
}
printRevStar(5);
*/
const printRevStar= (max, current=1)=> {
    if(current>max){
        return;
    }else{
        //한줄을 출력하기 위한 코드는 구성해야함
        let star="";
        for( let j=0; j<max-current+1;j++){
            star+="*";
        }
        console.log(star);
       printRevStar(max,current+1);

    }
};
printRevStar(5);