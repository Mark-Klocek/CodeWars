// 8kyu pirates!! Are the cannons ready!??
function cannonsReady(gunners) {
  return Object.values(gunners).every(answer => answer === 'aye')
    ? 'Fire!'
    : 'Shiver me timbers!';
}