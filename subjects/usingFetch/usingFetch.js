

// fetch(url) returns promise
// .then((response) => {}) make the response json and return the json
// .then((jsoResponse) => {}) use the relevent information from the response and put it into the html page
// if (response.status === 200)
// .catch((error) => {}) handle error
// .finally(() => {}) anything must be done before finish


const getJoke = () => {
  url = "https://api.chucknorris.io/jokes/random"





}




















// EXERCISES:

// 1 - Make a button called "cat fact" that on click it shows a random fact about cat using this API - 
//      url = "https://catfact.ninja/fact"

// 2 - Make the button disabled on click and then available again after the fact is shown








// fetch(url)
// .then((response) => {
//   const getButton = document.getElementById('getButton')
//   getButton.setAttribute("disabled", true)
//   if (response.status === 200){
//     return response.json()
//   } else {
//     throw 'the status is not 200'
//   }
  
// })
// .then((jasonResponse) => {
//   console.log(jasonResponse.value)
//   const jokeTextElement = document.getElementById('joke')
//   jokeTextElement.innerText = jasonResponse.value
// })
// .catch((error) => {
//   console.error(error)
//   const jokeTextElement = document.getElementById('joke')
//   jokeTextElement.innerText = 'OOPS... THERE IS AN ERROR'
// })
// .finally(() => {
//   getButton.removeAttribute("disabled")
// })
