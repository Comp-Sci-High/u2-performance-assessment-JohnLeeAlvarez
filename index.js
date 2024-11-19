
const prompt = require('prompt-sync')()

async function generateImage(recipesdata) {

    const apiKey = "7be7a7ae601149c68935b7b7e7d48e10"
    const url = "https://api.spoonacular.com/recipes/random?apiKey=7be7a7ae601149c68935b7b7e7d48e10"
  

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ` + apiKey,
        'Content-Type': 'application/json'
      }
    }
const response = await fetch(url, options)
const data = await response.json()
console.log(data)
return data

  }

  let question = prompt("Would you like a random recipes?")

  generateImage(question)