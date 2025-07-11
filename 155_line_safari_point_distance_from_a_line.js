// Kata Task

// Given 3 points a, b, c

//             c
            
//                      b         
//   a

// Find the shortest distance from point c to a straight line that passes through points a and b

// Notes

//     all points are of the form [x,y] where x >= 0 and y >= 0
//     if a and b are the same then just return distance between a and c
//     use Euclidean distance

//P: We will be given 3 arrays of non negative integers, where array[0] == 1 and array[1] == 2

//R: Returning the shortest distance between c and a, or c and b as a positive integer

//E: 
 let a = [10,10], b = [30,10], c = [20,25]
// let a = [50,50], let b = [4,9], let c = [1,2]
// let a = [1,2], let b = [46,42], let c = [22,33]

var distanceFromLine = function([ax,ay], [bx,by], [cx,cy]) {
  if (ax == bx && ay == by) return Math.hypot(ax-cx, ay-cy)
  let a = Math.hypot(bx-cx, by-cy),
      b = Math.hypot(cx-ax, cy-ay),
      c = Math.hypot(ax-bx, ay-by),
      s = (a + b + c) / 2
  return Math.sqrt(s * (s-a) * (s-b) * (s-c)) / c * 2
}
distanceFromLine(a,b,c)