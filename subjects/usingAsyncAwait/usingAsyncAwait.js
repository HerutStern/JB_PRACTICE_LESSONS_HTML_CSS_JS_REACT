
// write async outside the function
// await fetch(url) returns response
// await response.json() returns json data
// if (response.status === 200)
// use try catch and finally to catch errors

url = "https://api.chucknorris.io/jokes/random"


















// const getJoke = async() => {
//     const getButton = document.getElementById('getButton')
//     getButton.setAttribute("disabled", true)

//   try{
//       const response = await fetch(url)
//       if (response.status === 200) {
//         const jsonData = await response.json()
//         const jokeTextElement = document.getElementById('joke')
//         jokeTextElement.innerText = jsonData.value
//       } else {
//         throw 'error'
//       }
//   } catch(error) {
//       const jokeTextElement = document.getElementById('joke')
//       jokeTextElement.innerText = 'ERROR'
//       console.log(error)
//   } finally {
//       const getButton = document.getElementById('getButton')
//       getButton.removeAttribute("disabled")
//   }

// }















// EXERCISES:

// 1 - Make a button called "cat fact" that on click it shows a random fact about cat using this API - 
//      url = "https://catfact.ninja/fact"

// 2 - Make the button disabled on click and then available again after the fact is shown






// const getButton = document.getElementById('getButton')
//     getButton.setAttribute("disabled", true)

//   try{
//       const response = await fetch(url)
//       if (response.status === 200) {
//         const jsonData = await response.json()
//         const jokeTextElement = document.getElementById('joke')
//         jokeTextElement.innerText = jsonData.value
//       } else {
//         throw 'error'
//       }
//   } catch(error) {
//       const jokeTextElement = document.getElementById('joke')
//       jokeTextElement.innerText = 'ERROR'
//       console.log(error)
//   } finally {
//       const getButton = document.getElementById('getButton')
//       getButton.removeAttribute("disabled")
//   }