import FizzBuzz from "./fizzbuzz";
const fizzbuzz = new FizzBuzz();

describe("FizzBuzz", () => {
  describe("Error Checking", () => {
    it("throws error if input is a string", () => {
      expect(() => fizzbuzz.getNumbers("chicken")).toThrow(
        "input is not a number"
      );
    });
    it("throws error if input is a boolean", () => {
      expect(() => fizzbuzz.getNumbers(true)).toThrow("input is not a number");
    });
    it("throws error if input is less than 1", () => {
      expect(() => fizzbuzz.getNumbers(0.3)).toThrow("input is less than 1");
    });
  });
  describe("Actual Code", () => {
    it("should return single number in array", () => {
      expect(fizzbuzz.getNumbers(1)).toEqual([1]);
    });
    it("should return multiple number in array", () => {
      expect(fizzbuzz.getNumbers(2)).toEqual([1, 2]);
    });
    it("should return `Fizz` if multiple of 3 in array", () => {
      expect(fizzbuzz.getNumbers(3)).toEqual([1, 2, "Fizz"]);
    });
    it("should return `Fizz` if multiple of 3 and `Buzz` if multiple of 5  in array", () => {
      expect(fizzbuzz.getNumbers(7)).toEqual([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7
      ]);
    });
    it("should return `Fizz` if multiple of 3 or contains '3' and `Buzz` if multiple of 5 in array or return `FizzBuzz` if multiple of 3 and 5", () => {
      expect(fizzbuzz.getNumbers(61)).toEqual([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        "Fizz",
        14,
        "FizzBuzz",
        16,
        17,
        "Fizz",
        19,
        "Buzz",
        "Fizz",
        22,
        "Fizz",
        "Fizz",
        "Buzz",
        26,
        "Fizz",
        28,
        29,
        "FizzBuzz",
        "Fizz",
        "Fizz",
        "Fizz",
        "Fizz",
        "Buzz",
        "Fizz",
        "Fizz",
        "Fizz",
        "Fizz",
        "Buzz",
        41,
        "Fizz",
        "Fizz",
        44,
        "FizzBuzz",
        46,
        47,
        "Fizz",
        49,
        "Buzz",
        "Fizz",
        "Buzz",
        "Fizz",
        "Fizz",
        "Buzz",
        "Buzz",
        "Fizz",
        "Buzz",
        "Buzz",
        "FizzBuzz",
        61
      ]);
    });
  });
});
