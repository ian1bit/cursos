const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice o País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 },
]

const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(({ price, name }) => 
    `O preço do livro "${name}" caiu para ${price} reais`)
debugger