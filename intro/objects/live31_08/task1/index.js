// 1. Learn requirement
// 2. Create step by step algo (& input/output for function)
// 3. Write draft solution & testing
// 4. Refactoring & final testing => final solution

// raw option

// algo :
// 1. Split each obj into array and make it flat
// 2. Compare two arrays on equal
function compareKeyValue(ele1, ele2) {
  for (let index = 0; index < ele1.length; ) {
    for (let ind = 0; ind < ele2.length; ind += 1) {
      if (ele1[index] === ele2[ind]) {
        index += 1;
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

function compareObjects(obj1, obj2) {
  const arr1 = Object.keys(obj1).concat(Object.values(obj1));
  const arr2 = Object.keys(obj2).concat(Object.values(obj2));
  return compareKeyValue(arr1, arr2);
}

// refactoring option 1

function compareKeyValue1(arr1, arr2) {
  for (let index = 0; index < arr1.length; ) {
    if (arr1[index] === arr2[index] && arr1.length === arr2.length) {
      index += 1;
    } else return false;
  }
  return true;
}

function compareObjects1(obj1, obj2) {
  const arr1 = Object.entries(obj1).flat();
  const arr2 = Object.entries(obj2).flat();
  return compareKeyValue1(arr1, arr2);
}

// refactoring option 2

function compareObjects2(obj1, obj2) {
  const arr1 = Object.entries(obj1).flat();
  const arr2 = Object.entries(obj2).flat();
  for (let index = 0; index < arr1.length; ) {
    if (arr1[index] === arr2[index] && arr1.length === arr2.length) {
      index += 1;
    } else return false;
  }
  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  // name: 'Tom',
  age: 17,
  name: 'Tom',
  // city: 'Kyiv',
};

// test data :

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true

// test data :

console.log(compareObjects1(obj1, obj2)); // ==> false
console.log(compareObjects1(obj2, obj3)); // ==> false
console.log(compareObjects1(obj1, obj4)); // ==> true

console.log(compareObjects2(obj1, obj2)); // ==> false
console.log(compareObjects2(obj2, obj3)); // ==> false
console.log(compareObjects2(obj1, obj4)); //

// input-obj,obj
// output- boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
//2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// option 1

function compareObjects3(obj1, obj2) {
  const keys1 = Object.keys(obj1);

  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  for (let index = 0; index < keys1.length; index += 1) {
    const key = keys1[index];

    const value1 = obj1[key];
    const value2 = obj2[key];

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

// test data

function compareObjects4(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  //const keys1 = Object.keys(obj1);

  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keys1.some((key) => obj1[key] !== obj2[key]);
}

// test data

console.log('option 3 : ', compareObjects3(obj1, obj4));

console.log('option 4 : ', compareObjects4(obj1, obj4));

// input: object
// output: array of two  arrays with key and value

const obj = {
  city: 'Kyiv',
  name: 'Tom',
  age: 17,
};
