// We work with an app that handles blood pressure measuments that are taken
// with our smart watch
// We get the users list of measurements for the week 
// [ 110, 112, 118, 120, 121, 110, 117]
// we want: (1) get the week's avarage
//          (2) console log a message with the avarage


const measurements = [110, 112, 118, 120, 121, 110, 117]

const weekAvarage = 0

// sum all the numbers 
// divide the sum by the number of elements
let weekSum = 0


const addToWeekSum = (number) => weekSum += number
const getAvarage = (number, array) => {
    const lastItemIndex = array.length - 1
    const lastItemOnArray = array[lastItemIndex]
    const numberOfItemsInArray = array.length
    const avarage = Math.ceil(weekSum/numberOfItemsInArray)
    if(number === lastItemOnArray){
        console.log('This is the week avarage: ', avarage)
    }
}

// for of loop
for( measurement of measurements ){
    addToWeekSum(measurement);
    getAvarage(measurement, measurements )
}

// for each
measurements.forEach((measurement,index, array) => {
    addToWeekSum(measurement);
    getAvarage(measurement, array)
})



// console.log('sum: ', weekSum)

