console.log('227 best perk')


// Your hero can upgrade their abilities between rounds in a tactical battle game. Each round, you're offered three upgrade options, each represented by a skill name and a percentage boost. You must choose wisely, following a clear decision hierarchy.

// Some skills are preferred and should always be picked if available. Others are blacklisted and must be avoided. The rest are neutral — they're fine choices if no preferred option is offered. If none of the three options are acceptable, you can always fall back on the implicit fourth choice: taking money.
// Task

// Write a function that chooses which option to take (A, B, C, or D) using the following rules:

//     Never pick an option if its skill is in the blacklist.
//     If at least one offered skill belongs to the preferred set, choose the one among them with the highest percentage.
//     If no offered skill is preferred but at least one is neutral (not blacklisted and not preferred), choose the neutral one with the highest percentage.
//     If all three skills are blacklisted, choose D (for money).
//     If several options have the same highest percentage at the step you are in, you may return any of them.

// Note: Skills may appear multiple times, and pairs can include duplicates.

// Input:

//     preferred: set of strings (skills you strongly prefer).
//     blacklisted: set of strings (skills you should never take).
//     options: tuple of exactly 3 pairs (skill, percentage), representing options A, B, and C in order.
//         skill: a string with the name of the skill
//         percentage: a positive integer between 10 and 100

// Output:

//     A single character:
//         "A", "B", or "C" → chosen option.
//         "D" → if taking money.


function pick(preferred, blacklisted, options) {
  let firstSelection = options[0][0]
  let secondOption = options[0][1]
  let thirdOption = options[0][2]
  if (preferred.has(firstSelection)) return "A"
  if (preferred.has(secondOption)) return "B"
  if (preferred.has(thirdOption)) return "C"
  if (!blacklisted.has(firstSelection)) return "A"
  if (!blacklisted.has(secondOption)) return "B"
  if (!blacklisted.has(thirdOption)) return "C"
  return "D"; // show me the money!
}