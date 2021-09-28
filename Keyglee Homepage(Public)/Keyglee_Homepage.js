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


// Modal Form

const submitDeal = document.getElementById('submitProp');
const modal = document.querySelector('.modal');
const header = document.getElementById('menu');
const backButton = document.getElementById('backButton')

// Opening Form
submitDeal.addEventListener('click', function submitProp(){
    modal.style = "display: flex; justify-content: space-around; position: fixed; align-items: center; overflow: overlay; width:140em; height:90em;";
    header.style = "display: none;"
})

// Closing Form
backButton.addEventListener('click', function(){
    modal.style = "display: none;";
    header.style = "display: flex;";
})

// modal.addEventListener('click', function(){
//     modal.style = "display: none;";
//     header.style = "display: flex;";
// })


//Address field. Use Google API to autopopulate Address
const homepageAddress = document.getElementById("homepageAddress");

// Create the search box and link it to the UI element.
const searchInput = new google.maps.places.Autocomplete(homepageAddress);

searchInput.setComponentRestrictions({
   country: ["us"],
 });
 // Listen for the event fired when the user selects a prediction and retrieve
 // more details for that place.
 searchInput.addListener("places_changed", () => {
    searchInput.getPlaces(); 
});


// Drop Box




//Form Questions -- Styling for turning input field green to confirm


// Property Address Field

homepageAddress.addEventListener('blur', function onblurName() {
    homepageAddress.value.length > "" ? homepageAddress.style.backgroundColor = "#7feaff85" : null;
});

homepageAddress.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? homepageAddress.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? homepageAddress.style.backgroundColor = "white" : null;
});


// Bed/Bath/Parking Field

const bedBath = document.getElementById('bedBathParking')

bedBath.addEventListener('blur', function onblurName() {
    bedBath.value.length > "" ? bedBath.style.backgroundColor = "#7feaff85" : null;
});

bedBath.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? bedBath.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? bedBath.style.backgroundColor = "white" : null;
});


// Living Space Field

const livingSpace = document.getElementById('livingSpace')

livingSpace.addEventListener('blur', function onblurName() {
    livingSpace.value.length > "" ? livingSpace.style.backgroundColor = "#7feaff85" : null;
});

livingSpace.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? livingSpace.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? livingSpace.style.backgroundColor = "white" : null;
});


// Living Size Field

const lotSizeSpace = document.getElementById('lotSizeSpace')

lotSizeSpace.addEventListener('blur', function onblurName() {
    lotSizeSpace.value.length > "" ? lotSizeSpace.style.backgroundColor = "#7feaff85" : null;
});

lotSizeSpace.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? lotSizeSpace.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? lotSizeSpace.style.backgroundColor = "white" : null;
});


// Year Built Field

const homeYearBuilt = document.getElementById('homeYearBuilt')

homeYearBuilt.addEventListener('blur', function onblurName() {
    homeYearBuilt.value.length > "" ? homeYearBuilt.style.backgroundColor = "#7feaff85" : null;
});

homeYearBuilt.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? homeYearBuilt.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? homeYearBuilt.style.backgroundColor = "white" : null;
});


// Rent Rate Field

const rentRate = document.getElementById('rentRate')

rentRate.addEventListener('blur', function onblurName() {
    rentRate.value.length > "" ? rentRate.style.backgroundColor = "#7feaff85" : null;
});

rentRate.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? rentRate.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? rentRate.style.backgroundColor = "white" : null;
});


// Link to Pictures Field

const homePictureLink = document.getElementById('homePictureLink')

homePictureLink.addEventListener('blur', function onblurName() {
    homePictureLink.value.length > "" ? homePictureLink.style.backgroundColor = "#7feaff85" : null;
});

homePictureLink.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? homePictureLink.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? homePictureLink.style.backgroundColor = "white" : null;
});


// Asking Price Field

const askingPrice = document.getElementById('askingPrice')

askingPrice.addEventListener('blur', function onblurName() {
    askingPrice.value.length > "" ? askingPrice.style.backgroundColor = "#7feaff85" : null;
});

askingPrice.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? askingPrice.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? askingPrice.style.backgroundColor = "white" : null;
});


// COE Field

const homeCOE = document.getElementById('homeCOE')

homeCOE.addEventListener('blur', function onblurName() {
    homeCOE.value.length > "" ? homeCOE.style.backgroundColor = "#7feaff85" : null;
});


// Additional Notes Field

const homeAdditionalNotes = document.getElementById('homeAdditionalNotes')

homeAdditionalNotes.addEventListener('blur', function onblurName() {
    homeAdditionalNotes.value.length > "" ? homeAdditionalNotes.style.backgroundColor = "#7feaff85" : null;
});

homeAdditionalNotes.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? homeAdditionalNotes.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? homeAdditionalNotes.style.backgroundColor = "white" : null;
});


// How old is the HVAC, roof & Windows Field

const howOld = document.getElementById('howOld')

howOld.addEventListener('blur', function onblurName() {
    howOld.value.length > "" ? howOld.style.backgroundColor = "#7feaff85" : null;
});

howOld.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? howOld.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? howOld.style.backgroundColor = "white" : null;
});


// Any major electrical, plumbing, or foundation issues Field

const majorIssues = document.getElementById('majorIssues')

majorIssues.addEventListener('blur', function onblurName() {
    majorIssues.value.length > "" ? majorIssues.style.backgroundColor = "#7feaff85" : null;
});

majorIssues.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? majorIssues.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? majorIssues.style.backgroundColor = "white" : null;
});


// Your Full Name Field

const fullName = document.getElementById('fullName')

fullName.addEventListener('blur', function onblurName() {
    fullName.value.length > "" ? fullName.style.backgroundColor = "#7feaff85" : null;
});

fullName.addEventListener('keydown', function runEvent(e) {
    e.key === 'Enter' ? fullName.style.backgroundColor = "#7feaff85" : null;
    e.key === 'Backspace' ? fullName.style.backgroundColor = "white" : null;
});


// Your Full Name Field

const formEmail = document.getElementById('formEmail')

formEmail.addEventListener('keydown', function titleOfficerEmailEvent(e) {
    e.key === 'Enter' ? formEmail.style.backgroundColor = "#7feaff85" : null;

    if (!formEmail.value.includes('@')) { // not email
        formEmail.classList.add('invalid');
        formEmail.innerHTML = 'Please enter a correct email.'
    }

    e.key === 'Backspace' ? formEmail.style.backgroundColor = "white" : null;
});

formEmail.onblur = function() {
if (!formEmail.value.includes('@')) { // not email
    formEmail.classList.add('invalid');
    errorTitle.innerHTML = 'Please enter a correct email.'
}
};

formEmail.onfocus = function() {
if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    errorTitle.innerHTML = "";
}
};


// Phone Number Field

const formPhoneNumber = document.getElementById('formPhoneNumber');
let regexpr0 = /\D/g

formPhoneNumber.addEventListener('blur', function onblurName() {
    formPhoneNumber.value.length > "" ? formPhoneNumber.style.backgroundColor = "#7feaff85" : null;
});

formPhoneNumber.addEventListener("keydown", function companyNumber(e) {
    e.key === 'Enter' && formPhoneNumber.value > "" ? formPhoneNumber.style.backgroundColor = "#7feaff85" : e.key === 'Backspace' ? formPhoneNumber.style.backgroundColor = "White" : null;

    let cNum = formPhoneNumber.value.replace(regexpr0, "");

    //Adds parenthesis and dashes to format phone number
    cNum.length < 3 ? formPhoneNumber.value = cNum.substring(0) : 
    3 < cNum.length && cNum.length <= 6 ? formPhoneNumber.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3) : 
    7 <= cNum.length ? formPhoneNumber.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3, 6) + "-" + cNum.substring(6) : 
    null;

});

//limits the max length of the phone number
formPhoneNumber.addEventListener("keydown", function maxPhoneNumber(e) {
    let rawNumbers = formPhoneNumber.value.replace(regexpr0, "");

    rawNumbers.length > 9 && e.key != "Backspace" ? e.preventDefault() :
    e.key === "Enter" && formPhoneNumber.value.length === 14 ? console.log(formPhoneNumber.value) :
    null;
});


const homeFormData = document.getElementById('submitHomeForm');

if (homeFormData) {
    homeFormData.addEventListener('click', function formSubmit(e){
e.preventDefault();

// Values from Form
const addressValue = document.getElementById("homepageAddress").value;
const addressAnswer = addressValue.replace(', USA', '');

const bedBathValue = document.getElementById("bedBathParking").value;


// Get selection from Pool Selection on Form
const poolYes = document.getElementById('poolYes');
const poolNo = document.getElementById('poolNo');

if (poolYes.checked) {
    var poolYesAnswer = document.getElementById("poolYes").value
};
if (poolNo.checked) {
    var poolNoAnswer = document.getElementById("poolNo").value
};

poolYesAnswer != undefined ? homeFormData.pool = "Yes" :
poolNoAnswer != undefined ? homeFormData.pool = "No" :
null;

// 

const livingSpaceAnswer = document.getElementById("livingSpace").value;

const lotSizeAnswer = document.getElementById("lotSizeSpace").value;

const yearBuiltAnswer = document.getElementById("homeYearBuilt").value;


// Selection for What is the Condition on Form
const likeNew = document.getElementById('likeNew');
const fair = document.getElementById('fair');
const tearDown = document.getElementById('teardown');
const good = document.getElementById('good');
const poor = document.getElementById('poor');
const land = document.getElementById('land');


if (likeNew.checked) {
    var likeNewAnswer = likeNew.value
};
if (fair.checked) {
   var fairAnswer = fair.value
};
if (tearDown.checked) {
  var tearDownAnswer = tearDown.value
};
if (good.checked) {
   var goodAnswer = good.value
};
if (poor.checked) {
   var pooranswer = poor.value
};
if (land.checked) {
    var landAnswer = land.value
};


likeNewAnswer!= undefined ? homeFormData.condition = "Like New" :
fairAnswer != undefined ? homeFormData.condition = "Fair - Deferred Maintenance" :
tearDownAnswer != undefined ? homeFormData.condition = "Complete Teardown" :
goodAnswer != undefined ? homeFormData.condition = "Good - Well Maintained" :
poorAnswer != undefined ? homeFormData.condition = "Poor - Needs Rpairs" :
landAnswer != undefined ? homeFormData.condition = "Land" :
null;

// 


// Selection for Occupancy on Form
const vacant = document.getElementById('vacant');
const ownerOccupied = document.getElementById('ownerOccupied');
const tenantOccupied = document.getElementById('tenantOccupied');

if (vacant.checked) {
   var vacantAnswer = vacant.value
};
if (ownerOccupied.checked) {
   var ownerOccupiedAnswer = ownerOccupied.value
};
if (tenantOccupied.checked) {
   var tenantOccupiedAnswer = tenantOccupied.value
};

vacantAnswer != undefined ? homeFormData.occupancy = "Vacant" :
ownerOccupiedAnswer != undefined ? homeFormData.occupancy = "Owner Occupied" :
tenantOccupiedAnswer != undefined ? homeFormData.occupancy = "Tenant Occupied" :
null;

// 


const rentRateAnswer = document.getElementById('rentRate').value


// Selection for Type of Access on Form
const byAppointment = document.getElementById('byAppointment').checked;
const lockbox = document.getElementById('lockbox').checked;
const noAccess = document.getElementById('noAccess').checked;

if (byAppointment.checked) {
   var byAppointmentAnswer = byAppointment.value
};
if (lockbox.checked) {
   var lockboxAnswer = lockbox.value
};
if (noAccess.checked) {
   var noAccessAnswer = noAccess.value
};

byAppointmentAnswer != undefined ? homeFormData.typeOfAccess = "By Appointment" :
lockboxAnswer != undefined ? homeFormData.typeOfAccess = "Lockbox" : 
noAccessAnswer != undefined ? homeFormData.typeOfAccess = "No Access" :
null;

// 

const homePictureLinkAnswer = document.getElementById('homePictureLink').value;

const askingPriceAnswer = document.getElementById('askingPrice').value;


// Selection for Under Contract on Form
const directToSeller = document.getElementById('yesDirectSeller').checked;
const yesAgent = document.getElementById('yesAgent').checked;
const yesPartner = document.getElementById('yesPartner').checked;

if (directToSeller.checked) {
   var directToSellerAnswer = directToSeller.value
};
if (yesAgent.checked) {
   var yesAgentAnswer = yesAgent.value
};
if (yesPartner.checked) {
   var yesPartnerAnswer = yesPartner.value
};

directToSellerAnswer != undefined ? homeFormData.underContract = "Yes, Direct to Seller" :
yesAgentAnswer != undefined ? homeFormData.underContract = "Yes, with an Agent" :
yesPartnerAnswer != undefined ? homeFormData.underContract = "Yes, with Another Partner" :
null;

// 

const coeAnswer = document.getElementById('homeCOE').value;

const additionalAnswer = document.getElementById('homeAdditionalNotes').value;

const howOldAnswer = document.getElementById('howOld').value;

const majorIssuesAnswer = document.getElementById('majorIssues').value;

const fullNameAnswer = document.getElementById('fullName').value;

const formEmailAnswer = document.getElementById('formEmail').value;

const formNumberAnswer = document.getElementById('formPhoneNumber').value;


//Creating a Unique ID with current date and random string
var homeFormID = Math.random().toString(36).substr(2, 5);
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
var uniqueID = homeFormID + utc;


const homeFormOutput = [uniqueID, addressAnswer, bedBathValue, homeFormData.pool, livingSpaceAnswer, lotSizeAnswer, yearBuiltAnswer, homeFormData.condition, homeFormData.occupancy, rentRateAnswer, homeFormData.typeOfAccess, homePictureLinkAnswer, askingPriceAnswer, homeFormData.underContract, coeAnswer, additionalAnswer, howOldAnswer, majorIssuesAnswer, fullNameAnswer, formEmailAnswer, formNumberAnswer]


//Save variables in to one local storage file
localStorage.setItem("SubmitADeal-" + uniqueID, JSON.stringify(homeFormOutput)); //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------

//Reload page after clicking submit
window.location.reload();

    })}


    