const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('Number list before map ', numbersList);
// input : func, obj (optional)
// output: array

// callback:
// input: value
// output: changed value
// Option 1
// const mapRes = numbersList.map(function (el) {
//  return el * el;
// });
// Option 2
const mapRes = numbersList.map((el) => el * el);

console.log(mapRes);

console.log('Numbers of list after map', numbersList);

// ===== FOREACH
// input: callback , obj (optional)
// output: undefined

// callback
// input: number , index (optional)
// output: undefined

const mapPositive = numbersList.forEach((num) => {
  if (num > 0) {
    console.log(num);
  }
});

console.log(mapPositive);
console.log('numbersList after forEach ', numbersList);

// FIND
// input: callback
// output: number || undefined

// callback
// input: number, index (optional), array (optional)
// output: number || undefined
// OPTION 1
// const findRes = numbersList.find((el) => {
//   if (el % 2 == 0 && el > 400) {
//     return true;
//   }
//   return false;
// });

// OPTION 2
const findRes = numbersList.find((el) => el % 2 === 0 && el > 0);

console.log(findRes);

// ===== REDUCE
// input: callback
// output: number

// callback
// input: acc (number) , number , index (optional)
// output: number
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
const reduceRes = transactions.reduce((acc, elem, index) => {
  acc += elem;
  return acc;
});

console.log(reduceRes);
