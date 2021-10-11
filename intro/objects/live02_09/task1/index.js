// algo:
// 1. split object into arrays of [keys] and [values]
// 2. add proper key/value to the proper object(id: 'customer...')
// 3. sort array with objects in asscending order by proper value(age)

// getCustomersList()
// input : obj {}
// output : obj []

// map()
// input: callback
// output: array

// callback of map():
// input : array
// output : object

// option 1

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map((arr) => {
      console.log(arr);

      let obj = { id: arr[0] };

      console.log(obj);

      const value = arr[1];

      obj = { ...obj, ...value };

      console.log(obj);

      return obj;
    })
    .sort((a, b) => a.age - b.age);
};

const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(customers));

// option 2 good

const getCustomersList1 = (obj) => {
  return Object.entries(obj)
    .map((arr) => ({ id: arr[0], ...arr[1] }))
    .sort((a, b) => a.age - b.age);
};

console.log(getCustomersList1(customers));

// option Best

const getCustomersList2 = (obj) =>
  Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList2(customers));
