function getSenseOfLife() {
  return 42;
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}

console.log(getSquared(12));

function sum(num, num1) {
  return num + num1;
}

function getMessage(age) {
  return 'I am ' + age + ' years old';
}

getMessage(145);
getMessage(33);

const mult = (number1, number2) => number1 * number2;

console.log(mult);

console.log(mult(23, 12));

const getSquared = (number) => number * number;
console.log(getSquared(12));

const getMagicNumber = () => 17;
console.log(getMagicNumber());
