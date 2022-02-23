
const data = ["!","요", "세", "하","!", "녕","안"];

const p = parseInt(data.length/2);
for (let i=0; i<p; i++) {
    const k =data.length- i -1; 
    const tmp =data[i];  
    data[i] = data[k];
    data[k] = tmp;

}
console.log(data);