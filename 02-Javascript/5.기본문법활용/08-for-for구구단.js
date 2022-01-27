//구구단

for (let i=2; i<10; i++){  //2단~9단
    console.group("%d단",i);
    for (let j =0; j<10; j++) {  //j =1~9
        console.log("%d x %d =%d", i , j ,i*j);
    }
    console.groupEnd();
}

