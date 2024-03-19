//Implement a welcomeMsg function.

function welcomeMsg(firstName) {
  return "Welcome" + " " + firstName;
}
console.log(welcomeMsg("Mohammad"));

//Implement a calcGrossPrice function.

function calcGrossPrice(price, tax) {
  return price + price * tax;
}

console.log(calcGrossPrice(20, 0.19));

//Implement a addPositive function.

function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}

console.log(addPositive(-1, -8));
