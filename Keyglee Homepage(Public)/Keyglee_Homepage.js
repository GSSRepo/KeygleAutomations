// Get items from the local storage ---------------------------

const homepageImageKeys = Object.values(localStorage);

// Seperates each form
const homeForms = homepageImageKeys.splice(0);

homeForms.map(dispoAnswers => {const arr = JSON.parse("[" + dispoAnswers + "]"); //Loop through string; Wrap string in Array brackets; Parsing each Array

const formID = arr[0].shift(); //Removing the Unique ID from each array and outputting it to a variable
var finalArray = [arr]; //Creating a Nested Array of the Parsed Arrays

finalArray.forEach(function(elem) {


for (let dataRows of elem) {

    const photoSlide = document.querySelector('.photoSlideShow');
    const photoDiv = document.querySelector('.propertySlideShow');
    const propertyPhotos = document.createElement('div');
    propertyPhotos.style = "display: flex; flex-direction:column; align-items: center; align-content: center; "
    propertyPhotos.innerHTML = "<img width=400 height=350 src='" + dataRows[14] + "'></img>" + `\n` + "<p style='color: white; margin:5px;'>" + dataRows[3] + "</p>" + `\n` + "<p style='color: white; margin:5px;'>Agent: " + dataRows[0] + "</p>" + `\n` + "<p style='color: white; margin:5px;'>" + dataRows[2] + "</p>" + `\n` + "<a href=" + dataRows[12] + "class='listTitle' style='color: #71c5ec; margin-bottom: 10px; font-weight: 600; font-size: 17px; font-style: italic; margin-left: 15px;' id='propPhotos'>Property Photos</a>"
    console.log(dataRows)


    var responsiveSlider = () => {setInterval(function() {
    return propertyPhotos
      }, 5000);}
    

    //   window.onload = function() {
    //     responsiveSlider();  
    //     }

    responsiveSlider();  

    photoDiv.appendChild(propertyPhotos);
    photoSlide.appendChild(photoDiv);

    const imageHandle = document.createElement('img')

    const iamgeSlide = document.createElement('div');
    


}})});