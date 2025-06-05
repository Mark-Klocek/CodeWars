//count of positives/sum of negatives
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  return input.reduce((acc, c) => {
    if (c > 0) acc[0]++;
    else if (c < 0) acc[1] += c;
    return acc;
  }, [0, 0]);
}