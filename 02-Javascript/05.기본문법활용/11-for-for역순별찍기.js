//역순으로 출력하기
/*7번출력하기
i가 0일때 7회 수행하기 위해 j<7 =>7-0
i가 1일때 6회 수행하기 위해 j<6 =>7-1
.
.
i가 n일때 i+1회 수행하기 위해 j<i-1
*/
for (let i=0; i<7; i++){
    let str ="";
    for (let j =1; j<7-i; j++){
        str+="*";
    }
    console.log(str);
}