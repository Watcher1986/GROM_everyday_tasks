// bad

// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// good

const withdraw = (clients, balances, clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);

  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] < amount;
  return (balances[clientIndex] -= amount);
};

// // bad
// function withdraw(clients, balances, client, amount) {
//   let i = 0;
//   for (; i < clients.length; ++i) {
//     if (clients[i] === client) {
//       break;
//     }
//   }

//   balances[i] -= amount;
//   console.log(balances);
//   return balances[i] > 0 ? balances[i] : -1;
// }

function withdraw(clients, balances, client, amount) {
  let clientIndex = clients[indexOf(client)];
  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[i] -= amount;

  return balances[i] > 0 ? balances[i] : -1;
}

// bad

const withdraw = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);
  console.log(clientNum);

  const isEnough = (num) => {
    if (num > amount) {
      return num - amount;
    }
    return -1;
  };
  const newBalances = balances.map(isEnough);
  return newBalances[clientNum];
};

// good

const withdraw2 = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);

  const newBalances = balances.map((num) => {
    if (num >= amount) {
      return num - amount;
    }
    return -1;
  });
  return newBalances[clientNum];
};

// test dat

const clients = ['Denis', 'Andrey', 'Jack'];
const balances = [100, 54, 1200];
const client = 'Jack';
const amount = 500;
console.log(withdraw2(clients, balances, client, amount));
console.log(balances);

// bad

const withdraw = (clients, balances, client, amount) => {
  let index = clients.indexOf(client);
  return balance[index] < amount ? -1 : (balances[index] -= amount);
};

// bad

function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    balances[indexOfPerson] -= amount;
    return amount;
  }
  if (balances[indexOfPerson] < amount) {
    return -1;
  }
}

// good

function withdraw(clients, balances, client, amount) {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

// bad

function withdraw(clients, balances, client, amount) {
  let output = 0;
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    output = balances[indexOfPerson] - amount;
    return output;
  }
  output = -1;

  return output;
}

// good

function withdraw(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }

  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

const users = [12, 43, 22, 54, 16, 43];
const res = users.filter((age = age > 18));
console.log(res.length);
