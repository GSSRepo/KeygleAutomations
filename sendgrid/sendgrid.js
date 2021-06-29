// document.getElementById('load').addEventListener('change', function () {
//   let fileReader = new FileReader()
//   fileReader.onload = function () {
//     let parsedJSON = JSON.parse(fileReader.result)
//     console.log(parsedJSON)
//     fetch('./sendgrid.json')
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => console.log(data))
//   }
//   fileReader.readAsText(this.files[0])
// })

fetch('./sendgrid.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => console.log(data))
