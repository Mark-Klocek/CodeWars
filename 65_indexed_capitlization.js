//7 kyu Indexed capitalization
function capitalize(s,arr){
  return s.split('').map((element,index)=> arr.includes(index) ? element.toUpperCase(): element).join('');
};