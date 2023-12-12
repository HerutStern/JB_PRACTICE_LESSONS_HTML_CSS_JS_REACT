const getJoke = () => {
  url = "https://api.chucknorris.io/jokes/random/1 "

  fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
            throw 'Status other than 200'
        }
      })
      .then((json_response) => {
        console.log(json_response)
        const elem = document.getElementById('joke')
        elem.innerText = json_response.value
      })
      .catch((error) => {
        console.error(error)
        const elem = document.getElementById('joke')
        elem.innerText = 'Error occured'
      })
}
