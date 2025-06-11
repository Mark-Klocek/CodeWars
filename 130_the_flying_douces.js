// Rules:

//     Each soldier maintains a specific marching cadence.
//     At each time step, all soldiers make decisions simultaneously based on the cadence values at the beginning of that step.
//     A soldier's cadence is influenced by their immediate neighbors.
//     If both neighbors have identical cadences, the soldier adopts that cadence.
//     If neighbors have different cadences:
//         a. The soldier's cadence shifts one step towards the average (rounded down) of the neighbors.
//         b. If the rounded-down average matches the soldier's current cadence, their cadence moves one step towards the neighbor with the higher cadence.
//     Soldiers at the ends of the line are influenced only by their single neighbor and adopt that neigbor's cadence.
//     Stan and Ollie, the protagonists, maintain their original cadence throughout the simulation.

// Task:

// Given an initial lineup of soldiers, simulate how their marching cadence evolves over time based on their neighbors' influence.

//     Input Parameters:
//         initial: A list of non-negative integers representing the initial cadence of each soldier.
//         steps: An integer representing the number of time steps to simulate.
//         stan: An integer representing Stan's position in the line (0-based index).
//         ollie: An integer representing Ollie's position in the line (0-based index).

//     Output:
//         Return a list of integers representing the cadence of each soldier after all simulation steps.

//     Constraints:
//         0 ≤ cadence ≤ 10
//         2 ≤ number of soldiers ≤ 40
//         0 ≤ steps ≤ 100

//P:    We're going to be given a list of arrays - can they be negative? will it always be an array of integers? 
//      We'll be given a number of steps - they will always be positive integer? This is how many times we will iterate on adjusting the cadence of each troop
//      We will be given both stan and ollie's position within a 0 based array. This number will always be less than the array length and greater than 0?
//      Does the cadence of the updated soldiers immediately affect the soldiers behind them? 

//R:    We are returning an array of the "soldiers" with their updated cadence numbers. All numbers should be 0<=n<=10

//E:
// let initial = [1,1] 
// let steps=5
// let stan=0
// let ollie=1
// => [1,1]

 let initial = [0,1,0,2,5,4,8,0,3,4,2]
 let steps =5
 let stan = 1
 let ollie =5 
// => [1,1,1,3,4,4,4,3,4,3,4]

function simulate(initial, steps, stan, ollie) {
    returnArray = []
    
    //P:
    //forEach loop on the initial array
    //if index is equal to stan or ollie, we keep the current soldier the same
    //if index is 0 set it to index + 1, if index is length - 1 set it to index - 1
    //if index is equal to stan or ollie, do nothing
    //if both neighbors have the same cadence, the current soldier adopts that cadence
    //other wise we find the average of the surrounding soldiers
    //if current soldiers cadence is above average, we take 1 away from cadence, otherwise we add 1 cadence
    //if current soldiers cadence is equal to the average, we add 1 cadence
    //math floor it, we compare it to the current soldier
    //set initial to returnArray (to march with each step) then make returnArray blank so that it can build the next step
    for (let i = 0;i<steps;i++)
    {
        initial.forEach((element,index)=>{
            if (index === stan || index ===ollie){
                returnArray[index]=initial[index]
            }
            else if (index === 0){ returnArray[index] = initial[index+1]}
            else if (index === initial.length - 1){returnArray[index] = initial[index -1]}
            else{
                let previousNumber = initial[index-1]
                let nextNumber = initial[index + 1]
                let neighborAverage = Math.floor((previousNumber + nextNumber)/2)
                
                let currentSoldier = element
                if (previousNumber === nextNumber) returnArray[index] = previousNumber
                else{
                    if (currentSoldier > neighborAverage){
                        currentSoldier = currentSoldier - 1
                    }
                    else if(currentSoldier < neighborAverage){
                        currentSoldier = currentSoldier + 1
                    }
                    else if(currentSoldier === neighborAverage){
                        currentSoldier = currentSoldier +1
                    }
                    returnArray[index] = currentSoldier
                }
            }

        })
        initial = returnArray
        
        returnArray = []
        
        
    }
    return initial

  
}
console.log(simulate(initial,steps,stan,ollie))