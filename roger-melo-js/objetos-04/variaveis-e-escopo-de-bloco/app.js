// variaveis e escopo de bloco

let age = 31

if (true) {
  let age = 41
  let name = 'Ian'

  console.log(`dentro do 1 bloco de codigo: ${age} ${name}`)

  if (true) {
    let age = 51
    console.log(`dentro do 2 bloco de codigo? ${age}`)
  }
}

console.log(`fora do bloco de codigo: ${age} ${name}`)