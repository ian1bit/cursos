// adicionando metodos
let user = {
  name: 'Ian',
  age: 21,
  email: 'ian@outlook.com',
  city: 'Salvador',
  blogPosts: ['Melhores animes', 'Lugares que deseja viajar'],
  login: function () {
    console.log('Usuario logado')
  },
  logout: function () {
    console.log('Usuario deslogado')
  }
}

user.logout()

const myName = 'Joao'

myName.toUpperCase()