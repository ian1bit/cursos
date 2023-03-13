const message = 'Um segundo e meio se passaram desde que a pagina foi carregada'

setTimeout(console.log, 1500, message)

const counterContainer = document.querySelector('.counter-container')
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')

let timer = null

const incrementCounter = () => {
  const incrementedCounter = Number(counterContainer.textContent)
  counterContainer.textContent = incrementedCounter + 1
}

const stopCounter = () => {
  clearInterval(timer)
  counterContainer.textContent = 0
}

buttonInitCounter.addEventListener('click', () => {
  timer = setInterval(incrementCounter, 1000)
})

buttonStopCounter.addEventListener('click', () => {
  stopCounter()
})
