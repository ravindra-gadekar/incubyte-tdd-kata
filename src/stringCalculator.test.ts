import { add } from './stringCalculator';

describe('String Calculator', () => {
  test('empty string returns 0', () => {
    expect(add('')).toBe(0);
  });
    
  test('single number returns the number', () => {
    expect(add('1')).toBe(1);
  });

  test('two numbers comma delimited returns the sum', () => {
    expect(add('1,5')).toBe(6);
  });
});