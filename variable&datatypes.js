// Write a code to find area of rectangle.
// Example : length = 5, width = 3
// Output : 15

function rectangle(length, width) {
  return length * width;
}
// // Write a code to find perimeter of rectangle.
// // ○ Example : length = 5, width = 3
// ○ Output : 16

function perimeterRectangle(length, width) {
  return 2 * (length + width);
}
// ● Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539

function circle(r) {
  const pi = 3.14159;
  const diameter = 2 * r;
  const circumference = 2 * pi * r;
  const area = pi * (r * r);
  return { diameter, circumference, area };
}

// ● Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65
// ○ Output : 35

function rectangle(a, b) {
  return 180 - (a + b);
}

// ● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30
// days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

function convertDays(days) {
  const year = Math.floor(days / 365);
  const month = Math.floor((days % 365) / 30);
  const day = days - 365 * year - 30 * month;
  return { year, month, day };
}

// ● Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
// ○ Output : 2

function dateDiff(date1, date2) {
  function time(d) {
    return new Date(d).getTime();
  }
  return Math.abs(time(date1) - time(date2)) / (24 * 3600 * 1000);
}
