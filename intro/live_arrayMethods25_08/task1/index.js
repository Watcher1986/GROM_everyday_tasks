// algo
// 1. create empty array
// 2. iterate arr
// 3. apply callback for every el
// 4. push el to the res if callback true

// input: array, func
// output: array

// callback
// input: element, index, array
// output: boolean

// OPTION 1

const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    const callbackRes = callback(arr[i], i, arr);
    if (callbackRes) {
      res.push(arr[i]);
    }
  }
  return res;
};

// test data

const array = [10, 2, 4, 2, 9, 5];

const func = (el, index, arr) => {
  console.log(`el: ${el}, index: ${index}, arr: ${arr}`);
  if (el > 7) {
    return true;
  } else {
    return false;
  }
};

// OPTION 2

console.log(filterArrayElements(array, func));

const filterArrayElements2 = (arr, callback) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

// test data

const array1 = [10, 2, 4, 2, 9, 5];

const func1 = (el) => el > 7;

console.log(filterArrayElements(array, func));

const array2 = [10, 2, 4, 2, 9, 5, 6];

const func2 = (el, index, arr) => {
  if (arr.length < 5) {
    return false;
  }
  return el > 7;
};

console.log(filterArrayElements2(array2, func2));
