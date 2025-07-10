// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"

// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"];

// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female




function driver(data) {
  console.log(data)
}

console.log(JSON.stringify(driver(["John","James","Smith","01-Jan-2000","M"])) === JSON.stringify("SMITH900101JJ9AA"));
console.log(JSON.stringify(driver(["Sarah","","O'Neil","23-Jul-1984","F"])) === JSON.stringify("ONEIL884237S99AA"));
console.log(JSON.stringify(driver(["Peter","","Lee","05-Mar-1979","M"])) === JSON.stringify("LEE9990305P99AA"));
console.log(JSON.stringify(driver(["Amanda","Grace","Wong","17-Sep-1993","F"])) === JSON.stringify("WONGG993175A99AA"));
console.log(JSON.stringify(driver(["David","Andrew","Ng","30-Dec-1962","M"])) === JSON.stringify("NG99996230DA9AA"));
console.log(JSON.stringify(driver(["Emily","","Jones","12-May-1988","F"])) === JSON.stringify("JONES885212E99AA"));
console.log(JSON.stringify(driver(["George","Michael","Thompson","01-Jan-2001","M"])) === JSON.stringify("THOMP901101GM9AA"));
console.log(JSON.stringify(driver(["Linda","","Brown","22-Nov-1970","F"])) === JSON.stringify("BROWN972227L99AA"));
console.log(JSON.stringify(driver(["James","Lee","Chan","05-Feb-1999","M"])) === JSON.stringify("CHAN9990205JL9AA"));
console.log(JSON.stringify(driver(["Nina","","Kaur","19-Aug-1985","F"])) === JSON.stringify("KAUR998195N99AA"));
