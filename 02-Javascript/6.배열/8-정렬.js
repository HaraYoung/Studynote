//배열 순서대로 정렬
const data = [ 2, 4, 5, 3, 1];
console.log(data);

//i는 배열 원소중 마지막 제외한 항목 스캔
// i < data.length-1
for (let i =0; i < data.length-1; i++) {
    //j는 배열의 원소중 i번째 다음 원소부터 마지막 원소까지 쭉 스캔
    //j = i+1 - j<data.length(끝까지)
    for (let j= i+1; j<data.length; j++){
        //">" 오름차순(순차정렬)
        //"<" 내림차순(역순정렬)
        if (data[i] > data[j]){
            const tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}
console.log(data);