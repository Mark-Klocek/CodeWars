// Task

// You have a messy fridge! To prevent food waste, you need to decide what to eat first based on two factors: expiry date and quantity.

// Write a function that takes a list of food items and returns their names sorted by urgency score.
// Data Format

// Each food item is an object that has the following attributes:

//     name: The name of the food. (string)
//     expiryDays: Days until it expires. (integer; can be negative)
//     isAlmostEmpty: true if you only have a little bit left. (boolean)

// Sorting Rules

//     Discard Spoiled: If the days to expiry are less than 0, the item is spoiled. Do not include it in the output.
//     Empty First: Items that are almost empty come before items that are not.
//     Expiry: Within those groups, items with the lowest days to expiry come first.
//     Alphabetical: If both status and expiry are the same, sort by name alphabetically.

console.log("CW 235")

const items = [
      { name: "Milk"        , expiryDays:  3, isAlmostEmpty: false },
      { name: "Jam"         , expiryDays:  3, isAlmostEmpty: true  },
      { name: "Yogurt"      , expiryDays:  1, isAlmostEmpty: false },
      { name: "Old Meat"    , expiryDays: -1, isAlmostEmpty: true  },
      { name: "Today's Tofu", expiryDays:  0, isAlmostEmpty: false }
    ]

function fridgeOrganizer(items) {

    let sorted_days = items.sort((a,b)=> a.expiryDays - b.expiryDays)
    return sorted_days
}

console.log(fridgeOrganizer(items))