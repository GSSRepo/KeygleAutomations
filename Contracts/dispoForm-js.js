//---------Functionality of Inputting Text in to the Forms--------------------

//obtain and log property address
const propertyAddress = document.getElementById("propertyAddress");
propertyAddress.addEventListener("keydown", propertyAddrGet);
propertyAddress.addEventListener("blur", onblurPropertyAddress);
// ", USA".replace(', USA','');



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

    
function onblurPropertyAddress() {
  
    if (propertyAddress.value.length > "") {
        propertyAddress.style.backgroundColor = "Aquamarine";
        console.log(propertyAddress.value);
    }
};

function propertyAddrGet(e) {
    if (e.key === "Enter" && propertyAddress.value > "") {
        propertyAddress.style.backgroundColor = "Aquamarine";
        console.log(propertyAddress.value);
    }
    if (e.key === 'Backspace') {
        propertyAddress.style.backgroundColor = "white";
    }
}

//obtain and logging buyer option
const wholesaler = document.getElementById("wholesaler");
const agents = document.getElementById("agent");
const investor = document.getElementById("investor");



//obtain double escrow choice and log it
const escrowYes = document.getElementById("escrowYes");
const escrowNo = document.getElementById("escrowNo");

//obtain and log title company or attorney
const titleComp = document.getElementById("titleComp");
titleComp.addEventListener("keydown", titleCompany);
titleComp.addEventListener("blur", onblurtitleComp);


function onblurtitleComp() {
  
    if (titleComp.value.length > "") {
        titleComp.style.backgroundColor = "Aquamarine";
        console.log(titleComp.value);
    }
};

function titleCompany(e){
    if (e.key === "Enter" && titleComp.value > "") {
        titleComp.style.backgroundColor = "Aquamarine";
        console.log(titleComp.value);
    }
    if (e.key === 'Backspace') {
        titleComp.style.backgroundColor = "white";
    }
}

//obtain and log title officer's name
const titleOfficer = document.getElementById("titleOfficer");
titleOfficer.addEventListener("keydown", officerName);
titleOfficer.addEventListener("blur", onblurTitleOfficer);


function onblurTitleOfficer() {
    if (titleOfficer.value.length > "") {
        titleOfficer.style.backgroundColor = "Aquamarine";
        console.log(titleOfficer.value);
    }
};

function officerName(e) {
    if (e.key === "Enter" && titleOfficer.value > "") {
        console.log(titleOfficer.value);
        titleOfficer.style.backgroundColor = "Aquamarine";
    }
    if (e.key === 'Backspace') {
        titleOfficer.style.backgroundColor = "white";
    }
}

//obtain and log title company's email
//ensure proper formatting
const titleEmail = document.getElementById("titleEmail");
titleEmail.addEventListener("keypress", titleCompanyEmail);
titleEmail.addEventListener("keydown", removeRed); 
let regexpr1 = new RegExp('\\S+@\\S+.com');
titleEmail.addEventListener("blur", onblurTitleEmail);

function onblurTitleEmail() {
    if (titleEmail.value.length > "" && titleEmail.value.includes('@')) {
        titleEmail.style.backgroundColor = "Aquamarine";
        console.log(titleEmail.value);
    }
    else {
        titleEmail.style.borderColor = "Red";
    }};

//im not sure what to do if the inputted format is wrong
function titleCompanyEmail(e) {
    titleEmail.style.backgroundColor = "white";
    if (e.key === "Enter" && titleEmail.value > "") {
        if (regexpr1.test(titleEmail.value)) {
            console.log(titleEmail.value);
        }
        else {
            
            //alert("Please enter a valid email format.");
            titleEmail.style.borderColor = "red";
        }
    }
}
//this is to turn the background back to white
function removeRed() {
    titleEmail.style.backgroundColor = "white";
}

//obtain and log title company's phone number
const compNum = document.getElementById("compNum");
compNum.addEventListener("keydown", companyNumber);
compNum.addEventListener("keydown", maxPhoneNumber);
let regexpr0 = /\D/g

compNum.addEventListener("blur", onblurCompNum);

function onblurCompNum() {
    if (compNum.value.length > "" && compNum.value.length === 14) {
        compNum.style.backgroundColor = "Aquamarine";
        console.log(compNum.value);
    }
};


function companyNumber(e) {

    if (e.key === 'Enter' && compNum.value > "") {
        compNum.style.backgroundColor = "Aquamarine";
    }
    if (e.key === 'Backspace') {
        compNum.style.backgroundColor = "White";
    }

    let cNum = compNum.value.replace(regexpr0, "");
    if (cNum.length < 3) {
        compNum.value = cNum.substring(0);
    }
    else if (3 < cNum.length && cNum.length <= 6) {
        compNum.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3);
    }
    else if (7 <= cNum.length) {
        compNum.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3, 6) + "-" + cNum.substring(6);
    }

}
//limits the max length of the phone number
function maxPhoneNumber(e) {
    let rawNumbers = compNum.value.replace(regexpr0, "");
    if (rawNumbers.length > 9 && e.key != "Backspace") {
        e.preventDefault();
    }
    if (e.key === "Enter" && compNum.value.length === 14) {
        console.log(compNum.value);
    }
}

//obtain and log signer's name
const signerName = document.getElementById("signerName");
signerName.addEventListener("keydown", signName);
signerName.addEventListener("blur", onblurSignerName);


function onblurSignerName() {
    if (signerName.value.length > "") {
        signerName.style.backgroundColor = "Aquamarine";
        console.log(signerName.value);
    }
};

function signName(e) {
    if (e.key === "Enter" && signerName.value > "") {
        signerName.style.backgroundColor = "Aquamarine";
        console.log(signerName.value);
    }
    if (e.key === "Backspace") {
        signerName.style.backgroundColor = "White";
    }
}

//obtain and log vesting
const vester = document.getElementById("vester");
vester.addEventListener("keydown", vesting);
vester.addEventListener("blur", onblurVester);


function onblurVester() {
    if (vester.value.length > "") {
        vester.style.backgroundColor = "Aquamarine";
        console.log(vester.value);
    }
};

function vesting(e) {
    if (e.key === "Enter" && vester.value > "") {
        vester.style.backgroundColor = "Aquamarine";
        console.log(vester.value);
    }
    if (e.key === "Backspace") {
        vester.style.backgroundColor = "White";
    }
}

//obtain and log contract price
//automatically formats the numbers as the user types
const contractPrice = document.getElementById("contractPrice");
contractPrice.addEventListener("input", contPrice);
contractPrice.addEventListener("keydown", printContPrice);
var currencyFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2});
let regexpr2 = /[A-Za-z$,]+/g;

contractPrice.addEventListener("blur", onblurContractPrice);

function onblurContractPrice() {
  
    if (contractPrice.value.length > "") {
        contractPrice.style.backgroundColor = "Aquamarine";
        console.log(contractPrice.value);
    }
};

function contPrice(e) {
    //checks to see if it is empty or contains only the $ sign and sets it to a default 0

    
    if (contractPrice.value === "" || contractPrice.value === "$") {
        contractPrice.value = 0;
        //to ensure that the default $0 remains
        contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value));
        contractPrice.value = "$" + contractPrice.value;
    }
    let last = contractPrice.value.slice(-1);
    if (e.data != "." && last != ".") {
        contractPrice.value = contractPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        contractPrice.value = "$" + contractPrice.value; //simply concatenates the $ to the front of the number
    }
}
function printContPrice(e) {
    if (e.key === "Enter" && contractPrice.value > "") {

        contractPrice.style.backgroundColor = "Aquamarine";

        //ensures that the number is properly formatted before being displayed to console.
        contractPrice.value = contractPrice.value.replace(regexpr2, "");
        contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value));
        contractPrice.value = "$" + contractPrice.value;
        console.log(contractPrice.value);
    }

    if (e.key === "Backspace") {
        contractPrice.style.backgroundColor = "White";
    }
    //prevents users from spamming periods
    let period = contractPrice.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}

//obtain and log EMD
const EMD = document.getElementById("EMD");
EMD.addEventListener("input", earnestPrice);
EMD.addEventListener("keydown", printearnestPrice);
EMD.addEventListener("blur", onblurEMD);


function onblurEMD() {
    if (EMD.value.length > "") {
        EMD.style.backgroundColor = "Aquamarine";
        console.log(EMD.value);
    }
};

function earnestPrice(e) {
    //checks to see if it is empty or contains only the $ sign and sets it to a default 0
    if (EMD.value === "" || EMD.value === "$") {
        EMD.value = 0;
        //to ensure that the default $0 remains
        EMD.value = currencyFormat.format(parseFloat(EMD.value));
        EMD.value = "$" + EMD.value;
    }
    let last0 = EMD.value.slice(-1);
    if (e.data != "." && last0 != "." && last0 != "0") {
        EMD.value = EMD.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        EMD.value = currencyFormat.format(parseFloat(EMD.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        EMD.value = "$" + EMD.value; //simply concatenates the $ to the front of the number
    }
}
function printearnestPrice(e) {
    if (e.key === "Enter" && EMD.value > "") {

        EMD.style.backgroundColor = "Aquamarine";
        //ensures that the number is properly formatted before being displayed to console.
        EMD.value = EMD.value.replace(regexpr2, "");
        EMD.value = currencyFormat.format(parseFloat(EMD.value));
        EMD.value = "$" + EMD.value;
        console.log(EMD.value);
    }

    if (e.key == 'Backspace') {
        EMD.style.backgroundColor = "White";
    }

    //prevents users from spamming periods
    let period = EMD.value.search(/\./);
    if (period != -1 && e.key === ".") {
        e.preventDefault();
    }
}

//obtain and log if we are paying closing cost
const closeYes = document.getElementById("closeYes");
const closeNo = document.getElementById("closeNo");

//obtain and log escrow close date
const closeEscrow = document.getElementById("closeEscrow");
closeEscrow.addEventListener("blur", closeEsc); 
closeEscrow.addEventListener("blur", onblurCloseEscrow);


function onblurCloseEscrow() {
  
    if (closeEscrow.value.length > "") {
        closeEscrow.style.backgroundColor = "Aquamarine";
        console.log(closeEscrow.value);
    }
};

function closeEsc(e) {
    console.log(closeEscrow.value);
}

//obtain and log the chance of closing sooner
const soonYes = document.getElementById("soonYes");
const soonNo = document.getElementById("soonNo");

//obtain and log escrow executed date
const exeEscrow = document.getElementById("exeEscrow");
exeEscrow.addEventListener("blur", exeEsc);
exeEscrow.addEventListener("blur", onblurExeEscrow);


function onblurExeEscrow() {
    if (exeEscrow.value.length > "") {
        exeEscrow.style.backgroundColor = "Aquamarine";
        console.log(exeEscrow.value);
    }
};

function exeEsc(e) {
    console.log(exeEscrow.value);
}

//obtain and log buyer's phone number
const buyNum = document.getElementById("buyNum");
buyNum.addEventListener("input", buyNumber);
buyNum.addEventListener("keydown", maxBuyNumber);
buyNum.addEventListener("blur", onblurBuyNum);


function onblurBuyNum() {
    if (buyNum.value.length > "" && buyNum.value.length === 14) {
        buyNum.style.backgroundColor = "Aquamarine";
        console.log(buyNum.value);
    }
};

//123-123-1234 <-- 
function buyNumber(e) {
    let bNum = buyNum.value.replace(regexpr0, "");
    if (bNum.length === 3) {
        buyNum.value = bNum.substring(0);
    }
    else if (3 < bNum.length && bNum.length <= 6) {
        buyNum.value = "(" + bNum.substring(0,3) + ")" + "-" + bNum.substring(3);
    }
    else if (7 <= bNum.length) {
        buyNum.value = "(" + bNum.substring(0,3) + ")" + "-" + bNum.substring(3, 6) + "-" + bNum.substring(6);
    }
}
//limits the max length of the phone number
function maxBuyNumber(e) {

    if (e.key === 'Enter' && buyNum.value > "") {
        buyNum.style.backgroundColor = "Aquamarine";
    }
    if (e.key === 'Backspace') {
        buyNum.style.backgroundColor = "White";
    }
    let rawBuy = buyNum.value.replace(regexpr0, "");
    if (rawBuy.length > 12 && e.key != "Backspace") {
        e.preventDefault();
    }
    if (e.key === "Enter" && buyNum.value.length === 14) {
        console.log(buyNum.value);
    }
}

//obtain and log docusign email
const docusign = document.getElementById("docusign");
docusign.addEventListener("keypress", docusignEmail);
docusign.addEventListener("keydown", removeRedDocusign); 
docusign.addEventListener("blur", onblurDocusign);


function onblurDocusign() {
  
    if (docusign.value.length > "" && docusign.value.includes('@')) {
        docusign.style.backgroundColor = "Aquamarine";
        console.log(docusign.value);
    }
    else {
        docusign.style.borderColor = "Red";
        error.innerHTML = 'Please enter a correct email.'
    }
};


function docusignEmail(e) {
    docusign.style.backgroundColor = "white";
    if (e.key === "Enter" && docusign.value > "") {
        docusign.style.backgroundColor = "Aquamarine";
        if (regexpr1.test(docusign.value)) {
            console.log(docusign.value);
        }
        else {
            //alert("Please enter a valid email format.");
            docusign.style.borderColor = "red";
        }
    }

    if (e.key === 'Backspace') {
        docusign.style.backgroundColor = "White";
    }
}
//this is to turn the background back to white
function removeRedDocusign() {
    docusign.style.backgroundColor = "white";
}

//obtain and log user name
const userName = document.getElementById("userName");
userName.addEventListener("keydown", getUserName);
userName.addEventListener("blur", onblurUserName);

function onblurUserName() {
  
    if (userName.value.length > "") {
        userName.style.backgroundColor = "Aquamarine";
        console.log(userName.value);
    }
};

function getUserName(e) {
    if (e.key === "Enter" && userName.value > "") {
        userName.style.backgroundColor = "Aquamarine";
        console.log(userName.value);
    }

    if (e.key === 'Backspace') {
        userName.style.backgroundColor = "White";
    }
};





//-------------------Export Form to data.js ------------------------------------------------------
//------------------------------------------------------------------------------------------------


//---------------------Value Variables-----------------------------------------

// var addressAnswer = document.getElementById("propertyAddress").value


// var titleAttorneyAnswer = document.getElementById("titleComp").value;

// var titleOfficerAnswer = document.getElementById("titleOfficer").value;

// var titleEmailAnswer = document.getElementById("titleEmail").value;

// var titlePhoneAnswer = document.getElementById("compNum").value;

// var signerNameAnswer = document.getElementById("signerName").value;

// var vestingAnswer = document.getElementById("vester").value;

// var contractPriceAnswer = document.getElementById("contractPrice").value;

// var emdAnswer = document.getElementById("EMD").value;

// var closeEscrowAnswer = document.getElementById("closeEscrow").value;

// var contractDateAnswer = document.getElementById("exeEscrow").value;

// var buyerPhoneAnswer = document.getElementById("buyNum").value;

// var docusignEmailAnswer = document.getElementById("docusign").value;

// var nameAnswer = document.getElementById("userName").value;


//------------------------------------------------------------------------------
//------------------------------Submit Form -----------------------------------
//------------------------------------------------------------------------------


const dispoData = document.getElementById("submitDispoForm");


  if (dispoData) {
   dispoData.addEventListener("click", dispoSubmit)
   
   function dispoSubmit(e) {
    // alert("testing")
    // console.log(dispoOutput)

    e.preventDefault();

    //Address Variables
    var addressParams = '';
    var addressQuestion = document.getElementById("addressLabel").innerText;
    var addressValue = document.getElementById("propertyAddress").value;
    var addressAnswer = addressValue.replace(', USA', '');

    //---------------Property Address Output-----------------------------
    var outputAddress = addressParams += addressQuestion + ' ' + addressAnswer;


    if (addressAnswer != '') {
        console.log(outputAddress);
    }


//----------------------------------------------------------------------------


    //Buyer Variables
    var buyerQuestion = document.getElementById("buyerLabel").innerText;
    var wholesalerParams = '';
    var agentParams = '';
    var investortParams = '';

    
        if (wholesaler.checked) {
            var wholesalerAnswer = document.getElementById("wholesaler").value
        };
        if (agents.checked) {
            var agentAnswer = document.getElementById("agent").value
        };
        if (investor.checked) {
            var investerAnswer = document.getElementById("investor").value
        };


        //---------------Is The Buyer Output-----------------------------

    var outputBuyerWholesaler = wholesalerParams += buyerQuestion + ' ' + wholesalerAnswer; //Wholesaler Selection

    var outputBuyerAgent = agentParams += buyerQuestion + ' ' + agentAnswer; //Agent Selection

    var outputBuyerInvestor = investortParams += buyerQuestion + ' ' + investerAnswer; //Investor Selection


    if (wholesalerAnswer != undefined) {
        console.log(outputBuyerWholesaler);
    }
    if (agentAnswer != undefined) {
        console.log(outputBuyerAgent);
    }
    if (investerAnswer != undefined) {
        console.log(outputBuyerInvestor);
    }

  


//----------------------------------------------------------------------------


    //Double Escrow Variables
    var doubleEscrowQuestion = document.getElementById("doubleEscrowLabel").innerText;
    var doubleEscrowYesParams = '';
    var doubleEscrowNoParams = '';


        if (escrowYes.checked) {
            var doubleEscrowYesAnswer = document.getElementById("escrowYes").value
        };
        if (escrowNo.checked) {
            var doubleEscrowNoAnswer = document.getElementById("escrowNo").value
        };


         //---------------Double Escrow Output-----------------------------

    var outputDoubleEscrowYes = doubleEscrowYesParams += doubleEscrowQuestion + ' ' + doubleEscrowYesAnswer; //Double Escrow Yes Selection

    var outputDoubleEscrowNo = doubleEscrowNoParams += doubleEscrowQuestion + ' ' + doubleEscrowNoAnswer; //Double Escrow No Selection

    if (doubleEscrowYesAnswer != undefined) {
        console.log(outputDoubleEscrowYes);
    };
    if (doubleEscrowNoAnswer != undefined) {
        console.log(outputDoubleEscrowNo);
    };

//----------------------------------------------------------------------------


    //Title Company/Attorney Variables
    var titleAttorneyParams = '';
    var titleAttorneyQuestion = document.getElementById("titleAttorneyLabel").innerText;
    var titleAttorneyAnswer = document.getElementById("titleComp").value;

    //---------------Title Company/Attorney Output-----------------------------
    var outputtitleAttorney = titleAttorneyParams += titleAttorneyQuestion + ' ' + titleAttorneyAnswer; // Title and Input Text for Title/Attorney


    if (titleAttorneyAnswer != '') {
        console.log(outputtitleAttorney);
    };


//----------------------------------------------------------------------------


 //Title Officer Variables
 var titleOfficerParams = '';
 var titleOfficerQuestion = document.getElementById("titleOfficerLabel").innerText;
 var titleOfficerAnswer = document.getElementById("titleOfficer").value;

 //---------------Title Officer's Name Output-----------------------------
 var outputtitleOfficer = titleOfficerParams += titleOfficerQuestion + ' ' + titleOfficerAnswer; 


 if (titleOfficerAnswer != '') {
     console.log(outputtitleOfficer);
 };


//----------------------------------------------------------------------------


 //Title Company's Email Variables
 var titleEmailParams = '';
 var titleEmailQuestion = document.getElementById("titleEmailLabel").innerText;
 var titleEmailAnswer = document.getElementById("titleEmail").value;

 //---------------Title Company's Email Output-----------------------------
 var outputTitleEmail = titleEmailParams += titleEmailQuestion + ' ' + titleEmailAnswer; 


 if (titleEmailAnswer != '' && titleEmailAnswer.includes('@')) {
     console.log(outputTitleEmail);
 };


//----------------------------------------------------------------------------


 //Title Company's Phone Number Variables
 var titlePhoneParams = '';
 var titlePhoneQuestion = document.getElementById("titlePhoneLabel").innerText;
 var titlePhoneAnswer = document.getElementById("compNum").value;

 //---------------Title Company's Phone Number Output-----------------------------
 var outputPhoneEmail = titlePhoneParams += titlePhoneQuestion + ' ' + titlePhoneAnswer; 


 if (titlePhoneAnswer != '' && titlePhoneAnswer.length === 14) {
     console.log(outputPhoneEmail);
 };



//----------------------------------------------------------------------------


 //Signer's Name Variables
 var signerNameParams = '';
 var signerNameQuestion = document.getElementById("signerNameLabel").innerText;
 var signerNameAnswer = document.getElementById("signerName").value;

 //---------------Signer's Name Output-----------------------------
 var outputSignerName = signerNameParams += signerNameQuestion + ' ' + signerNameAnswer; 


 if (signerNameAnswer != '') {
    console.log(outputSignerName);
};


//----------------------------------------------------------------------------


 //Vesting Variables
 var vestingParams = '';
 var vestingQuestion = document.getElementById("vestingLabel").innerText;
 var vestingAnswer = document.getElementById("vester").value;

 //---------------Vesting Output-----------------------------
 var outputVesting = vestingParams += vestingQuestion + ' ' + vestingAnswer; 


 if (vestingAnswer != '') {
    console.log(outputVesting);
};


//----------------------------------------------------------------------------


 //Contract Price Variables
 var contractPriceParams = '';
 var contractPriceQuestion = document.getElementById("contractPriceLabel").innerText;
 var contractPriceAnswer = document.getElementById("contractPrice").value;

 //---------------Contract Price Output-----------------------------
 var outputContractPrice = contractPriceParams += contractPriceQuestion + ' ' + contractPriceAnswer; 


 if (contractPriceAnswer != '' && contractPriceAnswer.length > 1) {
    console.log(outputContractPrice);
};


//----------------------------------------------------------------------------


 //EMD Variables
 var emdParams = '';
 var emdQuestion = document.getElementById("emdLabel").innerText;
 var emdAnswer = document.getElementById("EMD").value;

 //---------------EMD Output-----------------------------
 var outputEMD = emdParams += emdQuestion + ' ' + emdAnswer; 


 if (emdAnswer != '' && emdAnswer.length > 1) {
    console.log(outputEMD);
};



//----------------------------------------------------------------------------


    //Are We Paying Closing Cost Variables
    var closingCostQuestion = document.getElementById("closingCostLabel").innerText;
    var closingCostYesParams = '';
    var closingCostNoParams = '';


        if (closeYes.checked) {
            var closingcostYesAnswer = document.getElementById("closeYes").value
        };
        if (closeNo.checked) {
            var closingCostNoAnswer = document.getElementById("closeNo").value
        };


         //---------------Are We Paying Closing Cost Output-----------------------------

    var outputClosingCostYes = closingCostYesParams += closingCostQuestion + ' ' + closingcostYesAnswer; //Closing Cost Yes Selection

    var outputClosingCostNo = closingCostNoParams += closingCostQuestion + ' ' + closingCostNoAnswer; //Closing Cost No Selection

    if (closingcostYesAnswer != undefined) {
        console.log(outputClosingCostYes);
    };
    if (closingCostNoAnswer != undefined) {
        console.log(outputClosingCostNo);
    };



//----------------------------------------------------------------------------


 //Close of Escrow Variables
 var closeEscrowParams = '';
 var closeEscrowQuestion = document.getElementById("closeEscrowLabel").innerText;
 var closeEscrowAnswer = document.getElementById("closeEscrow").value;

 //---------------Close of Escrow Output-----------------------------
 var outputCloseEscrow = closeEscrowParams += closeEscrowQuestion + ' ' + closeEscrowAnswer; 


 if (closeEscrowAnswer != '') {
    console.log(outputCloseEscrow);
};



//----------------------------------------------------------------------------


//Possibility of Closing Sooner Variables
 var closeSoonerQuestion = document.getElementById("closeSoonerLabel").innerText;
  var closeSoonerYesParams = '';
  var closeSoonerNoParams = '';


      if (soonYes.checked) {
         var closeSoonerYesAnswer = document.getElementById("soonYes").value
      };
       if (soonNo.checked) {
           var closeSoonerNoAnswer = document.getElementById("soonNo").value
      };

    //---------------//Possibility of Closing Sooner Output-----------------------------

 var outputCloseSoonerYes = closeSoonerYesParams += closeSoonerQuestion + ' ' + closeSoonerYesAnswer; //Closing Sooner Yes Selection

  var outputCloseSoonerNo = closeSoonerNoParams += closeSoonerQuestion + ' ' + closeSoonerNoAnswer; //Closing Sooner No Selection

  if (closeSoonerYesAnswer != undefined) {
    console.log(outputCloseSoonerYes);
 };
 if (closeSoonerNoAnswer != undefined) {
     console.log(outputCloseSoonerNo);
  };



//----------------------------------------------------------------------------


 //Contract Executed Date Variables
 var contractDateParams = '';
 var contractDateQuestion = document.getElementById("contractDateLabel").innerText;
 var contractDateAnswer = document.getElementById("exeEscrow").value;

 //---------------Contract Executed Date Output-----------------------------
 var outputContractDate = contractDateParams += contractDateQuestion + ' ' + contractDateAnswer; 


 if (contractDateAnswer != '') {
    console.log(outputContractDate);
};




//----------------------------------------------------------------------------


 //Buyer's Phone Number Variables
 var buyerPhoneParams = '';
 var buyerPhoneQuestion = document.getElementById("buyerPhoneLabel").innerText;
 var buyerPhoneAnswer = document.getElementById("buyNum").value;

 //---------------Buyer's Phone Number Output-----------------------------
 var outputBuyersPhone = buyerPhoneParams += buyerPhoneQuestion + ' ' + buyerPhoneAnswer; 


 if (buyerPhoneAnswer != '' && buyerPhoneAnswer.length === 14) {
     console.log(outputBuyersPhone);
 };



//----------------------------------------------------------------------------


 //Docusign Email Variables
 var docusignEmailParams = '';
 var docusignEmailQuestion = document.getElementById("docusignEmailLabel").innerText;
 var docusignEmailAnswer = document.getElementById("docusign").value;

 console.log(docusignEmailAnswer)

 //---------------Docusign Email Output-----------------------------
 var outputDocusignEmail = docusignEmailParams += docusignEmailQuestion + ' ' + docusignEmailAnswer; 


 if (docusignEmailAnswer != '' && docusignEmailAnswer.includes('@')) {
     console.log(outputDocusignEmail);
 };



//----------------------------------------------------------------------------


 //Your Name Variables
 var nameParams = '';
 var nameQuestion = document.getElementById("nameLabel").innerText;
 var nameAnswer = document.getElementById("userName").value;

 //---------------Your Name Output-----------------------------
 var outputName = nameParams += nameQuestion + ' ' + nameAnswer; 


 if (nameAnswer != '') {
    console.log(outputName);
};



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

//Buyer Selection
if (wholesalerAnswer != undefined) {
     dispoData.Buyer = "Wholesaler"
        }
        else if (agentAnswer != undefined) {
             dispoData.Buyer = "Agent"
        }
        else if (investerAnswer != undefined) {
             dispoData.Buyer = "Investor"
        }

//Double Escrow Selection
if (doubleEscrowYesAnswer != undefined) {
     dispoData.doubleEscrow = "Yes"
        }
        else if (doubleEscrowNoAnswer != undefined) {
           dispoData.doubleEscrow = "No"
        }

//Are we Paying Closing Cost Selection
if (closingcostYesAnswer != undefined) {
     dispoData.closing = "Yes"
        }
        else if (closingCostNoAnswer != undefined) {
             dispoData.closing = "No"
        }

//Closing Soon Selection
if (closeSoonerYesAnswer != undefined) {
   dispoData.closingSooner = "Yes"
        }
        else if (closeSoonerNoAnswer != undefined) {
            dispoData.closingSooner = "No"
        }





const buyerAnswer = document.getElementsByName("Buyer").value;
const escrowAnswer = document.getElementsByName("escrow").value;
const closingAnswer = document.getElementsByName("closing").value;
const soonerAnswer = document.getElementsByName("sooner").value;

/*Variable Outputs--------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var dispoID = Math.random().toString(36).substr(2, 5);
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
var uniqueID = dispoID + utc;

const dispoDataOutput = {
    Unique_ID : dispoID,
    Address : addressAnswer,
    Buyer : dispoData.Buyer,
    doubleEscrow : dispoData.doubleEscrow,
    titleCompanyAttorney : titleAttorneyAnswer,
    titleOfficerName : titleOfficerAnswer,
    titleCompanyEmail : titleEmailAnswer,
    titleCompanyNumber : titlePhoneAnswer,
    signersName : signerNameAnswer,
    vesting : vestingAnswer,
    contractPricing : contractPriceAnswer,
    earnestMoney : emdAnswer,
    closing : dispoData.closing,
    closeEscrowDate : closeEscrowAnswer,
    closingSooner : dispoData.closingSooner,
    contractExecuted : contractDateAnswer,
    buyersPhone : buyerPhoneAnswer,
    emailDocusign : docusignEmailAnswer,
    name : nameAnswer
};

const dispoFormOutput = [uniqueID, addressAnswer, dispoData.Buyer, dispoData.doubleEscrow, titleAttorneyAnswer, titleOfficerAnswer, titleEmailAnswer, titlePhoneAnswer, signerNameAnswer, vestingAnswer, contractPriceAnswer, emdAnswer, dispoData.closing, closeEscrowAnswer, dispoData.closingSooner, contractDateAnswer, buyerPhoneAnswer, docusignEmailAnswer, nameAnswer];


// localStorage.setItem(dispoID, JSON.stringify(dispoDataOutput));    //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------

localStorage.setItem(uniqueID, JSON.stringify(dispoFormOutput));
// localStorage.setItem("D05sw9v3pb", JSON.stringify(dispoDataOutput));

// console.log(dispoDataOutput);
}};
    


//-------------------Export Form to data.js ------------------------------------------------------
//------------------------------------------------------------------------------------------------


// export const dispoOutput = {



//     Address : propertyAddress.value,
//     Buyer : { wholesaler : wholesaler.checked, agents : agents.checked,investor : investor.checked },
//     doubleEscrow : {yesEscrow : escrowYes.checked, noEscrow : escrowNo.checked},
//     titleCompanyAttorney : titleComp.value,
//     titleOfficerName : titleOfficer.value,
//     titleCompanyEmail : titleEmail.value,
//     titleCompanyNumber : compNum.value,
//     signersName : signerName.value,
//     vesting : vester.value,
//     contractPricing : contractPrice.value,
//     earnestMoney : EMD.value,
//     closing : {yesClose : closeYes.value , noClose : closeNo.value},
//     closeEscrowDate : closeEscrow.value,
//     closingSooner : {closeSoonYes : soonYes.value , closeSoonNo : soonNo.value},
//     contractExecuted : exeEscrow.value,
//     buyersPhone : buyNum.value,
//     emailDocusign : docusign.value,
//     name : userName.value
// }

// var webpack = require("webpack");
// var path = require("path");

// var DISPFORM_DIR = path.resolve(_dirname, "dist");
// var SRC_DIR = path.resolve(_dirname, "src");

// var config = 