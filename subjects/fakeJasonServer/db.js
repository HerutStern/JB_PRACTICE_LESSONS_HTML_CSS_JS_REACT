const { default: axios } = require("axios")


const url = "http://localhost:3000/products"

const getItems = async() => {
  const response = await axios.get(url)
  const jasonResponse = await response.json()
  console.log(jasonResponse)
  const itemsList = document.getElementById("itemsList")
  itemsList.innerHTML =  ""
  for (let i = 0; i < jasonResponse.length; i++) {
    const element = jasonResponse[i];
    console.log(element)
    
    const listItem = document.createElement("li");
    listItem.textContent = `${element.id}: ${element.title}, price: ${element.price}`
    itemsList.appendChild(listItem);

  }
}