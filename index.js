//arrow function with parameter
let sum = (p,q) =>{
    return (p+q)/2
}
let a=1,b=2,c=3;
console.log("Avg of a and b is", sum(a,b))
console.log(" ")

//arrow function without parameter
let hello=()=>{
    console.log("Hii aastha, good morning")
}
let great = hello()  //calling above function
console.log(" ")



// Normal function calling in Object
const items = {
    type: "Bread",
    dry: true,
    itemPrice(cost) {
      return cost + 1;
    }
  };
  console.log("Cost of bread is: "+items.itemPrice(9));
  console.log(" ")


// Nested function calling
function displayCounter() {
  let count = 0;

  increment = function () {
    return ++count;
  };

  return increment;
}

counter = displayCounter()
console.log(counter())
console.log(counter())
console.log(counter())

