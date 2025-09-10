console.log('202_find_cracker')
// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
//   ["name2", 110, ["B", "A", "A", "A"]],
//   ["name3", 200, ["B", "A", "A", "C"]],
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ]

// The scores for each grade is:

//     A: 30 points
//     B: 20 points
//     C: 10 points
//     D: 5 points
//     Everything else: 0 points

// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     # name1 total point is over 200 => hacked
//   ["name2", 110, ["B", "A", "A", "A"]],               # name2 point is right
//   ["name3", 200, ["B", "A", "A", "C"]],               # name3 point is 200 but real point is 90 => hacked
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] # name4 point is right
// ];


//Parameters
//  We are given an array of arrays - each inner array is a student which contains a name, a points total, and an array containing the grades that the student got

//Return
//  We are to return an array of student names who's score does not match the grades in the grade array

//Example
studentArray = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     
  ["name2", 110, ["B", "A", "A", "A"]],               
  ["name3", 200, ["B", "A", "A", "C"]],               
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] 
]




function findHack(arr) {
    //Psuedo
    //initialize an empty array of hackers that we are going to return
    //iterate through each student in the students array
    //for each student array, first check to see if the score is above 200 - if so, we can immediately add it to the hacker array
    //if the score is < 201, we set a variable equal to the 1 index of the student array
    //we can then set a new gradesArray for htat student = the 2nd index of the student array
    //we then iterate through each of the letters, adding the total point value from that grade into a tempScore variable
    //after we are done adding points, have to check to see if the grades array is > 4, and if C D F are not in the grades array, if not, we add 20 points onto the tempScore
    //if the tempScore != actualScore, we append the student name onto the cheaterArray we are going to return
    const maxScore = 200
    let cheaterArray = [];
    arr.forEach(element=>{
        let studentName = element[0];
        let actualScore = element[1];
        let gradesArray = element[2];
        let tempScore = 0;


        if(actualScore > 200){
            //if the actualScore is above 200, we know the student is cheating
            cheaterArray.push(studentName);
        }else{
            //iterating through each student whos score is <= 200
            gradesArray.forEach(grade =>{
                //switch case for adding points based on letter grade in each students gradeArray
                switch(grade){
                    case 'A':
                        tempScore += 30
                        break;
                    case 'B':
                        tempScore += 20
                        break;
                    case 'C':
                        tempScore += 10
                        break;
                    case 'D':
                        tempScore += 5
                        break;
                    default:
                        //error handling
                        console.error('something went wrong')
                }
            })
            //checking to see if grades are at least 5 grades long and all of them are b and above
            if(gradesArray.length >= 5 && !gradesArray.includes('C')&& !gradesArray.includes('D') && !gradesArray.includes('F')) tempScore += 20
            //maximum score is 200, so we are checking to see if actualScore is < 400, because max score is 200, and if a student scored over 200 it would not equal the maxScore, but they would not be cheaters.
            if ((actualScore != tempScore) && !(actualScore == maxScore && tempScore > maxScore)){
                cheaterArray.push(studentName)
            }
        }
    })






    return cheaterArray;
}

console.log(findHack(studentArray))