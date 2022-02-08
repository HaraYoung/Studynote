//열번째 항목이 무엇인지 출력
function fibonacci(n){
    if (n <2){
        return n;
    }else{
        return fibonacci(n-2)+ fibonacci(n-1);
    }
}
const f= fibonacci(10);
console.log(f);

//0 1 1 2 3 5 8 13 21 34 55...
/*
f(0)=0
f(1)=1
f(2)=f(0)+f(1) =1
f(3)=f(1)+f(2) =2
f(4)=f(2)+f(3) =3
f(5)=f(3)+f(4) =5
f(6)=f(4)+f(5) =8
...

*/