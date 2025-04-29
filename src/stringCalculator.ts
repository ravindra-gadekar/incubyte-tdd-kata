export const add = (numbers: string): number => {
  let isStar = false;
  if (numbers === "") return 0;
  let delimiter: string | RegExp = /[,\n]/;
  if (numbers.startsWith("//")) {
    console.log("numbers", numbers);
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    if (delimiter === "*") isStar = true;
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const nums = numbers.split(delimiter).map((num) => parseInt(num));
  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  if (isStar) return nums.reduce((sum, num) => sum * num, 1);

  return nums.reduce((sum, num) => sum + num, 0);
};
