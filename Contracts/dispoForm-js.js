//I had all the forms print to console log

//obtain and log property address
const propertyAddress = document.getElementById("propertyAddress");
propertyAddress.addEventListener("keydown", propertyAddrGet);

function propertyAddrGet(e) {
    if (e.key === "Enter") {
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
wholesaler.addEventListener("change", wholesale)
agents.addEventListener("change", agent)
investor.addEventListener("change", invest)

function wholesale() {
    if (wholesaler.checked){
        console.log("Wholesaler");
    }
}
function agent() {
    if (agents.checked){
        console.log("Agent");
    }
}
function invest() {
    if (investor.checked){
        console.log("Investor");
    }
}

//obtain double escrow choice and log it
const escrowYes = document.getElementById("escrowYes");
const escrowNo = document.getElementById("escrowNo");
escrowYes.addEventListener("change", escrowY);
escrowNo.addEventListener("change", escrowN);

function escrowY() {
    if (escrowYes.checked){
        console.log("Double Closing");
    }
}
function escrowN() {
    if (escrowNo.checked){
        console.log("Not Double Closing");
    }
}

//obtain and log title company or attorney
const titleComp = document.getElementById("titleComp");
titleComp.addEventListener("keydown", titleCompany);

function titleCompany(e){
    if (e.key === "Enter") {
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

function officerName(e) {
    if (e.key === "Enter") {
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
titleEmail.addEventListener("keydown", removeRed); //keypress doesn't detect backspace, so I have this to hopefully detect all other key inputs
let regexpr1 = new RegExp('\\S+@\\S+.com');

//im not sure what to do if the inputted format is wrong
function titleCompanyEmail(e) {
    titleEmail.style.backgroundColor = "white";
    if (e.key === "Enter") {
        if (regexpr1.test(titleEmail.value)) {
            console.log(titleEmail.value);
        }
        else {
            //I'm not sure if you want to alert the user as well
            //alert("Please enter a valid email format.");
            titleEmail.style.backgroundColor = "red";
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

//123-123-1234 <-- I went with this format for the number, I wasn't sure what country code I should've accounted for
function companyNumber(e) {

    if (e.key === 'Enter') {
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

function signName(e) {
    if (e.key === "Enter") {
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

function vesting(e) {
    if (e.key === "Enter") {
        vester.style.backgroundColor = "Aquamarine";
        console.log(vester.value);
    }

    if (e.key === "Backspace") {
        vester.style.backgroundColor = "White";
    }
}

//obtain and log contract price
//automatically formats the numbers as the user types
//I am sure I missed some checks and edge cases, but I cannot think of any right now
const contractPrice = document.getElementById("contractPrice");
contractPrice.addEventListener("input", contPrice);
contractPrice.addEventListener("keydown", printContPrice);
var currencyFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2});
let regexpr2 = /[A-Za-z$,]+/g;

function contPrice(e) {
    //checks to see if it is empty or contains only the $ sign and sets it to a default 0

    
    if (contractPrice.value === "" || contractPrice.value === "$") {
        contractPrice.value = 0;
        //to ensure that the default $0 remains
        contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value));
        contractPrice.value = "$" + contractPrice.value;
    }
    let last = contractPrice.value.slice(-1);
    if (e.data != "." && last != "." && last != "0") {
        contractPrice.value = contractPrice.value.replace(regexpr2, ""); //removes all letters, $'s, and commas
        contractPrice.value = currencyFormat.format(parseFloat(contractPrice.value)); //uses the Intl.NumberFormat to format the number according to US number standards to only 2 decimal places.
        contractPrice.value = "$" + contractPrice.value; //simply concatenates the $ to the front of the number
    }
}
function printContPrice(e) {
    if (e.key === "Enter") {

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
    if (e.key === "Enter") {

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
closeYes.addEventListener("change", closeY);
closeNo.addEventListener("change", closeN);

function closeY() {
    if (closeYes.checked){
        console.log("Paying Closing Costs");
    }
}
function closeN() {
    if (closeNo.checked){
        console.log("Not Paying Closing Costs");
    }
}

//obtain and log escrow close date
const closeEscrow = document.getElementById("closeEscrow");
//I have it so once the user clicks out of the box, it sends to console. This lets the user manually input or use the calendar popup
closeEscrow.addEventListener("blur", closeEsc); 

function closeEsc(e) {
    console.log(closeEscrow.value);
}

//obtain and log the chance of closing sooner
const soonYes = document.getElementById("soonYes");
const soonNo = document.getElementById("soonNo");
soonYes.addEventListener("change", soonY);
soonNo.addEventListener("change", soonN);

function soonY() {
    if (soonYes.checked){
        console.log("Can Close Sooner");
    }
}
function soonN() {
    if (soonNo.checked){
        console.log("Cannot Close Sooner");
    }
}

//obtain and log escrow executed date
const exeEscrow = document.getElementById("exeEscrow");
//I have it so once the user clicks out of the box, it sends to console. This lets the user manually input or use the calendar popup
exeEscrow.addEventListener("blur", exeEsc);

function exeEsc(e) {
    console.log(exeEscrow.value);
}

//obtain and log buyer's phone number
const buyNum = document.getElementById("buyNum");
buyNum.addEventListener("input", buyNumber);
buyNum.addEventListener("keydown", maxBuyNumber);

//123-123-1234 <-- I went with this format for the number, I wasn't sure what country code I should've accounted for
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

    if (e.key === 'Enter') {
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
docusign.addEventListener("keydown", removeRedDocusign); //keypress doesn't detect backspace, so I have this to hopefully detect all other key inputs

//im not sure what to do if the inputted format is wrong
function docusignEmail(e) {
    docusign.style.backgroundColor = "white";
    if (e.key === "Enter") {

        docusign.style.backgroundColor = "Aquamarine";

        if (regexpr1.test(docusign.value)) {
            console.log(docusign.value);
        }
        else {
            //I'm not sure if you want to alert the user as well
            //alert("Please enter a valid email format.");
            docusign.style.backgroundColor = "red";
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

function getUserName(e) {
    if (e.key === "Enter") {
        userName.style.backgroundColor = "Aquamarine";

        console.log(userName.value);
    }

    if (e.key === 'Backspace') {
        userName.style.backgroundColor = "White";
    }
}


export function dispoOutput() {
    propertyAddress.value;
    wholesaler.checked;
    agents.checked;
    investor.checked;
}

