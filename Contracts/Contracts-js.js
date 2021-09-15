

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



//Your Full Name Form----------------

const nameInput = document.getElementById("yourFullName");

nameInput.addEventListener('keydown', runEvent) 

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

function onLoad() {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
for (var i = 0, l = params.length; i < l; i++) {
     tmp = params[i].split('=');
     data[tmp[0]] = tmp[1];
}
document.getElementById('tableDatas').innerHTML = data.name;
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


//ARV -----------------------------------

const arv = document.getElementById("arv");


arv.addEventListener('keydown', arvOutput);


function arvOutput(e) {

    arv.value = arv.value.toString().replace(/(\d\d\d)(?=(\d)+(?!\d))/g, '$1,');

    
    if (e.key === 'Enter') {
        arv.style.backgroundColor = "Aquamarine";
    console.log(arv.value.toLocaleString())
    }

    if (e.key === 'Backspace') {
        arv.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}

function dollarSign() {
    var myValue = document.getElementById("arv").value;

    if (myValue.indexOf("$") != 0)
    {
       myValue = "$" + myValue;
    }
 
    document.getElementById("arv").value = myValue;
}



//Net Price ----------------------------------------

const netPrice = document.getElementById("netPrice");


netPrice.addEventListener('keydown', netPriceOutput);


function netPriceOutput(e) {

    netPrice.value = netPrice.value.toString().replace(/(\d\d\d)(?=(\d)+(?!\d))/g, '$1,');

    
    if (e.key === 'Enter') {
        netPrice.style.backgroundColor = "Aquamarine";
    console.log(netPrice.value.toLocaleString())
    }

    if (e.key === 'Backspace') {
        netPrice.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}

function netDollarSign() {
    let myValue = document.getElementById("netPrice").value;

    if (myValue.indexOf("$") != 0)
    {
       myValue = "$" + myValue;
    }
 
    document.getElementById("netPrice").value = myValue;
}



//Sale Price Expectation -----------------------------------

const salePrice = document.getElementById("salePrice");


salePrice.addEventListener('keydown', salePriceOutput);


function salePriceOutput(e) {

    salePrice.value = salePrice.value.toString().replace(/(\d\d\d)(?=(\d)+(?!\d))/g, '$1,');

    
    if (e.key === 'Enter') {
        salePrice.style.backgroundColor = "Aquamarine";
    console.log(salePrice.value.toLocaleString())
    }

    if (e.key === 'Backspace') {
        salePrice.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}

function saleDollarSign() {
    let myValue = document.getElementById("salePrice").value;

    if (myValue.indexOf("$") != 0)
    {
       myValue = "$" + myValue;
    }
 
    document.getElementById("salePrice").value = myValue;
}



//Earnest Money Deposit -----------------------------------

const earnestPrice = document.getElementById("earnestPrice");


earnestPrice.addEventListener('keydown', earnestPriceOutput);


function earnestPriceOutput(e) {

    earnestPrice.value = earnestPrice.value.toString().replace(/(\d\d\d)(?=(\d)+(?!\d))/g, '$1,');

    
    if (e.key === 'Enter') {
        earnestPrice.style.backgroundColor = "Aquamarine";
    console.log(earnestPrice.value.toLocaleString())
    }

    if (e.key === 'Backspace') {
        earnestPrice.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}

function earnestDollarSign() {
    let myValue = document.getElementById("earnestPrice").value;

    if (myValue.indexOf("$") != 0)
    {
       myValue = "$" + myValue;
    }
 
    document.getElementById("earnestPrice").value = myValue;
}



//Option Fee -----------------------------------

const optionPrice = document.getElementById("optionPrice");


optionPrice.addEventListener('keydown', optionPriceOutput);


function optionPriceOutput(e) {

    optionPrice.value = optionPrice.value.toString().replace(/(\d\d\d)(?=(\d)+(?!\d))/g, '$1,');

    
    if (e.key === 'Enter') {
        optionPrice.style.backgroundColor = "Aquamarine";
    console.log(optionPrice.value.toLocaleString())
    }

    if (e.key === 'Backspace') {
        optionPrice.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}

function optionDollarSign() {
    let myValue = document.getElementById("optionPrice").value;

    if (myValue.indexOf("$") != 0)
    {
       myValue = "$" + myValue;
    }
 
    document.getElementById("optionPrice").value = myValue;
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


additionalCost.addEventListener('keydown', additionalCostOutput);


function additionalCostOutput(e) {

    additionalCost.value = additionalCost.value.toString().replace(/(\d\d\d)(?=(\d)+(?!\d))/g, '$1,');

    
    if (e.key === 'Enter') {
        additionalCost.style.backgroundColor = "Aquamarine";
    console.log(additionalCost.value.toLocaleString())
    }

    if (e.key === 'Backspace') {
        additionalCost.style.backgroundColor = "white";
    console.log(`Event Type: ${e.type}`)
    }
}

function additionalCostDollarSign() {
    let myValue = document.getElementById("additionalCost").value;

    if (myValue.indexOf("$") != 0)
    {
       myValue = "$" + myValue;
    }
 
    document.getElementById("additionalCost").value = myValue;
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

// Year Build --------------------------------------------

const linkToPictures = document.getElementById("linkToPictures");

linkToPictures.addEventListener('keydown', linkToPicturesOutput) 

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


// export acqData {
//     nameOutput: nameInput.value,

// }