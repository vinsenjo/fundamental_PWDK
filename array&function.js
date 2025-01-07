// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

const triangle = function (height) {
  for (let i = 1; i <= height; i++) {
    let result = [];
    for (let j = 1; j <= i; j++) {
      result.push(`0${j}`);
    }
    console.log(result.join(" "));
  }
};

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = function (n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result += "FizzBuzz ";
    } else if (i % 5 == 0) {
      result += "Buzz ";
    } else if (i % 3 == 0) {
      result += "Fizz ";
    } else {
      result += i + " ";
    }
  }
  console.log(result);
};

// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

function bmi(weight, height) {
  const result = weight / (height * height);
  console.log(
    result < 18.5
      ? "less weight"
      : result >= 18.5 && result <= 24.9
      ? "ideal"
      : result >= 25 && result <= 29.9
      ? "overweight"
      : result >= 30 && result <= 39.9
      ? "very overweight"
      : "obesity-z"
  );
}
