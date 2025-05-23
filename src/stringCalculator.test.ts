import { add } from "./stringCalculator";

describe("String Calculator", () => {
  test("empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  test("single number returns the number", () => {
    expect(add("1")).toBe(1);
  });

  test("two numbers comma delimited returns the sum", () => {
    expect(add("1,5")).toBe(6);
  });

  test("handle any amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("support different delimiters ;", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("support different delimiters *", () => {
    expect(add("//*\n1*2")).toBe(2);
  });

  test("negative numbers throw exception", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });
});
