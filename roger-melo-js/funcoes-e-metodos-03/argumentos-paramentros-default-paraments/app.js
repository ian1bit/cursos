// Argumentos, paramentros e default parameters
// const myFunc = function (name = 'Estroncio', lastName = 'Almeira') {
//   console.log(`Oi, ${name} ${lastName}!`)
// }

// myFunc()
// myFunc('Ian', 'Pereira')

// Retornando valores
const double = function (number) {
  return number * 2
}

const result = double(3)

const showResult = function (value) {
  return `O resultado e: ${value}`
}

console.log(showResult(result))