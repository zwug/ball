const apiUrl = '/api'
// TODO
export const post = (url, data) => {
  return fetch('/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'John',
      login: 'Doe'
    })
  })
  return fetch('https://jsonplaceholder.typicode.com/photos')
}
