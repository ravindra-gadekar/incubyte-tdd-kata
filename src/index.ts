import { add } from './stringCalculator';

console.log("Testing String Calculator:");
console.log(`add("") = ${add('')}`);
console.log(`add("1") = ${add('1')}`);
console.log(`add("1,2,3") = ${add('1,2,3')}`);
try {
  console.log(`add("1,-2,3,-4") = ${add('1,-2,3,-4')}`);
} catch (e: any) {
  console.log(e.message);
}
console.log(`add("1\n2,3") = ${add('1\n2,3')}`);
console.log(`add("//;\n1;2") = ${add('//;\n1;2')}`);