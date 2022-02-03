
// function fibb(nty){

//     let fib = []; 
//     fib[0] = 0;
//     fib[1] = 1;

//     if (nty == 0){
//         return 0;
//     }
//     if (nty == 1) {
//         return 1;
//     }

//     for (i = 2; i <= nty; i++) {
   
//         fib[i] = fib[i - 2] + fib[i - 1];
//     }
//     return fib[fib.length-1];
// }

// console.log(fibb(435));

let arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

const bubbleSort = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {                  
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
  
    return arr;
  };

  console.log(bubbleSort(arr));