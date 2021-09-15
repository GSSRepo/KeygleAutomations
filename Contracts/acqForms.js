// import { saveAs } from '../node_modules/file-saver/src/FileSaver';

// var FileSaver = require('../node_modules/file-saver/src/FileSaver');

// let acqContracts = [{
//     question: "Your Full Name:",
//     fullName : ""
// },
// {   
//     question: "Written Offer:",
//     writtenOffer : {
//         writtenYes: true, 
//         writtenNo: true}
// },
// {
//     question: "Who is the supplier:",
//     whoSupplier : {
//         directToSeller: true, 
//         wholesaler: true, 
//         agent: true}
// },

// {
//     question: "Name of Supplier/Agent",
//     doubleEscrow : {
//         nameSupplierAgent : ""
// }
// },

// {
//     question: "Suppliers Email",
//     supplierEmail : ""
// },
// {
//     question: "Suppliers Phone Number:",
//     supplierPhoneNumber : ""
// },
// {
//     question: "Property Address",
//     propertyAddress : ""
// },
// {
//     question: "ARV",
//     arv : "some value",
// },
// {
//     question: "Net Price",
//     signerName : "some value"
// },
// {
//     question: "Sale Price Expectation",
//     vesting: "some value"
// },

// {
//     question: "Earnest Money Deposit",
//     contractPrice: "some value"
// },

// {
//     question: "Option Fee:",
//     contractPrice: "some value"
// },

// {
//     question: "How are we splitting this deal with the supplier?",
//     split1 : true,
//     split3 : true
// },

// {
//     question: "Do we need to send a JV agreement?",
//     jvYes : true,
//     jvNo : true,
// },

// {
//     question: "Additional Cost:",
//     contractPrice: "some value"
// },

// {
//     question: "Are we paying closing cost?",
//     closingCostYes: true,
//     closingCostNo: true
// },

// {
//     question: "When is COE?",
//     closeOfEscrow: Date.prototype.valueOf()
// },

// {
//     question: "IP Length:",
//     ipLength: ""
// },

// {
//     question: "Title Company/Attorney Name:",
//     titleName: ""
// },

// {
//     question: "Title Officer Name:",
//     titleOfficerName: ""
// },

// {
//     question: "Title Company Email:",
//     titleCompanyEmail: ""
// },

// {
//     question: "Title Company Phone Number:",
//     byAppointment : true,
//     lockBox : true,
//     noAccess : true
// },

// {
//     question: "Post Possession:",
//     postPossessionYes : true,
//     postPossessionNo : true,
// },

// {
//     question: "Lease Details:",
//     vacant : true,
//     tenantCOE : true,
//     tenantContinue : true,
//     ownerCOE : true,
//     other : true
// },

// {
//     question: "If tenant occupied, what is current rent:",
//     currrentRent: "some value"
// },

// {
//     question: "If tenant occupied, what is lease term:",
//     tenantLeaseTerm: "some value"
// },

// {
//     question: "Additional Notes Supplier/Agent Mentioned:",
//     additionalNotes: ""
// },

// {
//     question: "Number of Bedrooms:",
//     bedrooms: "some value"
// },

// {
//     question: "Number of Baths:",
//     baths: "some value"
// },

// {
//     question: "Parking:",
//     garage : true,
//     garageDetached : true,
//     carport : true,
//     onStreet : true,
//     noParking : true,
//     na : true
// },

// {
//     question: "Pool:",
//     poolYes : true,
//     poolNo : true,
// },

// {
//     question: "Living Area (Put Sqft):",
//     livingArea: "some value"
// },

// {
//     question: "Lot Size (Put Sqft or Acres):",
//     lotSize: "some value"
// },

// {
//     question: "Year Built:",
//     yearBuilt: "some value"
// },

// {
//     question: "Link to Pictures:",
//     picturesLink: ""
// },

// ]




function previewFile() {
    const propPhoto = document.querySelector('input[type=file]').files[0];
    const output = document.getElementById('output_image');
    const reader = new FileReader();


    reader.addEventListener("load", function () {
        // convert image file to base64 string
        output.src = reader.result;

        const imageOutput = output.src
  
      }, false);
    
      if (propPhoto) {
        reader.readAsDataURL(propPhoto);
      }
  }





//Your Full Name Form----------------

const nameInput = document.getElementById("yourFullName");

nameInput.addEventListener('keydown', runEvent) 
nameInput.addEventListener('blur', onblurName) 

function onblurName() {
    if (nameInput.value.length > "") {
        nameInput.style.backgroundColor = "Aquamarine";
      
    }
};

function runEvent(e) {
    if (e.key === 'Enter') {
        nameInput.style.backgroundColor = "Aquamarine";
    console.log(nameInput.value);
    }

    if (e.key === 'Backspace') {
        nameInput.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

}




//Written Offer Form----------------

const writtenOfferYes = document.getElementById("writtenYes");
const writtenOfferNo = document.getElementById("writtenNo");

writtenOfferYes.onclick = function () {
    const writtenOfferYesSelect = document.getElementById("writtenYes");
    console.log(writtenOfferYesSelect.value)
}

writtenOfferNo.onclick = function () {
    const writtenOfferNoSelect = document.getElementById("writtenNo");
    console.log(writtenOfferNoSelect.value)
}



//Who is the Supplier Form---------------

const directToSeller = document.getElementById("directToSeller")
const wholesaler = document.getElementById("wholesaler")
const supplier = document.getElementById("agent")

directToSeller.onclick = function () {
    const directToSellerSelect = document.getElementById("directToSeller");
    console.log(directToSellerSelect.value)
}

wholesaler.onclick = function () {
    const wholesalerSelect = document.getElementById("wholesaler");
    console.log(wholesalerSelect.value)
}

agent.onclick = function () {
    const agentSelect = document.getElementById("agent");
    console.log(agentSelect.value)
}


//Name of Supplier/Agent -------------

const supplierName = document.getElementById("supplierName");

supplierName.addEventListener('keydown', supplierEvent) 
supplierName.addEventListener('blur', onblurSupplierName) 

function onblurSupplierName() {
    if (supplierName.value.length > "") {
        supplierName.style.backgroundColor = "Aquamarine";
      
    }
};

function supplierEvent(e) {
    if (e.key === 'Enter') {
        supplierName.style.backgroundColor = "Aquamarine";
    console.log(supplierName.value)
    }

    if (e.key === 'Backspace') {
        supplierName.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}


//Supplier's Email ------------------

const supplierEmail = document.getElementById("supplierEmail");

supplierEmail.addEventListener('keydown', supplierEmailEvent) 



function supplierEmailEvent(e) {
    if (e.key === 'Enter') {
        supplierEmail.style.backgroundColor = "Aquamarine";
    console.log(supplierEmail.value)

    if (!supplierEmail.value.includes('@')) { // not email
        supplierEmail.classList.add('invalid');
        error.innerHTML = 'Please enter a correct email.'
      }
    }

    if (e.key === 'Backspace') {
        supplierEmail.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
    
}

supplierEmail.onblur = function() {
    if (!supplierEmail.value.includes('@')) { // not email
      supplierEmail.classList.add('invalid');
      error.innerHTML = 'Please enter a correct email.'
    }

    else {
        supplierEmail.style.backgroundColor = "Aquamarine";
    }
  };
  
  supplierEmail.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // remove the "error" indication, because the user wants to re-enter something
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };

//Supplier's Phone Number -----------------------

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const supplierPhone = document.getElementById("supplierPhone");

supplierPhone.addEventListener('keydown', supplierPhoneEvent) 
supplierPhone.addEventListener('blur', onblurSupplierPhone) 

function onblurSupplierPhone() {
    if (supplierPhone.value.length > "") {
        supplierPhone.style.backgroundColor = "Aquamarine";
      
    }
};

function supplierPhoneEvent(e) {
    if (e.key === 'Enter') {
        supplierPhone.style.backgroundColor = "Aquamarine"; 
    }

    if (e.key === 'Backspace') {
        supplierPhone.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }


    console.log(supplierPhone.value)
};

const inputElement = document.getElementById('supplierPhone');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);


//Property Address ------------------

const propertyAddress = document.getElementById("propertyAddress");

propertyAddress.addEventListener('keydown', propertyAddressOutput) 
propertyAddress.addEventListener('blur', onblurPropertyAddress) 

function onblurPropertyAddress() {
    if (propertyAddress.value.length > "") {
        propertyAddress.style.backgroundColor = "Aquamarine";
      
    }
};

function propertyAddressOutput(e) {
    if (e.key === 'Enter') {
        propertyAddress.style.backgroundColor = "Aquamarine";
    console.log(propertyAddress.value)
    }

    if (e.key === 'Backspace') {
        propertyAddress.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}


// Create the search box and link it to the UI element.
const searchBox = new google.maps.places.Autocomplete(propertyAddress);

searchBox.setComponentRestrictions({
   country: ["us"],
 });
 // Listen for the event fired when the user selects a prediction and retrieve
 // more details for that place.
 searchBox.addListener("places_changed", () => {
   searchBox.getPlaces(); 
});


//ARV -----------------------------------

const arv = document.getElementById("arv");

arv.addEventListener("input", arvOutput);
arv.addEventListener('keydown', printARVPrice);
arv.addEventListener('blur', onblurARV);

function onblurARV() {
    if (arv.value.length > "") {
        arv.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        arv.value = arv.value.replace(regexpr2, "");
        arv.value = currencyFormat.format(parseFloat(arv.value));
        arv.value = "$" + arv.value;
        console.log(arv.value);
      
    }
};

var currencyFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2});
let regexpr2 = /[A-Za-z$,]+/g;


function arvOutput(e) {

    if (arv.value === "" || arv.value === "$") {
        arv.value = 0;
        //to ensure that the default $0 remains
        arv.value = currencyFormat.format(parseFloat(arv.value));
        arv.value = "$" + arv.value;
    }
    let last = arv.value.slice(-1);
    if (e.data != "." && last != ".") {
        arv.value = arv.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        arv.value = currencyFormat.format(parseFloat(arv.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        arv.value = "$" + arv.value; //simply concatenates the $ to the front of the number
    }
}

function printARVPrice(e) {
    if (e.key === "Enter" && arv.value > "") {

        arv.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        arv.value = arv.value.replace(regexpr2, "");
        arv.value = currencyFormat.format(parseFloat(arv.value));
        arv.value = "$" + arv.value;
        console.log(arv.value);
    }

    if (e.key === "Backspace") {
        arv.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = arv.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}



//Net Price ----------------------------------------

const netPrice = document.getElementById("netPrice");


netPrice.addEventListener("input", netPriceOutput);
netPrice.addEventListener('keydown', printNetPrice);
netPrice.addEventListener('blur', onblurNetPrice);

function onblurNetPrice() {
    if (netPrice.value.length > "") {
        netPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        netPrice.value = netPrice.value.replace(regexpr2, "");
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + netPrice.value;
        console.log(netPrice.value);
      
    }
};


function netPriceOutput(e) {

    if (netPrice.value === "" || netPrice.value === "$") {
        netPrice.value = 0;
        //to ensure that the default $0 remains
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + arv.value;
    }
    let last = netPrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        netPrice.value = netPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        netPrice.value = "$" + netPrice.value; //simply concatenates the $ to the front of the number
    }
}

function printNetPrice(e) {
    if (e.key === "Enter" && netPrice.value > "") {

        netPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        netPrice.value = netPrice.value.replace(regexpr2, "");
        netPrice.value = currencyFormat.format(parseFloat(netPrice.value));
        netPrice.value = "$" + netPrice.value;
        console.log(netPrice.value);
    }

    if (e.key === "Backspace") {
        netPrice.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = netPrice.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}



//Sale Price Expectation -----------------------------------

const salePrice = document.getElementById("salePrice");


salePrice.addEventListener("input", salePriceOutput);
salePrice.addEventListener('keydown', printSalePrice);
salePrice.addEventListener('blur', onblurSalePrice);

function onblurSalePrice() {
    if (salePrice.value.length > "") {
        salePrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        salePrice.value = salePrice.value.replace(regexpr2, "");
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
        salePrice.value = "$" + salePrice.value;
        console.log(salePrice.value);
      
    }
};


function salePriceOutput(e) {

    if (salePrice.value === "" || salePrice.value === "$") {
        salePrice.value = 0;
        //to ensure that the default $0 remains
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
        salePrice.value = "$" + arv.value;
    }
    let last = salePrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        salePrice.value = salePrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        salePrice.value = "$" + salePrice.value; //simply concatenates the $ to the front of the number
    }
}

function printSalePrice(e) {
    if (e.key === "Enter" && salePrice.value > "") {

        salePrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        salePrice.value = salePrice.value.replace(regexpr2, "");
        salePrice.value = currencyFormat.format(parseFloat(salePrice.value));
        salePrice.value = "$" + salePrice.value;
        console.log(salePrice.value);
    }

    if (e.key === "Backspace") {
        salePrice.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = salePrice.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}



//Earnest Money Deposit -----------------------------------

const earnestPriceValue = document.getElementById("earnestPrice");


earnestPriceValue.addEventListener("input", earnestPriceValueOutput);
earnestPriceValue.addEventListener('keydown', printEarnestPriceValue);
earnestPriceValue.addEventListener('blur', onblurearnestPriceValue);

function onblurearnestPriceValue() {
    if (earnestPriceValue.value.length > "") {
        earnestPriceValue.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        earnestPriceValue.value = earnestPriceValue.value.replace(regexpr2, "");
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value));
        earnestPriceValue.value = "$" + earnestPriceValue.value;
        console.log(earnestPriceValue.value);
      
    }
};


function earnestPriceValueOutput(e) {

    if (earnestPriceValue.value === "" || earnestPriceValue.value === "$") {
        earnestPriceValue.value = 0;
        //to ensure that the default $0 remains
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value));
        earnestPriceValue.value = "$" + arv.value;
    }
    let last = earnestPriceValue.value.slice(-1);
    if (e.data != "." && last != ".") {
        earnestPriceValue.value = earnestPriceValue.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        earnestPriceValue.value = "$" + earnestPriceValue.value; //simply concatenates the $ to the front of the number
    }
}

function printEarnestPriceValue(e) {
    if (e.key === "Enter" && earnestPriceValue.value > "") {

        earnestPriceValue.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        earnestPriceValue.value = earnestPriceValue.value.replace(regexpr2, "");
        earnestPriceValue.value = currencyFormat.format(parseFloat(earnestPriceValue.value));
        earnestPriceValue.value = "$" + earnestPriceValue.value;
        console.log(earnestPriceValue.value);
    }

    if (e.key === "Backspace") {
        earnestPriceValue.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = earnestPriceValue.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}



//Option Fee -----------------------------------

const optionPrice = document.getElementById("optionPrice");


optionPrice.addEventListener("input", optionPriceOutput);
optionPrice.addEventListener('keydown', printOptionPrice);
optionPrice.addEventListener('blur', onblurOptionPrice);

function onblurOptionPrice() {
    if (optionPrice.value.length > "") {
        optionPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        optionPrice.value = optionPrice.value.replace(regexpr2, "");
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value));
        optionPrice.value = "$" + optionPrice.value;
        console.log(optionPrice.value);
      
    }
};


function optionPriceOutput(e) {

    if (optionPrice.value === "" || optionPrice.value === "$") {
        optionPrice.value = 0;
        //to ensure that the default $0 remains
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value));
        optionPrice.value = "$" + arv.value;
    }
    let last = optionPrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        optionPrice.value = optionPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        optionPrice.value = "$" + optionPrice.value; //simply concatenates the $ to the front of the number
    }
}

function printOptionPrice(e) {
    if (e.key === "Enter" && optionPrice.value > "") {

        optionPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        optionPrice.value = optionPrice.value.replace(regexpr2, "");
        optionPrice.value = currencyFormat.format(parseFloat(optionPrice.value));
        optionPrice.value = "$" + optionPrice.value;
        console.log(optionPrice.value);
    }

    if (e.key === "Backspace") {
        optionPrice.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = optionPrice.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}



//How are we splitting this deal with the supplier? -----------------------

const oneHundred = document.getElementById("oneHundred")
const fiftyFifty = document.getElementById("fiftyFifty")
const other = document.getElementById("other")

oneHundred.onclick = function () {
    const dealOneHundred = document.getElementById("oneHundred");
    console.log(dealOneHundred.value)
}

fiftyFifty.onclick = function () {
    const dealFiftyFifty = document.getElementById("fiftyFifty");
    console.log(dealFiftyFifty.value)
}

other.onclick = function () {
    const dealOther = document.getElementById("other");
    console.log(dealOther.value)
}



//Do we need a JV agreement? ------------------------------

const jvYes = document.getElementById("jvYes")
const jvNo = document.getElementById("jvNo")

jvYes.onclick = function () {
    const jvAgreementYes = document.getElementById("jvYes");
    console.log(jvAgreementYes.value)
}

jvNo.onclick = function () {
    const jvAgreementNo = document.getElementById("jvNo");
    console.log(jvAgreementNo.value)
}


//Additional Cost ---------------------------------------

const additionalCost = document.getElementById("additionalCost");


additionalCost.addEventListener("input", additionalCostOutput);
additionalCost.addEventListener('keydown', printAdditionalCost);
additionalCost.addEventListener('blur', onblurAdditionalCost);

function onblurAdditionalCost() {
    if (additionalCost.value.length > "") {
        additionalCost.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        additionalCost.value = additionalCost.value.replace(regexpr2, "");
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value));
        additionalCost.value = "$" + additionalCost.value;
        console.log(additionalCost.value);
      
    }
};


function additionalCostOutput(e) {

    if (additionalCost.value === "" || additionalCost.value === "$") {
        additionalCost.value = 0;
        //to ensure that the default $0 remains
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value));
        additionalCost.value = "$" + arv.value;
    }
    let last = additionalCost.value.slice(-1);
    if (e.data != "." && last != ".") {
        additionalCost.value = additionalCost.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        additionalCost.value = "$" + additionalCost.value; //simply concatenates the $ to the front of the number
    }
}

function printAdditionalCost(e) {
    if (e.key === "Enter" && additionalCost.value > "") {

        additionalCost.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        additionalCost.value = additionalCost.value.replace(regexpr2, "");
        additionalCost.value = currencyFormat.format(parseFloat(additionalCost.value));
        additionalCost.value = "$" + additionalCost.value;
        console.log(additionalCost.value);
    }

    if (e.key === "Backspace") {
        additionalCost.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = additionalCost.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}


//Are we paying closing cost? ---------------------

const closingCostYes = document.getElementById("closingCostYes")
const closingCostNo = document.getElementById("closingCostNo")

closingCostYes.onclick = function () {
    const ccYes = document.getElementById("closingCostYes");
    console.log(ccYes.value)
}

closingCostNo.onclick = function () {
    const ccNo = document.getElementById("closingCostNo");
    console.log(ccNo.value)
}



//When is COE? ----------------------------

const coe = document.getElementById("coe")

coe.onblur = function () {
    const coeDate = document.getElementById("coe");
    console.log(coeDate.value)
}



//IP Length --------------------------------

const ipLength = document.getElementById("ipLength");

ipLength.addEventListener('keydown', ipLengthOutput) 
ipLength.addEventListener('blur', onblurIpLength);

function onblurIpLength() {
    if (ipLength.value.length > "") {
        ipLength.style.backgroundColor = "Aquamarine";  
    }
};

function ipLengthOutput(e) {
    if (e.key === 'Enter') {
        ipLength.style.backgroundColor = "Aquamarine";
    console.log(ipLength.value)
    }

    if (e.key === 'Backspace') {
        ipLength.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}



//Title Company/Attorney Name ----------------------------

const titleAttorneyName = document.getElementById("titleAttorneyName");

titleAttorneyName.addEventListener('keydown', titleAttorneyNameOutput) 
titleAttorneyName.addEventListener('blur', onblurTitleAttorneyName);

function onblurTitleAttorneyName() {
    if (titleAttorneyName.value.length > "") {
        titleAttorneyName.style.backgroundColor = "Aquamarine";
    }
};

function titleAttorneyNameOutput(e) {
    if (e.key === 'Enter') {
        titleAttorneyName.style.backgroundColor = "Aquamarine";
    console.log(titleAttorneyName.value)
    }

    if (e.key === 'Backspace') {
        titleAttorneyName.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}



//Title Officer Name -----------------------------------

const titleOfficerName = document.getElementById("titleOfficerName");

titleOfficerName.addEventListener('keydown', titleOfficerNameOutput) 
titleOfficerName.addEventListener('blur', onblurTitleOfficerName);

function onblurTitleOfficerName() {
    if (titleOfficerName.value.length > "") {
        titleOfficerName.style.backgroundColor = "Aquamarine";
    }
};

function titleOfficerNameOutput(e) {
    if (e.key === 'Enter') {
        titleOfficerName.style.backgroundColor = "Aquamarine";
    console.log(titleOfficerName.value)
    }

    if (e.key === 'Backspace') {
        titleOfficerName.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}



//Title Officer Email ---------------------------------

const titleOfficerEmail = document.getElementById("titleOfficerEmail");

titleOfficerEmail.addEventListener('keydown', titleOfficerEmailEvent) 



function titleOfficerEmailEvent(e) {
    if (e.key === 'Enter') {
        titleOfficerEmail.style.backgroundColor = "Aquamarine";

        if (!titleOfficerEmail.value.includes('@')) { // not email
            titleOfficerEmail.classList.add('invalid');
          errorTitle.innerHTML = 'Please enter a correct email.'
        }
    console.log(titleOfficerEmail.value)
    }

    if (e.key === 'Backspace') {
        titleOfficerEmail.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
    
}

titleOfficerEmail.onblur = function() {
    if (!titleOfficerEmail.value.includes('@')) { // not email
        titleOfficerEmail.classList.add('invalid');
      errorTitle.innerHTML = 'Please enter a correct email.'
    }
  };
  
  titleOfficerEmail.onfocus = function() {
    if (this.classList.contains('invalid')) {
      // remove the "error" indication, because the user wants to re-enter something
      this.classList.remove('invalid');
      errorTitle.innerHTML = "";
    }
  };



  //Title Company's Phone Number -------------------------

  const titleCompanyPhone = document.getElementById("titleCompanyPhone");

  titleCompanyPhone.addEventListener('keydown', titleCompanyPhoneEvent) 
  titleCompanyPhone.addEventListener('blur', onblurTitleCompanyName);

  function onblurTitleCompanyName() {
      if (titleCompanyPhone.value.length > "") {
        titleCompanyPhone.style.backgroundColor = "Aquamarine";
      }
  };

function titleCompanyPhoneEvent(e) {
    if (e.key === 'Enter') {
        titleCompanyPhone.style.backgroundColor = "Aquamarine"; 
    }

    if (e.key === 'Backspace') {
        titleCompanyPhone.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }


    console.log(titleCompanyPhone.value)
};

const titleCompanyInputElement = document.getElementById('titleCompanyPhone');
titleCompanyInputElement.addEventListener('keydown',enforceFormat);
titleCompanyInputElement.addEventListener('keyup',formatToPhone);


// Type of Access ---------------------------------

const byAppointment = document.getElementById("byAppointment")
const lockbox = document.getElementById("lockbox")
const noAccess = document.getElementById("noAccess")

byAppointment.onclick = function () {
    const byAppointmentselect = document.getElementById("byAppointment");
    console.log(byAppointmentselect.value)
}

lockbox.onclick = function () {
    const lockboxSelect = document.getElementById("lockbox");
    console.log(lockboxSelect.value)
}

noAccess.onclick = function () {
    const noAccessSelect = document.getElementById("noAccess");
    console.log(noAccessSelect.value)
}


// Post Possession --------------------------

const postPosessionYes = document.getElementById("postPosessionYes")
const postPosessionNo = document.getElementById("postPosessionNo")

postPosessionYes.onclick = function () {
    const postPosessionYesselect = document.getElementById("postPosessionYes");
    console.log(postPosessionYesselect.value)
}

postPosessionNo.onclick = function () {
    const postPosessionNoSelect = document.getElementById("postPosessionNo");
    console.log(postPosessionNoSelect.value)
}


// Lease Details --------------------------

const leaseVacant = document.getElementById("leaseVacant")
const tenantOccupiedVacant = document.getElementById("tenantOccupiedVacant")
const tenantOccupiedRent = document.getElementById("tenantOccupiedRent")
const ownerOccupiedVacant = document.getElementById("ownerOccupiedVacant")
const leaseOther = document.getElementById("leaseOther")



leaseVacant.onclick = function () {
    const leaseVacantSelect = document.getElementById("leaseVacant");
    console.log(leaseVacantSelect.value)
}

tenantOccupiedVacant.onclick = function () {
    const tenantOccupiedVacantSelect = document.getElementById("tenantOccupiedVacant");
    console.log(tenantOccupiedVacantSelect.value)
}

tenantOccupiedRent.onclick = function () {
    const tenantOccupiedRentSelect = document.getElementById("tenantOccupiedRent");
    console.log(tenantOccupiedRentSelect.value)
}

ownerOccupiedVacant.onclick = function () {
    const ownerOccupiedVacantSelect = document.getElementById("ownerOccupiedVacant");
    console.log(ownerOccupiedVacantSelect.value)
}

leaseOther.onclick = function () {
    const leaseOtherSelect = document.getElementById("leaseOther");
    console.log(leaseOtherSelect.value)
}


// If tenant occupied, what is current rent ---------------------------

const tenantRent = document.getElementById("tenantRent");

tenantRent.addEventListener('keydown', tenantRentOutput) 
tenantRent.addEventListener('blur', onblurTenantRent);

function onblurTenantRent() {
    if (tenantRent.value.length > "") {
        tenantRent.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        tenantRent.value = tenantRent.value.replace(regexpr2, "");
        tenantRent.value = currencyFormat.format(parseFloat(tenantRent.value));
        tenantRent.value = "$" + tenantRent.value;
        console.log(tenantRent.value);
      
    }
};

function tenantRentOutput(e) {
    if (e.key === 'Enter') {
        tenantRent.style.backgroundColor = "Aquamarine";
    console.log(tenantRent.value)
    }

    if (e.key === 'Backspace') {
        tenantRent.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else ( tenantRent == null)

}



// If tenant occupied, what is lease term ---------------------------

const tenantTerm = document.getElementById("tenantTerm");

tenantTerm.addEventListener('keydown', tenantTermOutput) 
tenantTerm.addEventListener('blur', onblurTenantTerm);

function onblurTenantTerm() {
    if (tenantTerm.value.length > "") {
        tenantTerm.style.backgroundColor = "Aquamarine";
    }
};

function tenantTermOutput(e) {
    if (e.key === 'Enter') {
        tenantTerm.style.backgroundColor = "Aquamarine";
    console.log(tenantTerm.value)
    }

    if (e.key === 'Backspace') {
        tenantTerm.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else ( tenantTerm == null)

}



// Additional Notes Supplier/Agent Mentioned -------------------------

const additionalSupplierAgentNotes = document.getElementById("additionalSupplierAgentNotes");

additionalSupplierAgentNotes.addEventListener('keydown', additionalSupplierAgentNotesOutput) 
additionalSupplierAgentNotes.addEventListener('blur', onblurAddNotes);

function onblurAddNotes() {
    if (additionalSupplierAgentNotes.value.length > "") {
        additionalSupplierAgentNotes.style.backgroundColor = "Aquamarine";
    }
};

function additionalSupplierAgentNotesOutput(e) {
    if (e.key === 'Enter') {
        additionalSupplierAgentNotes.style.backgroundColor = "Aquamarine";
    console.log(additionalSupplierAgentNotes.value)
    }

    if (e.key === 'Backspace') {
        additionalSupplierAgentNotes.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else ( additionalSupplierAgentNotes == null)

}



// Number of Bedrooms

const bedroomNumber = document.getElementById("bedroomNumber");

bedroomNumber.addEventListener('keydown', bedroomNumberOutput) 
bedroomNumber.addEventListener('blur', onblurBedNumber);

function onblurBedNumber() {
    if (bedroomNumber.value.length > "") {
        bedroomNumber.style.backgroundColor = "Aquamarine";
    }
};

function bedroomNumberOutput(e) {
    if (e.key === 'Enter') {
        bedroomNumber.style.backgroundColor = "Aquamarine";
    console.log(bedroomNumber.value)
    }

    if (e.key === 'Backspace') {
        bedroomNumber.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (bedroomNumber == null)

}


// Number of Baths

const bathNumber = document.getElementById("bathNumber");

bathNumber.addEventListener('keydown', bathNumberOutput) 
bathNumber.addEventListener('blur', onblurBathNumber);

function onblurBathNumber() {
    if (bathNumber.value.length > "") {
        bathNumber.style.backgroundColor = "Aquamarine";
    }
};

function bathNumberOutput(e) {
    if (e.key === 'Enter') {
        bathNumber.style.backgroundColor = "Aquamarine";
    console.log(bathNumber.value)
    }

    if (e.key === 'Backspace') {
        bathNumber.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (bathNumber == null)

}


// Parking ----------------------------------

const garage = document.getElementById("garage")
const garageDetached = document.getElementById("garageDetached")
const carport = document.getElementById("carport")
const onStreet = document.getElementById("onStreet")
const noParking = document.getElementById("noParking")
const parkingNA = document.getElementById("parkingNA")



garage.onclick = function () {
    const garageSelect = document.getElementById("garage");
    console.log(garageSelect.value)
}

garageDetached.onclick = function () {
    const garageDetachedSelect = document.getElementById("garageDetached");
    console.log(garageDetachedSelect.value)
}

carport.onclick = function () {
    const carportSelect = document.getElementById("carport");
    console.log(carportSelect.value)
}

onStreet.onclick = function () {
    const onStreetSelect = document.getElementById("onStreet");
    console.log(onStreetSelect.value)
}

noParking.onclick = function () {
    const noParkingSelect = document.getElementById("noParking");
    console.log(noParkingSelect.value)
}

parkingNA.onclick = function () {
    const parkingNASelect = document.getElementById("parkingNA");
    console.log(parkingNASelect.value)
}


// Pool ----------------------------------------------

const poolYes = document.getElementById("poolYes")
const poolNo = document.getElementById("poolNo")




poolYes.onclick = function () {
    const poolYesSelect = document.getElementById("poolYes");
    console.log(poolYesSelect.value)
}

poolNo.onclick = function () {
    const poolNoSelect = document.getElementById("poolNo");
    console.log(poolNoSelect.value)
}



// Living Area: (Put Sqft) --------------------------------------------

const livingArea = document.getElementById("livingArea");

livingArea.addEventListener('keydown', livingAreaOutput) 
livingArea.addEventListener('blur', onblurLivingArea);

function onblurLivingArea() {
    if (livingArea.value.length > "") {
        livingArea.style.backgroundColor = "Aquamarine";
    }
};

function livingAreaOutput(e) {
    if (e.key === 'Enter') {
        livingArea.style.backgroundColor = "Aquamarine";
    console.log(livingArea.value)
    }

    if (e.key === 'Backspace') {
        livingArea.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (livingArea == null)

}



// Lot Size: (Put Sqft or Acres) --------------------------------------------

const lotSize = document.getElementById("lotSize");

lotSize.addEventListener('keydown', lotSizeOutput) 
lotSize.addEventListener('blur', onblurLotSize);

function onblurLotSize() {
    if (lotSize.value.length > "") {
        lotSize.style.backgroundColor = "Aquamarine";
    }
};

function lotSizeOutput(e) {
    if (e.key === 'Enter') {
        lotSize.style.backgroundColor = "Aquamarine";
    console.log(lotSize.value)
    }

    if (e.key === 'Backspace') {
        lotSize.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (lotSize == null)

}



// Year Build --------------------------------------------

const yearBuild = document.getElementById("yearBuild");

yearBuild.addEventListener('keydown', yearBuildOutput) 
yearBuild.addEventListener('blur', onblurYearBuild);

function onblurYearBuild() {
    if (yearBuild.value.length > "") {
        yearBuild.style.backgroundColor = "Aquamarine";
    }
};

function yearBuildOutput(e) {
    if (e.key === 'Enter') {
        yearBuild.style.backgroundColor = "Aquamarine";
    console.log(yearBuild.value)
    }

    if (e.key === 'Backspace') {
        yearBuild.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (yearBuild == null)

}



// Link to Pictures ----------------------------------------


const linkToPictures = document.getElementById("linkToPictures");

linkToPictures.addEventListener('keydown', linkToPicturesOutput) 
linkToPictures.addEventListener('blur', onblurPics);

function onblurPics() {
    if (linkToPictures.value.length > "") {
        linkToPictures.style.backgroundColor = "Aquamarine";
    }
}; 

function linkToPicturesOutput(e) {
    
    if (e.key === 'Enter') {
        linkToPictures.style.backgroundColor = "Aquamarine";
    console.log(linkToPictures.value)
    }

    if (e.key === 'Backspace') {
        linkToPictures.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (linkToPictures == null)

};


// Market

const market = document.getElementById("market");

market.addEventListener('keydown', marketOutput) 
market.addEventListener('blur', onblurMarket);

function onblurMarket() {
    if (market.value.length > "") {
        market.style.backgroundColor = "Aquamarine";
    }
}; 

function marketOutput(e) {
    if (e.key === 'Enter') {
        market.style.backgroundColor = "Aquamarine";
    console.log(market.value)
    }

    if (e.key === 'Backspace') {
        market.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }

    else (market == null)

}


//------------------------------------------------------------------------------
//------------------------------Submit Form -----------------------------------
//------------------------------------------------------------------------------


const acqData = document.getElementById("submitAcqForm");


  if (acqData) {
    acqData.addEventListener("click", acqSubmit)
   
   function acqSubmit(e) {
    // alert("testing")
    // console.log(dispoOutput)

    e.preventDefault();

    const fullNameValue = document.getElementById("yourFullName").value;
   


//----------------------------------------------------------------------------


    const writtenYes = document.getElementById('writtenYes');
    const writtenNo = document.getElementById('writtenNo');
    
        if (writtenYes.checked) {
            var writtenYesAnswer = document.getElementById("writtenYes").value
        };
        if (writtenNo.checked) {
            var writtenNoAnswer = document.getElementById("writtenNo").value
        };


        //--------------------------------------------

    const directToSeller = document.getElementById('directToSeller');
    const wholesaler = document.getElementById('wholesaler');
    const agent = document.getElementById('agent');


    if (directToSeller.checked) {
        var directToSellerAnswer = document.getElementById('directToSeller').value;
    }
    if (wholesaler.checked) {
        var wholesalerAnswer = document.getElementById('wholesaler').value;
    }
    if (agent.checked) {
        var agentAnswer = document.getElementById('agent').value
    }

  


//----------------------------------------------------------------------------


    const supplierName = document.getElementById("supplierName").value;    

    const supplierEmail = document.getElementById("supplierEmail").value;    

    const supplierNumber = document.getElementById("supplierPhone").value; 


    const addressValue = document.getElementById("propertyAddress").value;
    const addressAnswer = addressValue.replace(', USA', '');


    const ARV = document.getElementById("arv").value;

    const netPrice = document.getElementById("netPrice").value;

    const salePrice = document.getElementById("salePrice").value;

    const EMD = document.getElementById("earnestPrice").value;

    const optionFee = document.getElementById("optionPrice").value;



         //--------------------------------------------

         const oneHundred = document.getElementById('oneHundred');
         const fiftyFifty = document.getElementById('fiftyFifty');
         const other = document.getElementById('other');
     
     
         if (oneHundred.checked) {
             var oneHundredAnswer = document.getElementById('oneHundred').value;
         }
         if (fiftyFifty.checked) {
             var fiftyFiftyAnswer = document.getElementById('fiftyFifty').value;
         }
         if (other.checked) {
             var otherAnswer = document.getElementById('other').value
         }

//----------------------------------------------------------------------------


const jvYes = document.getElementById('jvYes');
const jvNo = document.getElementById('jvNo');

    if (jvYes.checked) {
        var jvYesAnswer = document.getElementById("jvYes").value
    };
    if (jvNo.checked) {
        var jvNoAnswer = document.getElementById("jvNo").value
    };


//----------------------------------------------------------------------------


const additionalCost = document.getElementById("additionalCost").value;




//----------------------------------------------------------------------------


    const closeYes = document.getElementById('closingCostYes');
    const closeNo = document.getElementById('closingCostNo');


            if (closeYes.checked) {
            var closingcostYesAnswer = document.getElementById("closingCostYes").value}
            if (closeNo.checked) {
            var closingCostNoAnswer = document.getElementById("closingCostNo").value}



const COE = document.getElementById('coe').value;

const ipLength = document.getElementById('ipLength').value;

const titleAttorney = document.getElementById('titleAttorneyName').value;

const titleOfficer = document.getElementById('titleOfficerName').value;

const titleOfficerEmail = document.getElementById('titleOfficerEmail').value;

const titlePhoneNumber = document.getElementById('titleCompanyPhone').value;


//----------------------------------------------------------------------------


const byAppointment = document.getElementById('byAppointment');
const lockbox = document.getElementById('lockbox');
const noAccess = document.getElementById('noAccess');


        if (byAppointment.checked) {
    var byAppointmentAnswer = document.getElementById('byAppointment').value;}

        if (lockbox.checked)
    {var lockboxAnswer = document.getElementById('lockbox').value;}

        if (noAccess.checked)
    {var noAccessAnswer = document.getElementById('noAccess').value}




//----------------------------------------------------------------------------


const postPossessionYes = document.getElementById('postPosessionYes');
const postPossessionNo = document.getElementById('postPosessionNo');


            if (postPossessionYes.checked)
        {var postPossessionYesAnswer = document.getElementById("postPosessionYes").value}
            if (postPossessionNo.checked)
        {var postPossessionNoAnswer = document.getElementById("postPosessionNo").value}
    

    //--------------------------------------------

    const leaseVacant = document.getElementById('leaseVacant');
    const tenantOccupiedVacant = document.getElementById('tenantOccupiedVacant');
    const tenantOccupiedRent = document.getElementById('tenantOccupiedRent');
    const ownerOccupiedVacant = document.getElementById('ownerOccupiedVacant');
    const leaseOther = document.getElementById('leaseOther')
    
    
            if (leaseVacant.checked)
        {var leaseVacantAnswer = document.getElementById('leaseVacant').value;}
    
            if (tenantOccupiedVacant.checked)
        {var tenantOccupiedVacantAnswer = document.getElementById('tenantOccupiedVacant').value;}
    
            if (tenantOccupiedRent.checked)
        {var tenantOccupiedRentAnswer = document.getElementById('tenantOccupiedRent').value}

            if (ownerOccupiedVacant.checked)
        {var ownerOccupiedVacantAnswer = document.getElementById('ownerOccupiedVacant').value;}

            if (leaseOther.checked)
        {var leaseOtherAnswer = document.getElementById('leaseOther').value}
    

//----------------------------------------------------------------------------


const tenantRent = document.getElementById('tenantRent').value;

const tenantTerm = document.getElementById('tenantTerm').value;

const additionalNotes = document.getElementById('additionalSupplierAgentNotes').value;

const beds = document.getElementById('bedroomNumber').value;

const baths = document.getElementById('bathNumber').value;

const marketValue = document.getElementById('market').value;

//----------------------------------------------------------------------------


const garage = document.getElementById('garage');
const garageDetached = document.getElementById('garageDetached');
const carport = document.getElementById('carport');
const onStreet = document.getElementById('onStreet');
const noParking = document.getElementById('noParking');
const parkingNA = document.getElementById('parkingNA');


        if (garage.checked)
    {var garageAnswer = document.getElementById('garage').value;}

        if (garageDetached.checked)
    {var garageDetachedAnswer = document.getElementById('garageDetached').value;}

        if (carport.checked)
    {var carportAnswer = document.getElementById('carport').value}

        if (onStreet.checked)
    {var onStreetAnswer = document.getElementById('onStreet').value;}

        if (noParking.checked)
    {var noParkingAnswer = document.getElementById('noParking').value}

        if (parkingNA.checked)
    {var parkingNAAnswer = document.getElementById('parkingNA').value}



//----------------------------------------------------------------------------


const poolYes = document.getElementById('poolYes');
const poolNo = document.getElementById('poolNo');

        if (poolYes.checked)
        {var poolYesAnswer = document.getElementById("poolYes").value}

        if (poolNo.checked)
        {var poolNoAnswer = document.getElementById("poolNo").value}




//----------------------------------------------------------------------------


const livingArea = document.getElementById('livingArea').value;

const lotSize = document.getElementById('lotSize').value;

const yearBuild = document.getElementById('yearBuild').value;

const pictureLink = document.getElementById('linkToPictures').value;



// Switch Case for Selections

// const buyerSelection = null;
// switch (buyerSelection) {
//     case wholesalerAnswer : "Wholesaler";
//     break;
//     case agentAnswer : "Agent";
//     break;
//     case investerAnswer : "Investor";
//     break;
//     default : null
// }

// console.log(buyerSelection)

//If Else for Selections

//Supplier Selection
if (directToSellerAnswer != undefined) {
     acqData.supplier = "Direct To Seller"
        }
        else if (wholesalerAnswer != undefined) {
             acqData.supplier = "Wholesaler"
        }
        else if (agentAnswer != undefined) {
             acqData.supplier = "Agent"
        }

//Written Offer Selection
if (writtenYesAnswer != undefined) {
     acqData.writtenOffer = "Yes"
        }
        else if (writtenNoAnswer != undefined) {
           acqData.writtenOffer = "No"
        }

//Are we Paying Closing Cost Selection
if (closingcostYesAnswer != undefined) {
     acqData.closing = "Yes"
        }
        else if (closingCostNoAnswer != undefined) {
             acqData.closing = "No"
        }

//JV Agreement Selection
if (jvYesAnswer != undefined) {
   acqData.jv = "Yes"
        }
        else if (jvNoAnswer != undefined) {
            acqData.jv = "No"
        }


        if (oneHundredAnswer != undefined) {
            acqData.dealSplit = "100"
               }
               else if (fiftyFiftyAnswer != undefined) {
                    acqData.dealSplit = "50/50"
               }
               else if (otherAnswer != undefined) {
                    acqData.dealSplit = "Other"
               }


               if (byAppointmentAnswer != undefined) {
                acqData.typeOfAccess = "By Appointment"
                   }
                   else if (lockboxAnswer != undefined) {
                        acqData.typeOfAccess = "Lockbox"
                   }
                   else if (noAccessAnswer != undefined) {
                        acqData.typeOfAccess = "No Access"
                   }

    if (postPossessionYesAnswer != undefined) {
     acqData.postPosession = "Yes"
     }
     else if (postPossessionNoAnswer != undefined) {
     acqData.postPosession = "No"
     }



if (leaseVacantAnswer != undefined) {
acqData.leaseDetails = "Vacant"
}
else if (tenantOccupiedVacantAnswer != undefined) {
acqData.leaseDetails = "Tenent Occupied - Vacant @ COE"
}
else if (tenantOccupiedRentAnswer != undefined) {
    acqData.leaseDetails = "Tenent Occupied - Wants to continue rent"
    }
    else if (ownerOccupiedVacantAnswer != undefined) {
        acqData.leaseDetails = "Owner Occupied - Vacant @ COE"
        }
        else if (leaseOtherAnswer != undefined) {
            acqData.leaseDetails = "Other"
            }

            if (garageAnswer != undefined) {
                acqData.parking = "Garage"
                }
                else if (garageDetachedAnswer != undefined) {
                acqData.parking = "Garage - Detached"
                }
                else if (carportAnswer != undefined) {
                    acqData.parking = "Carport"
                    }
                    else if (onStreetAnswer != undefined) {
                        acqData.parking = "On Street"
                        }
                        else if (noParkingAnswer != undefined) {
                            acqData.parking = "No Parking"
                            }
                            else if (parkingNAAnswer != undefined) {
                                acqData.parking = "N/A"
                                }




                                if (poolYesAnswer != undefined) {
                                    acqData.pool = "Yes"
                                    }
                                    else if (poolNoAnswer != undefined) {
                                    acqData.pool = "No"
                                    }


// Image field


const propPhoto = document.getElementById('output_image').src

console.log(propPhoto)



/*Variable Outputs--------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


var acqID = Math.random().toString(36).substr(2, 5);
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
var uniqueID = acqID + utc;

// const dispoDataOutput = {
//     Unique_ID : acqID,
//     Address : addressAnswer,
//     writtenOffer : acqData.writtenOffer,
//     doubleEscrow : acqData.doubleEscrow,
//     titleCompanyAttorney : titleAttorneyAnswer,
//     titleOfficerName : titleOfficerAnswer,
//     titleCompanyEmail : titleEmailAnswer,
//     titleCompanyNumber : titlePhoneAnswer,
//     signersName : signerNameAnswer,
//     vesting : vestingAnswer,
//     contractPricing : contractPriceAnswer,
//     earnestMoney : emdAnswer,
//     closing : acqData.closing,
//     closeEscrowDate : closeEscrowAnswer,
//     closingSooner : acqData.closingSooner,
//     contractExecuted : contractDateAnswer,
//     buyersPhone : buyerPhoneAnswer,
//     emailDocusign : docusignEmailAnswer,
//     name : nameAnswer
// };

const acqFormOutput = [uniqueID, fullNameValue, acqData.writtenOffer, acqData.supplier, supplierName, supplierEmail, supplierNumber, addressAnswer, ARV, netPrice, salePrice, EMD, optionFee,  acqData.dealSplit, acqData.jv , additionalCost, acqData.closing, COE, ipLength, titleAttorney, titleOfficer, titleOfficerEmail, titlePhoneNumber, acqData.postPosession,
acqData.leaseDetails, tenantRent, tenantTerm, additionalNotes, beds, baths, acqData.parking, acqData.pool, livingArea, lotSize, yearBuild, pictureLink, marketValue, propPhoto];




var blob = new Blob(JSON.stringify(acqFormOutput), {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "AcqData.txt");

// localStorage.setItem(dispoID, JSON.stringify(dispoDataOutput));    //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------

localStorage.setItem("A-" + uniqueID, JSON.stringify(acqFormOutput)); //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------
// localStorage.setItem("D05sw9v3pb", JSON.stringify(dispoDataOutput));

// console.log(dispoDataOutput);
window.location.reload();

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
}};