function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data

const transaction = {
  value: 170,
};

console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(transaction);

// ====
// input : object , string, string
// output : object

function addPropertyV2(obj, key, value) {
  // input: target (object), source (object)
  // output: modif obj
  return Object.assign(obj, { [key]: value });
}

// test data
const transaction2 = {
  value: 170,
};

console.log(addPropertyV2(transaction2, 'currency', 'USD'));
console.log(transaction2);

// ========== Without modifing target object

function addPropertyV3(obj, key, value) {
  // input: target (object), source (object) ..... source N (object)
  // output: object
  return Object.assign({}, obj, { [key]: value });
}

// test data
const transaction3 = {
  value: 170,
};

console.log(addPropertyV3(transaction3, 'currency', 'USD'));
console.log(addPropertyV3(transaction3, 'country', 'Ukraine'));
console.log(transaction3);

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const transaction4 = {
  value: 170,
};

console.log(addPropertyV4(transaction4, 'currency', 'USD'));
console.log(addPropertyV4(transaction4, 'country', 'Ukraine'));
console.log(transaction4);

// spread operator =====
const numbers = [1, 23, 132, 43, 77];
console.log(numbers);
console.log(...numbers);

const numbersCopy = [...numbers, 7, 3];
console.log(numbersCopy);

const transactionTest = {
  value: 177,
};

const transactionTestCopy = { ...transactionTest };
console.log(transactionTestCopy);

// rest operator
function sum(param1, ...params) {
  console.log(param1);
  console.log(params);

  return params.reduce((acc, el) => {
    acc += el;
    return acc;
  });
}

// test data
console.log('Result of sum : ', sum(1, 2, 3, 6, 7));

//
const numbersRest = [10, 43, 12, 75];
