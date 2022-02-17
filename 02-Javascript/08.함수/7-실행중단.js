function returnBreak(x, y){
    if(x<10){
        return -1;
    }
    if (y<10){
        return -2;
    }
    return x+ y;
}
//첫번째 if문에 의해 처리 중단,-1 반환
console.log(returnBreak(1,100));

//두번째 if문에 의해 처리 중단,-1 반환
console.log(returnBreak(100,1));

//정상 실행
console.log(returnBreak(100, 20));

