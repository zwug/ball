const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
)

export const fetchCounter = (callback) => {
  console.log('api')
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  setTimeout(() => {
    callback(getRandomInt(1, 100))
  }, 500)

  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user))
}

export const getHundred = () => {
  console.log('100 is geting')
  return fetch('/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Vasilisa',
      login: 'hubot'
    })
  })
  return fetch('https://jsonplaceholder.typicode.com/photos')
}
