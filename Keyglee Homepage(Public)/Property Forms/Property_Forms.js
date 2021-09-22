
//Property photo upload for Map
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
    
    
    nameInput.addEventListener('blur', function onblurName() {
        nameInput.value.length > "" ? nameInput.style.backgroundColor = "Aquamarine" : null;
    });
    
    nameInput.addEventListener('keydown', function runEvent(e) {
        e.key === 'Enter' ? nameInput.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? nameInput.style.backgroundColor = "white" : null;
    });
    
    
    
    
    //Employee's Email ------------------
    
    const employeeEmail = document.getElementById("employeeEmail");
    let regexpr1 = new RegExp('\\S+@\\S+.com');
    
    //Field turns green when exiting out of field with text, backspace will turn the field back white
    employeeEmail.addEventListener("blur", function onbluremployeeEmail() {
        employeeEmail.value.length > "" && employeeEmail.value.includes('@') ? employeeEmail.style.backgroundColor = "Aquamarine" : employeeEmail.style.borderColor = "Red";
    });
    
    employeeEmail.addEventListener("keypress", function titleCompanyEmail(e) {
        employeeEmail.style.backgroundColor = "white";
        if (e.key === "Enter" && employeeEmail.value > "") {
            regexpr1.test(employeeEmail.value) ? console.log(employeeEmail.value) : employeeEmail.style.borderColor = "red";
        }
    });
    
    
    //Employee's Phone Number -----------------------
    
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
        !isNumericInput(event) && !isModifierKey(event) ? event.preventDefault() : null;
    };
    
    const formatToPhone = (event) => {
        if(isModifierKey(event)) {return;}
    
        const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
        const areaCode = input.substring(0,3);
        const middle = input.substring(3,6);
        const last = input.substring(6,10);
    
        input.length > 6 ? event.target.value = `(${areaCode}) ${middle} - ${last}` :
        input.length > 3 ? event.target.value = `(${areaCode}) ${middle}` :
        input.length > 0 ? event.target.value = `(${areaCode}` :
        null;
    };
    
    const employeePhone = document.getElementById("employeePhone");
    
    employeePhone.addEventListener('blur', function onbluremployeePhone() {
        employeePhone.value.length > "" ? employeePhone.style.backgroundColor = "Aquamarine" : null;
    });
    
    employeePhone.addEventListener('keydown', function employeePhoneEvent(e) {
        e.key === 'Enter' ? employeePhone.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? employeePhone.style.backgroundColor = "white" : null;
    });
    
    const inputElement = document.getElementById('employeePhone');
    inputElement.addEventListener('keydown',enforceFormat);
    inputElement.addEventListener('keyup',formatToPhone);
    
    
    //Property Address ------------------
    
    const propertyAddress = document.getElementById("propertyAddress");
    
    propertyAddress.addEventListener('blur', function onblurPropertyAddress() {
        propertyAddress.value.length > "" ? propertyAddress.style.backgroundColor = "Aquamarine" : null;
    });
    
    propertyAddress.addEventListener('keydown', function propertyAddressOutput(e) {
        e.key === 'Enter' ? propertyAddress.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? propertyAddress.style.backgroundColor = "white" : null;
    });
    
    
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
    
    

    
    // Additional Notes Supplier/Agent Mentioned -------------------------
    
    const additionalSupplierAgentNotes = document.getElementById("additionalSupplierAgentNotes");
    
    additionalSupplierAgentNotes.addEventListener('blur', function onblurAddNotes() {
        additionalSupplierAgentNotes.value.length > "" ? additionalSupplierAgentNotes.style.backgroundColor = "Aquamarine" : null;
    });
    
    additionalSupplierAgentNotes.addEventListener('keydown', function additionalSupplierAgentNotesOutput(e) {
        e.key === 'Enter' ? additionalSupplierAgentNotes.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? additionalSupplierAgentNotes.style.backgroundColor = "white" : null;
    });
    
    
    
    // Number of Bedrooms
    
    const bedroomNumber = document.getElementById("bedroomNumber");
    
    bedroomNumber.addEventListener('blur', function onblurBedNumber() {
        bedroomNumber.value.length > "" ? bedroomNumber.style.backgroundColor = "Aquamarine" : null;
    });
    
    bedroomNumber.addEventListener('keydown', function bedroomNumberOutput(e) {
        e.key === 'Enter' ? bedroomNumber.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? bedroomNumber.style.backgroundColor = "white" : null;
    });
    
    
    // Number of Baths
    
    const bathNumber = document.getElementById("bathNumber");
    
    bathNumber.addEventListener('blur', function onblurBathNumber() {
        bathNumber.value.length > "" ? bathNumber.style.backgroundColor = "Aquamarine" : null;
    });
    
    bathNumber.addEventListener('keydown', function bathNumberOutput(e) {
        e.key === 'Enter' ? bathNumber.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? bathNumber.style.backgroundColor = "white" : null;
    });
    
    
    // Parking ----------------------------------
    
    const garage = document.getElementById("garage")
    const garageDetached = document.getElementById("garageDetached")
    const carport = document.getElementById("carport")
    const onStreet = document.getElementById("onStreet")
    const noParking = document.getElementById("noParking")
    const parkingNA = document.getElementById("parkingNA")
    
    
    // Pool ----------------------------------------------
    
    const poolYes = document.getElementById("poolYes")
    const poolNo = document.getElementById("poolNo")
    
    
    // Living Area: (Put Sqft) --------------------------------------------
    
    const livingArea = document.getElementById("livingArea");
    
    livingArea.addEventListener('blur', function onblurLivingArea() {
        livingArea.value.length > "" ? livingArea.style.backgroundColor = "Aquamarine" : null;
    });
    
    livingArea.addEventListener('keydown', function livingAreaOutput(e) {
        e.key === 'Enter' ? livingArea.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? livingArea.style.backgroundColor = "white" : null;
    });
    
    
    
    // Lot Size: (Put Sqft or Acres) --------------------------------------------
    
    const lotSize = document.getElementById("lotSize");
    
    lotSize.addEventListener('blur', function onblurLotSize() {
        lotSize.value.length > "" ? lotSize.style.backgroundColor = "Aquamarine" : null;
    });
    
    lotSize.addEventListener('keydown', function lotSizeOutput(e) {
        e.key === 'Enter' ? lotSize.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? lotSize.style.backgroundColor = "white" : null;
    });
    
    
    // Year Build --------------------------------------------
    
    const yearBuild = document.getElementById("yearBuild");
    
    yearBuild.addEventListener('blur', function onblurYearBuild() {
        yearBuild.value.length > "" ? yearBuild.style.backgroundColor = "Aquamarine" : null;
    });
    
    yearBuild.addEventListener('keydown', function yearBuildOutput(e) {
        e.key === 'Enter' ? yearBuild.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? yearBuild.style.backgroundColor = "white" : null;
    });
    
    
    
    // Link to Pictures ----------------------------------------
    
    
    const linkToPictures = document.getElementById("linkToPictures");
    
    linkToPictures.addEventListener('blur', function onblurPics() {
        linkToPictures.value.length > "" ? linkToPictures.style.backgroundColor = "Aquamarine" : null;
    }); 
    
    linkToPictures.addEventListener('keydown', function linkToPicturesOutput(e) {
        e.key === 'Enter' ? linkToPictures.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? linkToPictures.style.backgroundColor = "white" : null;
    });
    
    
    // Market
    
    const market = document.getElementById("market");
    
    market.addEventListener('blur', function onblurMarket() {
        market.value.length > "" ? market.style.backgroundColor = "Aquamarine" : null;
    }); 
    
    market.addEventListener('keydown', function marketOutput(e) {
        e.key === 'Enter' ? market.style.backgroundColor = "Aquamarine" : null;
        e.key === 'Backspace' ? market.style.backgroundColor = "white" : null;
    });
    
    
    //------------------------------------------------------------------------------
    //------------------------------Submit Form -----------------------------------
    //------------------------------------------------------------------------------
    
    
    const acqData = document.getElementById("submitAcqForm");
    
    
    if (acqData) {
    acqData.addEventListener("click", acqSubmit)
    
    function acqSubmit(e) {
    e.preventDefault();
    
    const fullNameValue = document.getElementById("yourFullName").value;
 
    
    const employeeEmail = document.getElementById("employeeEmail").value;    
    
    const employeeNumber = document.getElementById("employeePhone").value; 
    
    
    const addressValue = document.getElementById("propertyAddress").value;
    const addressAnswer = addressValue.replace(', USA', '');
    
    
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
    

    
    //Parking Selection
    
    garageAnswer != undefined ? acqData.parking = "Garage" :
    garageDetachedAnswer != undefined ? acqData.parking = "Garage - Detached" :
    carportAnswer != undefined ? acqData.parking = "Carport" :
    onStreetAnswer != undefined ? acqData.parking = "On Street" :
    noParkingAnswer != undefined ? acqData.parking = "No Parking" :
    parkingNAAnswer != undefined ? acqData.parking = "N/A" :
    null;
    
    //Pool Selection
    
    poolYesAnswer != undefined ? acqData.pool = "Yes" :
    poolNoAnswer != undefined ? acqData.pool = "No" :
    null;
    
    
    // Image field
    
    const propPhoto = document.getElementById('output_image').src
    
    console.log(propPhoto)
    
    
    
    /*Variable Outputs--------------------------------------------------------------------------------------------------------------------------------------------------------
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    
    //Creating a Unique ID with current date and random string
    var acqID = Math.random().toString(36).substr(2, 5);
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
    var uniqueID = acqID + utc;
    
    //All value variables to be submitted in to form
    const acqFormOutput = [uniqueID, fullNameValue, employeeEmail, employeeNumber, addressAnswer, additionalNotes, beds, baths, acqData.parking, acqData.pool, livingArea, lotSize, yearBuild, pictureLink, marketValue, propPhoto];
    
    
    // var blob = new Blob(JSON.stringify(acqFormOutput), {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, "AcqData.txt");
    
    
    //Save variables in to one local storage file
    localStorage.setItem("P-" + uniqueID, JSON.stringify(acqFormOutput)); //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------
    
    //Reload page after clicking submit
    window.location.reload();
    
    
    //Currently not functioning. After submit, this is supposed to scroll to top of page
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };
    }};