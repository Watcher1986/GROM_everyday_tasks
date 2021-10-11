// 1. Learn requirement
// 2. Create step by step algo (& input/output for function)
// 3. Write draft solution & testing
// 4. Refactoring & final testing => final solution

// algo
// 1. reduce

// algo
// 1. create res obj
// 2. iterate keyslist
// 3. get value by index
// 4. add key-value to the object

// Option bad

// input: string[], arr
// output: object

function buildObject(keysList, valuesList) {
  let obj = {};

  for (let index = 0; index < keysList.length; index += 1) {
    // const value = valuesList[index];
    // const key = keysList[index];
    // obj[keyslist[index]] = keysList[index];

    // Object.assign(obj, { [key]: value });
    obj = { ...obj, [keysList[index]]: valuesList[index] };
  }
  return obj;
}

// test data
const keys = ['name', 'address', 'age', 'run'];
const values = [
  'Bob',
  'Ukraine',
  34,
  () => {
    console.log('run');
  },
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
result.run();

// option good 1

function buildObject1(keysList, valuesList) {
  let obj = {};

  return keysList.reduce((obj, key, index) => {
    return { ...obj, [key]: valuesList[index] };
  }, {});
}

// option good 2

const buildObject2 = (keysList, valuesList) =>
  keysList.reduce(
    (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
    {}
  );
// examples
const keys2 = ['name', 'address', 'age'];
const values2 = ['Bob', 'Ukraine', 34];
const result2 = buildObject2(keys2, values2); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result2);
