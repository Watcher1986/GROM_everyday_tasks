// input : obj
// output : undefined

function saveUser(userData) {
  // input: URL (string), obj (headers, ....)
  // output: obj (promise)
  const res = fetch(
    'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }
  )
    // input: callback
    // output: promise

    .then((response) => response.json())
    .then((body) => console.log(body))
    .catch((e) => {
      // ...
    });

  console.log(res);
}

// test data

const user = {
  email: 'test@mail.com',
  firstName: 'Denis',
  lastName: 'Sokolenko',
  city: 'BaseStar',
  age: 77,
};

console.log(JSON.stringify(user));

saveUser(user);
