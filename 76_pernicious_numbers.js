// 7kyu pernicious numbers (DID NOT COMPLETE)
function pernicious(n) {
  n = Math.floor(n);
  if (n < 1) return "No pernicious numbers";

  const isPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  const result = [];
  for (let i = 1; i <= n; i++) {
    const binary = i.toString(2);
    const digitSum = binary.split('').filter(b => b === '1').length;
    if (isPrime(digitSum)) result.push(i);
  }

  return result.length ? result : "No pernicious numbers";
}