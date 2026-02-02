const assert = require("assert");
const calculator = require("../calculator.js");

describe("calculator tests", () => {

  // Addition
  it("add 5, 2 should equal 7", () => {
    assert.equal(calculator.add(5, 2), 7);
  });

  it("add 5, 2 equals 8 should fail ", () => {
    assert.equal(calculator.add(5, 2), 8);
  });

  // Subtraction
  it("subtract 5, 2 should equal 3", () => {
    assert.equal(calculator.sub(5, 2), 3);
  });

  it("subtract 5, 2 equals 1 should fail", () => {
    assert.equal(calculator.sub(5, 2), 1);
  });

  // Division
  it("divide 10, 2 should equal 5", () => {
    assert.equal(calculator.div(10, 2), 5);
  });

  it("divide 10, 2 equals 3 should fail", () => {
    assert.equal(calculator.div(5, 2), 3);
  });

  // Multiplication
  it("multiply 5, 2 should equal 10", () => {
    assert.equal(calculator.mul(5, 2), 10);
  });

  it("multiply 5, 2 equals 11 should fail", () => {
    assert.equal(calculator.mul(5, 2), 11);
  });


});
