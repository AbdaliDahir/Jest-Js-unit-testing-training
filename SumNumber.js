// const SumNumber = (num1,num2) => {
//   return num1 + (num2 || null);
// }

const SumNumber = (...Numbers) => {
  return Numbers.reduce((prev, curr) => prev + curr, 0);
}
module.exports = SumNumber;