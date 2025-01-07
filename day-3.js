// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

function multiplication(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
// ● Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

function palindrome(text) {
  let newTxt = text.split("").reverse().join("");
  return text == newTxt ? "palindrom" : "not palindrom";
}
// ● Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

function convert(centimeter) {
  return `${centimeter / 10000} km`;
}

// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

function formatCurrency(number) {
  let newNumber = number.toString().split("").reverse();
  let currency = [];
  for (let i = 0; i < newNumber.length; i++) {
    if (i % 3 == 0 && i != 0) {
      currency.push(".");
    }
    currency.push(newNumber[i]);
  }
  return `Rp. ${currency.reverse().join("")},00`;
}

// ● Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

function remove(str, searchStr) {
  const regex = new RegExp(`${searchStr}`, "i");
  return str.replace(regex, "");
}

// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

function capitalize(text) {
  let result = text.split(" ");
  return result
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

// ● Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
function swap(text) {
  const reg = /[A-Z]/;
  const newTxt = text.split("");
  let result = [];
  newTxt.forEach((char) => {
    char.match(reg)
      ? result.push(char.toLowerCase())
      : result.push(char.toUpperCase());
  });
  return result.join("");
}

// ● Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

function findLargest(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// ● Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

function sort(num1, num2, num3) {
  let first, second, third;
  if (num1 <= num2 && num1 <= num3) {
    first = num1;
    if (num2 <= num3) {
      second = num2;
      third = num3;
    } else {
      second = num3;
      third = num2;
    }
  } else if (num2 <= num1 && num2 <= num3) {
    first = num2;
    if (num1 <= num3) {
      second = num1;
      third = num3;
    } else {
      second = num3;
      third = num1;
    }
  } else {
    first = num3;
    if (num1 <= num2) {
      second = num1;
      third = num2;
    } else {
      second = num2;
      third = num1;
    }
  }
  console.log(first, second, third);
}

// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

function checkInput(input) {
  return typeof input == "string" ? 1 : typeof input == "number" ? 2 : 3;
}

// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

function changeLetter(text) {
  const reg = /[a]/gi;
  return text.replaceAll(reg, "*");
}
