// bind

function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

console.dir(printMessage);

console.log(user);

printMessage('Ukraine', 'Lviv');

// input : context, arg1 ... argN
// output : func

// option 1
// const printMessageBinded = printMessage.bind(user);

// printMessageBinded('Ukraine', 'Lviv');
printMessage.bind(user)('Ukraine', 'Lviv');

// option 2

const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');

printMessageBinded2();

// option 3
const printMessageBinded3 = printMessage.bind(user, 'Poland');

printMessageBinded3('Warsaw');

// ================

// input  : func, context, arg1, ... argN (optional)
// output : bindedFunc

// call
// input : context, arg1 ... argN
// output : func result
function myBind(func, context, ...args) {
  // input : the same as func
  // output : func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

const bindFunc = myBind(printMessage, user);
bindFunc('UK', 'London');

const bindedFunc2 = myBind(printMessage, user, 'UK');
bindedFunc2('Londor');
