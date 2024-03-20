## 01) Spot the errors and fix them

- [ ] Copy the following complete code block to your script.js file and try to spot and fix the errors.

```js
const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20
```

## 02) oddEven function

Implement a `oddEven` function.

- [x] The function has one parameter which is a number
- [x] If the number is an even number, the function returns the string even
- [x] If the number is an od number, the function returns the string odd

```js
// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
```

## 03) oldYoung function

Implement a `oldYoung` function.

- [x] The function has one parameter which is a number
- [x] If the number is less than 16, return "children"
- [x] If the number is less than 50, return "young person"
- [x] Otherwise return "elder person"
- [x] If the number is not a number or a negative number a string invalid parameter

```js
// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
```
