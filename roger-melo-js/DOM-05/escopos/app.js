// function myFunc () {
//   let cat = 'Zeca'
//   const age = 3
//   var color = 'cinza'
//   console.log(age)
// }

// function myFunc2 () {
//   var color = 'branco'
//   const age = 5
//   console.log(age)
// }

// myFunc()
// myFunc2()

// const dog = 'Pastor-alemao'

// function dogWatch () {
//   const dog = 'Samoieda'
//   console.log(dog)
// }

// dogWatch()
// console.log(dog)

// if (true) {
//   let dragon = 'Balerion'
//   console.log(dragon)
// }

// if (true) {
//   var dragon = 'Balerion'
//   console.log(dragon)
// }

// console.log(dragon)

const external = () => {
  const book = 'Sapiens'

  const internal = () => {
    // const book = 'Os testamentos'

    const extraInternal = () => {
      console.log(book.toUpperCase())
    }

    extraInternal()
  }

  internal()
}