//7kyu dot calculator
function dotCalculator(equation) {
  const [left, operator, right] = equation.split(' ');
  const a = left.length;
  const b = right.length;

  switch (operator) {
    case '+':
      return '.'.repeat(a + b);
    case '-':
      return '.'.repeat(a - b);
    case '*':
      return '.'.repeat(a * b);
    case '//':
      return '.'.repeat(Math.floor(a / b));
    default:
      return '';
  }
}