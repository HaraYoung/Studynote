
/*
for (let i =1; i <10; i++){
      let x =0;
      if(i%2 == 1){
        for (let j =0; j<10-i; j++) {
        x=j+1;
        } console.log(x);
      }    
    
}
*/


/*let i = 9;
while (i>-1) {
 
    console.log(i);
     i-=2
  }
*/

/*let sum = 0;
for (let i=1; i<20; i++) {
  if (i%2==0 || i % 3 ==0){
  sum+=i;}
}
console.log(sum);
*/

let number =2
for(let i=2;i<10;i++){
    if(number ==1){
      if (i%2!=0){
        for(let j=1; j<10; j++){
          console.log("%dX %d = %d", i,j ,i*j);
        }
        
      }else{
      if (i%2==0){
        for(let j=1; j<10; j++){
      console.log("%dX %d = %d", i,j ,i*j);
      }
    }
  }
 }
}
