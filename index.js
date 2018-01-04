// Turn this function into an arrow function
// function arrow() {
//   return 'es6 is awesome!'
// }

const arrow = () =>'es6 is awesome!';

//Use the es6 syntax for default parameter
// function defaultParameter(name) {
//   var name = name || 'sam'
//   return name
// }

const defaultParameter = name => name || 'sam';

// Use the spread operator to combine arr1 and arr2
// function combineArrays(arr1, arr2) {
//   return arr1.concat(arr2)
// }

// const combineArrays = (arr1, arr2) => {
//    arr1.push(...arr2);
//    return arr1
//   }


// const combineArrays = (arr1, arr2) => arr1 =arr1.push(...arr2); ???????????????????????????????


const combineArrays = (arr1, arr2) => arr1 = [...arr1, ...arr2];


//use destructuring to return the object's cyf property
// function destructuring(obj) {
//   return obj.cyf
// }

const destructuring = obj => {
  var {cyf,test,learning} = obj
  return cyf
}


// use template literal to return a string with the sum of a and b
// function templateString(a, b) {
//   return 'The sum is equal to ' + (a + b).toString()
// }

const templateString = (a, b) => `The sum is equal to ${a + b}`;


module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString,
}
