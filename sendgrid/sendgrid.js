// document.getElementById('load').addEventListener('change', function () {
//   let fileReader = new FileReader()
//   fileReader.onload = function () {
//     let parsedJSON = JSON.parse(fileReader.result)
//     console.log(parsedJSON)
//     // your code to consume the json
//   }
//   fileReader.readAsText(this.files[0])
// })

const data = require('./sendgrid.json')
console.log(data)
