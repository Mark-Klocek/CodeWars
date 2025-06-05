// hq9
function HQ9(code) {
  if (code === 'H') return 'Hello World!';
  if (code === 'Q') return code;
  if (code === '9') {
    let song = '';
    for (let i = 99; i > 0; i--) {
      song += `${i} bottle${i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${i > 1 ? 's' : ''} of beer.\n`;
      if (i - 1 > 0) {
        song += `Take one down and pass it around, ${i - 1} bottle${i - 1 > 1 ? 's' : ''} of beer on the wall.\n`;
      } else {
        song += `Take one down and pass it around, no more bottles of beer on the wall.\n`;
      }
    }
    song += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    song += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return song;
  }
  return undefined;
}