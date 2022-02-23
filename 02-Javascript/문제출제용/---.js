function a(x,y){
    if(x%2==0){
        return x+1;
    }if(y<10){
        return y+1;
    }return x+y;
}
console.log(a(3,4));

let i=4;
let k=1;
switch(i){
    case 0:k++;
    case 1:++k;
    case 2:k+=2;
    case 3:k*=2;
    case 4:k+=3;
    case 5:k-=10;
    default:k--;
}console.log(k);


const nameInfo={
    firstName:"이름",
    lastName:"성",
    information : function(){
        return `사람의 이름은 ${this.lastName}과 ${this.firstName}으로 이루어져있다.`;
    }
};
nameInfo.information();

console.log(true && true && false)


var time =[7,5,5,5,5,10,7];
var money= 0;
for(let i=0;i<time.length;i++){
    let x=0;
    if(i<4){
        x+= time[i];
        money+=x*4500;
    }
    else{
        x+= time[i];
        money+=x*5200;
    }
    
}console.log(money);