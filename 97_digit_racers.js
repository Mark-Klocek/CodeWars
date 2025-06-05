//6 kyu digit racers
function digitRacers(str) {
  const count = {};
  const lastIndex = {};

  
  for (let i = 0; i < str.length; i++) {
    const digit = str[i];
    count[digit] = (count[digit] || 0) + 1;
    lastIndex[digit] = i;
  }

  
  const entries = Object.keys(count).map(d => [d, count[d], lastIndex[d]]);

  
  entries.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];       
    return b[2] - a[2];                           
  });

  
  let rankingMap = {};
  let rank = 1;
  let lastCount = null;

  for (let i = 0; i < entries.length; i++) {
    const [digit, cnt] = entries[i];

    if (cnt !== lastCount) {
      rank = Object.keys(rankingMap).length + 1;
      lastCount = cnt;
    }

    if (!rankingMap[rank]) rankingMap[rank] = [];
    rankingMap[rank].push(digit);
  }

  
  const suffix = n =>
    n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`;

  const lines = [];

  for (let i = 1; rankingMap[i]; i++) {
    lines.push(`${suffix(i)} place: ${rankingMap[i].join(", ")}`);
  }

  
  const present = new Set(Object.keys(count));
  const absent = [];
  for (let i = 0; i <= 9; i++) {
    const d = i.toString();
    if (!present.has(d)) absent.push(d);
  }

  if (absent.length > 0) {
    lines.push(`Absent digits: ${absent.join(", ")}`);
  } else {
    lines.push("All digits present");
  }

  return lines.join("\n");
}


console.log(digitRacers("5501234567789"))