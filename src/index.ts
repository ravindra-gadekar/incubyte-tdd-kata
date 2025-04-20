import { add } from './stringCalculator';

console.log("Testing String Calculator:");
// test case: empty string
console.log(`add("") = ${add('')}`);
// test case: single number
console.log(`add("1") = ${add('1')}`);
// test case: any amount of numbers
console.log(`add("1,2,3") = ${add('1,2,3')}`);
// test case: negative numbers
try {
  console.log(`add("1,-2,3,-4") = ${add('1,-2,3,-4')}`);
} catch (e: any) {
  console.log(e.message);
}
// test case: numbers with different delimiters
console.log(`add("1\n2,3") = ${add('1\n2,3')}`);
// test case: custom delimiter
console.log(`add("//;\n1;2") = ${add('//;\n1;2')}`);