//DAY-2
// Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

function checkEven(num) {
  if (num <= 0) {
    return "Input the right number";
  } else if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

function primeNumber(num) {
  if (num <= 1) {
    return `${num} is not a prime number`;
  }
  if (num == 2) {
    return `${num} is  a prime number`;
  }
  if (num % 2 === 0) {
    return `${num} is not a prime number`;
  }
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

function sum(num) {
  let output = 0;
  let i = 1;
  while (i <= num) {
    output += i;
    i++;
  }
  return output;
}

// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let result = 0;
  a = 0;
  b = 1;
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
