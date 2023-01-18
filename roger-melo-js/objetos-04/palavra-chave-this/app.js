// a palavra-chave this
let user = {
  name: 'Joao',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'Sao Paulo',
  blogPosts: ['Empadao de frango', '4 receitas de pure de batata'],
  login () {
    console.log('Usuario logado')
  },
  logout () {
    console.log('Usuario deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logBlogPosts(user.logBlogPosts)