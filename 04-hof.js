let weekSum = 0
const measurements = [110, 112, 118, 120, 121, 110, 117]
// high order functions are functions that have different functions as parameters
const calcBloodPressure = (array, function1, function2) => {
    array.forEach((measurement,index, array) => {
        function1(measurement);// sum
        function2(measurement, array) // avarage
    })
}

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

calcBloodPressure(measurements, addToWeekSum, getAvarage)

