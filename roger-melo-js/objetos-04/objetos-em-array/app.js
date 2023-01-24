// objetos em array
let user = {
  name: 'Ian',
  age: 21,
  email: 'ian@outlook.com',
  city: 'Salvador',
  blogPosts: [
    { title: 'Melhores animes', likes: 30 },
    { title: 'Lugares que deseja viajar', likes: 51 }
  ],
  login: function () {
    console.log('Usuario logado')
  },
  logout: function () {
    console.log('Usuario deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }
}

user.logBlogPosts()