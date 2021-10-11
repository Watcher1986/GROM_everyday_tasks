const numberslist = [1, 2, 3, 4, 5];

console.log(numberslist);

// input : none
// output : number

const res = numberslist.pop();
console.log(res);

console.log(numberslist);

// =========================== PUSH

// input : num (string) ... [Object]
// output : array length

const numberslist2 = [1, 2, 3, 4, 5, 6, 7];

console.log('before push ', numberslist2);

const res2 = numberslist2.push(100);
console.log(res2);

console.log('after push ', numberslist2);

// ======= SHIFT =========

// input : none
// output : number

const numberslist3 = [1, 2, 3, 12, 5, 6, 7];

console.log('before shift ', numberslist3);

const res3 = numberslist3.shift();
console.log(res3);

console.log('after shift ', numberslist3);

// ===== SLICE ==========

// input : num , num (optional)
// output : array

const numberslist4 = [2, 3, 12, 5, 6, 7];

console.log('before slice ', numberslist4);

const res4 = numberslist4.slice(2);
console.log(res4);

console.log('after slice ', numberslist4);

// ========= CALLBACK

// input : number , number , callback
// output : undefined

function sum(from, to, printer) {
  let sum = 0;
  for (let i = from; i <= to; i += 1) {
    sum += i;
  }
  printer(sum);
}

// test data

function printResult(res) {
  alert(res);
}

sum(5, 8, printResult);

// ===== FILTER ============

// input : callback
// output : new array

// callback
// input : number , index (optional) , array (optional)
// output : boolean
// OPTION 1
// function filterCallback(element, index, arr) {
//   console.log('element is : ', element);
//   console.log('index of el : ', index);
//   console.log(arr);
//   if (element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// OPTION 2
const filterCallback = (element) => element > 5;

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('before filter ', anotherNumbersList);

const filterRes = anotherNumbersList.filter(filterCallback);

console.log(filterRes);

console.log('after filter ', anotherNumbersList);

const evenPositions = anotherNumbersList.filter((el) => el > 5 && el % 2 === 0);

console.log(evenPositions);
