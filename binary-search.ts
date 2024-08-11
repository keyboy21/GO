// const binarySearch = (arr: number[], target: number): number => {
//     let first = 0
//     let last = arr.length - 1

//     for (let index = 0; index <= arr.length; index++) {
//         const mid = Math.floor((first + last) / 2);
//         const middle = arr[mid];

//         if (middle === target) {
//             return middle
//         } if (middle < target) {
//             first = middle + 1
//         } else {
//             last = middle - 1
//         }
//     }

//     return -1
// }

function closure(a, b) {
     return function (c) {
          return function (d) {
               if (Array.isArray(b) && Array.isArray(d)) {
                    const all = b.concat(d);
                    const allSum = all.reduce((a, b) => a + b, 0);

                    return a + c + allSum;
               }
          }
     }
}

const result = closure(5, [1, 2])(2)([1, 2]);
console.log('Result:', result);