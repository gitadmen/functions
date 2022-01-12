


function fibb(nty){

    let fib = []; 
    fib[0] = 0;
    fib[1] = 1;

    if (nty == 0){
        return 0;
    }
    if (nty == 1) {
        return 1;
    }

    for (i = 2; i <= nty; i++) {
   
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[fib.length-1];
}

console.log(fibb(435));