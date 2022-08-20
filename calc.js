const sum = (a,b) => a+b
const subt = (a,b) => a-b

const calculator = (a,b, action)=> console.log(action(a,b))

calculator(8,10,subt)