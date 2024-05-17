import { expect, test } from "vitest";
import { Calculator } from "./index.js";

const calculator = new Calculator();

test("Метод add должен правильно складывать два числа", () => {
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
});

test("Метод subtract должен правильно вычитать второе число из первого", () => {
  const result = calculator.subtract(5, 3);
  expect(result).toBe(2);
});

test("Метод multiply должен правильно умножать два числа", () => {
  const result = calculator.multiply(2, 3);
  expect(result).toBe(6);
});

test("Метод divide должен правильно делить первое число на второе", () => {
  const result = calculator.divide(6, 3);
  expect(result).toBe(2);
});

test("Метод divide должен возвращать сообщение об ошибке при делении на ноль", () => {
  const result = calculator.divide(6, 0);
  expect(result).toBe("Ошибка: деление на ноль!");
});
