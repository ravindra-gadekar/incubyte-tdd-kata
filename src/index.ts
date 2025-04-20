import { add } from './stringCalculator';

console.log("Testing String Calculator:");
// Test case 1: empty string
console.log(`add("") = ${add('')}`);
// Test case 2: single number
console.log(`add("1") = ${add('1')}`);
// Test case 3: any amount of numbers
console.log(`add("1,2,3") = ${add('1,2,3')}`);
try {
  console.log(`add("1,-2,3,-4") = ${add('1,-2,3,-4')}`);
} catch (e: any) {
  console.log(e.message);
}
// Test case 4: new line as separator
console.log(`add("1\n2,3") = ${add('1\n2,3')}`);
// Test case 5: custom delimiter
console.log(`add("//;\n1;2") = ${add('//;\n1;2')}`);