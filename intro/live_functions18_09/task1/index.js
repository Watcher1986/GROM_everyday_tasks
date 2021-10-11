// ================ GET PIMES =============

// function getPrime(num) {
//   for (let index = 2; index <= num; index += 1) {
//     console.log('checking if ' + index + ' is prime');

//     let isPrime = true;
//     for (let number = 2; number < index; number += 1) {
//       console.log('CHECKING IF NUMBER % INDEX ' + number + ' ' + index);
//       if (index % number === 0) {
//         console.log('number is not prime');
//         isPrime = false;
//         break;
//       }

//       if (isPrime) {
//         console.log(index);
//       }
//     }
//   }
// }

// getPrime(12);

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
function getPrime(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}

getPrime(25);
