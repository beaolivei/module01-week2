// functions: (1) named function, (2) nameless or function or function expression, and (3) arrow function
// difference between making a reference to a function or executing a function
// parameter vs argument

//1. Named Function

function setDaysOnADiet (days){
    console.log("I've been on a diet for " + days + " days now")
}

// 2. nameless// anonymous // function expressions 
const setDaysOnADiet2 = function(days){
    console.log("I've been on a diet for " + days + " days now")}

    setTimeout(function(){
    console.log("I've been on a diet for " + 4 + " days now")
    }, 1000)

// 3. arrow function
//day and food -> parameters of setDaysiOnADiet
const setDaysOnADiet = (day, food) => "I've been on a diet for " + day + " days now. I miss "+ food

console.log('reference: ', setDaysOnADiet) // -> reference the function

// 6 and 'cake' are arguments to my setDaysOnADiet function
console.log('execution: ', setDaysOnADiet(6, 'cake')) // -> execution

