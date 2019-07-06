class FizzBuzz {
  getNumbers(number) {
    if (typeof number !== "number") throw new Error("input is not a number");
    if (number < 1) throw new Error("input is less than 1");
    let array = [];
    for (let i = 1; i <= number; i++) {
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      if (output === "") {
        i.toString().includes("3")
          ? (output += "Fizz")
          : i.toString().includes("5")
          ? (output += "Buzz")
          : undefined;
      }
      output === "" ? array.push(i) : array.push(output);
    }
    return array;
  }
}

export default FizzBuzz;
