for (let i =0; true; i++ ){
    if (i % 2 == 1) {
        continue;
    }
    if (i>10) {
        break;
    }
    console.log("hello world : %d", i);
}
