// algo
// 1. create empty array
// 2. iterate arr
// 3. apply callback for every el
// 4. push el to the res

// input: array, func
// output: array

// callback
// input: element, index, array
// output: new array

const mapArrayElements = (arr, callback) => {
  const mapedArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const callbackRes = callback(arr[index], index, arr);
    if (callbackRes) {
      mapedArr.push(callbackRes);
    }
  }
  return mapedArr;
};

// test data 1

const array = [1, 5, 2, 7, 9, 0];

const callB = (el, index, arr) => el + 3;

console.log(mapArrayElements(array, callB)); // =>  [4, 8, 5, 10, 12, 3]

// test data 2

const array2 = [32.4, 12.04, 54.7, 7.7, 5.37];

const callB2 = (el) => '$' + el;

console.log(mapArrayElements(array2, callB2)); // =>  ["$32.4", "$12.04", "$54.7", "$7.7", "$5.37"]
