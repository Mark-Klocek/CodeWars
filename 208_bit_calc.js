// In this kata your task is to create bit calculator. Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.

// assert.strictEqual(calculate("10","10"), 4);
// assert.strictEqual(calculate("10","0"), 2);
// assert.strictEqual(calculate("101","10"), 7);

// parseInt and some Math functions are disabled.

// Those Math functions are enabled: pow,round,random

function calculate(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}