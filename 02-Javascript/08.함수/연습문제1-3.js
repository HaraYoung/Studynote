
//문제1 별찍기
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

//문제2 역순 별찍기
function printRevStar(max){
    for( let i=0;i<max;i++){
        let str= "";
        for(let j=0; j<max-i; j++){
            str+="*";
        }
      console.log(str);
    }
}
printRevStar(5);


//문제3
//3,6,9에 해당하면 "짝"출력 아닌경우 숫자 출력
//박수를 총 몇번 쳤는지 리턴하는 myGame(n)작성

function myGame(n){
    
    let x=0;
    for (let i=1; i<=n; i++){
        //i를 문자열로 변환
       
        const str= i+"" // 숫자를 문자열로 만들려면 빈문자열 +
        let say= "";
        let clap= 0;
        for(let j of str){
            if ("3"==j|| "6"==j || "9" ==j){
            say+= "짝";
            clap++;
            }
        }
        if (clap ==0){
            console.log(i);
        }else {
            console.log("%s (%d) -> %d번", say, i, clap);
            x+= clap;
        }
    }
console.log("박수를 총 %d번 쳤습니다.",x);
}
myGame(15);