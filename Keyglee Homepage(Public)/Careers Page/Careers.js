// const { node } = require("webpack");

//Retrieve forms from Local Storage
const hrFormKeys = Object.values(localStorage); //

const splicedForms = hrFormKeys.splice(0);

const outerPanel = document.querySelector('.mainPanel')
// const mainPanel = document.querySelector('.innerMainPanel');
const mainPanel = document.querySelector('.jobPanel');

// const jobLeftPanel = document.createElement('div');
// jobLeftPanel.classList.add('jobDisplayTitle');

const rightPanel = document.querySelector('.jobDescriptionPanel');
const innerPanel = document.createElement('div');
innerPanel.classList.add('jobDisplayTwo');

const innerRightPanel = document.createElement('div');
innerRightPanel.classList.add('rightJobPanel');



const jobDisplayTitle = document.createElement('div');
jobDisplayTitle.classList.add('jobDisplayTitle')

const jobDisplayArea = document.createElement('div');
jobDisplayArea.classList.add('jobDisplayArea');


splicedForms.map(dispoAnswers => {const arr = JSON.parse("[" + dispoAnswers + "]"); //Loop through string; Wrap string in Array brackets; Parsing each Array
console.log(dispoAnswers)
console.log(arr)
const formID = arr[0].shift(); //Removing the Unique ID from each array and outputting it to a variable
var finalArray = [arr]; //Creating a Nested Array of the Parsed Arrays

// Create new rows and cells for each submitted form, looping through each array

finalArray.forEach(function(elem) {


    console.log(elem)    



for (let dataRows of elem) {

    const jobDisplay = document.createElement('div');
    jobDisplay.classList.add('jobDisplay');




    // Left Panel
    const jobPosting = document.createElement('div');
    jobPosting.classList.add('jobPosting');
    
    const jobHeading = document.createElement('h4');
    jobHeading.classList.add('jobTitleText');
    jobHeading.innerText = dataRows[0];

    const location = document.createElement('p');
    location.classList.add('jobLocation');
    location.innerText = dataRows[51];

    const date = document.createElement('p');
    date.innerHTML = "<p class='jobPostDate'>" + dataRows[54] + "</p>"

    // Right Panel
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('rightDiv');

    // Right Upper Panel
    const titleArea = document.createElement('div');
    titleArea.classList.add('jobDescriptionTitleArea');

    const titleLogoDiv = document.createElement('titleLogo');
    titleLogoDiv.classList.add('titleLogo');

    const jobTitle = document.createElement('h4');
    jobTitle.classList.add('jobDescriptionTitle');
    jobTitle.innerText = dataRows[0];

    const logoRight = document.createElement('div');
    logoRight.classList.add('logoRight');

    const logo = document.createElement('img');
    logo.classList.add('logoTitle');
    logo.src = '../../Logos/Keyglee Dispo Logo.png'

    const fillSpace = document.createElement('div');
    fillSpace.classList.add('fillSpaceBullet');

    const jobLocation = document.createElement('p');
    jobLocation.classList.add('jobDescriptionLocation');
    jobLocation.innerText = dataRows[51];

    const positionTime = document.createElement('p');
    positionTime.innerHTML = "<p class='jobDescriptionTime'>&#8226; " + dataRows[50] + "</p>";

    const jobDate = document.createElement('p');
    jobDate.classList.add('jobDescriptionPostDate');
    jobDate.innerText = dataRows[54];



    //Right Lower Panel;

    const descriptionArea = document.createElement('div');
    descriptionArea.classList.add('jobDescriptionArea');

    const topDescription = document.createElement('p');
    topDescription.classList.add('topDescription');
    topDescription.innerHTML = "<p class='topDescription'>The Core Title & Escrow Team at AEM Real Estate Group LLC hires Top Performers only. If you're looking for a" +
    "company that assures vertical growth, cultivates a positive environment, and challenges you" +
    "daily, apply now. AEM is committed to upholding and protecting high standards and as a" +
    "whole is thoroughly team driven. We don't want cogs in the wheel. We want employees that" +
    "make significant impacts inside the office and in their communities." +
    "Job Description: Serve as a liaison between our team and escrow companies during a Real" +
   "Estate transaction. Knowledge is wealth and attitude is success here at AEM. Build and" +
    "maintain high level rapport with others, learn the industry, and help drive your team to the top." + "</p>"

    const headerOne = document.createElement('h3');
    headerOne.classList.add('jobHeadings');
    headerOne.innerHTML = "<h3 class='descriptionHeaders'>BENEFITS</h3>"

    const benefitsGroup = document.createElement('ul');
    benefitsGroup.classList.add('jobBullets');

    const benefitsLine = document.createElement('li');
    benefitsLine.innerHTML = 
    "<li class='bulletPoints'>A Full Time Career</li>" + 
    "<li class='bulletPoints'>Rapid Growth Plan Ensured by Our Review Model</li>" + 
    "<li class='bulletPoints'>Caring Management that Will Mentor & Support You</li>" +
    "<li class='bulletPoints'>Positive Culture that Values Hard Work and Relationships</li>" +
    "<li class='bulletPoints'>Volunteer Opportunities to Give Back to the Community</li>" +
    "<li class='bulletPoints'>Company Events and Team Building Outings</li>" +
    "<li class='bulletPoints'>Clean - Drug Free Workplace</li>" +
    "<li class='bulletPoints'>Your Family away from Family</li>";

    const headerTwo = document.createElement('h3');
    headerTwo.classList.add('jobHeadings');
    headerTwo.innerHTML = "<h3 class='descriptionHeaders'>JOB REQUIREMENTS</h3>"

    const requirementGroup = document.createElement('ul');
    requirementGroup.classList.add('jobBullets');

    const requirementsLine = document.createElement('li');
    requirementsLine.classList.add('requirementBullets')
    requirementsLine.innerHTML = 
    "<li class='bulletPoints'>" + dataRows[1] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[2] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[3] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[4] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[5] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[6] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[7] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[8] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[9] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[10] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[11] + "</li>" + 
    "<li class='bulletPoints'>" + dataRows[12] + "</li>" 


    const headerThree = document.createElement('h3');
    headerThree.classList.add('jobHeadings');
    headerThree.innerHTML = "<h3 class='descriptionHeaders'>RESPONSIBILITIES</h3>"

    const responsibilitiesGroup = document.createElement('ul');
    responsibilitiesGroup.classList.add('jobBullets');

    const responsibilitiesLine = document.createElement('li');
    responsibilitiesLine.innerHTML = 
    "<li class='bulletPoints'>Oversee Every Aspect of Buyer/Seller Transactions from Executed Contract to Closing</li>" + 
    "<li class='bulletPoints'>Cultivate and Maintain High Level Client Relationships</li>" + 
    "<li class='bulletPoints'>Collaborate with Your Team to Streamline Work Processes</li>" +
    "<li class='bulletPoints'>Stay Organized As You Will Be Managing Multiple Property Deadlines Daily</li>" +
    "<li class='bulletPoints'>Review and Edit Contracts</li>" +
    "<li class='bulletPoints'>Work with an Energetic Team and Have Loads of Fun!</li>";


    const lowerDescription = document.createElement('p');
    lowerDescription.innerHTML = "<p class='topDescription'>***AEM Real Estate Group LLC supports a diverse workforce and is an Equal Opportunity Employer who does not" +
    "discriminate against individuals on the basis of race, gender, color, religion, national origin, age," +
   "sexual orientation, gender identity, disability, veteran status or other classification protected by" +
    "law. Drug Free Workplace." +
    "***Must pass a drug test prior to employment and will be subject to post-accident, random, and" +
    "reasonable cause testing during employment." + "</p>"

    const headerFour = document.createElement('h3');
    headerFour.classList.add('jobHeadings');
    headerFour.innerHTML = "<h3 class='descriptionHeaders'>About the Job</h3>"

    const aboutJob = document.createElement('p');
    aboutJob.classList.add('secondDescription');
    aboutJob.innerText = dataRows[25];


    const headerFive = document.createElement('h3');
    headerFive.classList.add('jobHeadings');
    headerFive.innerHTML = "<h3 class='descriptionHeaders'>Culture</h3>"

    const cultureDescription = document.createElement('p');
    cultureDescription.classList.add('secondDescription')
    cultureDescription.innerHTML = "<p class='secondDescription'>Here at AEM Real Estate Group, we like to work hard and have fun as a team! We have ping pong tournaments, team bonding events, food prizes, and regular outside of work team events." + "</p>"


    const headerSix = document.createElement('h3');
    headerSix.classList.add('jobHeadings');
    headerSix.innerHTML = "<h3 class='descriptionHeaders'>Our Core 3 Values</h3>"

    const coreThreeDescription = document.createElement('p');
    coreThreeDescription.classList.add('secondDescription')
    coreThreeDescription.innerHTML = "<p class='secondDescription'>-Vision</p>" + "<p class='secondDescription'>-Attitude</p>" + "<p class='secondDescription'>-Work Ethic</p>";

    const headerSeven = document.createElement('h3');
    headerSeven.classList.add('jobHeadings');
    headerSeven.innerHTML = "<h3 class='descriptionHeaders'>An Ideal Candidate</h3>"

    const idealCandidateDescription = document.createElement('p');
    idealCandidateDescription.classList.add('secondDescription');
    idealCandidateDescription.innerHTML = "<p class='secondDescription'>-" + dataRows[26] + "</p>" + "<p class='secondDescription'>-" + dataRows[27] + "</p>" + "<p class='secondDescription'>-" + dataRows[28] + "</p>" + "<p class='secondDescription'>-" + dataRows[29] + "</p>" + "<p class='secondDescription'>-" + dataRows[30] + "</p>" + "<p class='secondDescription'>-" + dataRows[31] + "</p>";

    const headerEight = document.createElement('h3');
    headerEight.classList.add('jobHeadings');
    headerEight.innerHTML = "<h3 class='descriptionHeaders'>Job Duties</h3>";

    const jobDutyDescription = document.createElement('p');
    jobDutyDescription.classList.add('secondDescription');
    jobDutyDescription.innerHTML = "<p class='secondDescription'>-" + dataRows[38] + "</p>" + "<p class='secondDescription'>-" + dataRows[39] + "</p>" + "<p class='secondDescription'>-" + dataRows[40] + "</p>" + "<p class='secondDescription'>-" + dataRows[41] + "</p>" + "<p class='secondDescription'>-" + dataRows[42];

    const locationDescription = document.createElement('p');
    locationDescription.classList.add('secondDescription');
    locationDescription.innerHTML = "<h5 style='font-size:20px; margin-top:10px; margin-bottom:5px;'>Location:</h5>" + "<p class='secondDescription'>-" + dataRows[51] + "</p>";

    const scheduleDescription = document.createElement('p');
    scheduleDescription.classList.add('secondDescription');
    scheduleDescription.innerHTML = "<h5 style='font-size:20px; margin-top:0px; margin-bottom:5px;'>Schedule:</h5>" + "<p class='secondDescription'>-" + dataRows[52] + "</p>";

    const payDescription = document.createElement('p');
    payDescription.classList.add('secondDescription');
    payDescription.innerHTML = "<h5 style='font-size:20px; margin-top:0px; margin-bottom:5px;'>Pay:</h5>" + "<p class='secondDescription'>-" + dataRows[53] + "</p>" + '<br>';


console.log(dataRows)

jobPosting.appendChild(jobHeading);
jobPosting.appendChild(location);
jobPosting.appendChild(date);

jobDisplayTitle.appendChild(jobPosting);


// Top Right Panel
titleLogoDiv.appendChild(jobTitle);
logoRight.appendChild(logo);
titleLogoDiv.appendChild(logoRight);
titleArea.appendChild(titleLogoDiv);
fillSpace.appendChild(jobLocation)
fillSpace.appendChild(positionTime);
titleArea.appendChild(fillSpace);
titleArea.appendChild(jobDate);



// Bottom Right Panel
descriptionArea.appendChild(topDescription);

descriptionArea.appendChild(headerOne);
benefitsGroup.appendChild(benefitsLine);
descriptionArea.appendChild(benefitsGroup);

descriptionArea.appendChild(headerTwo);
requirementGroup.appendChild(requirementsLine);
descriptionArea.appendChild(requirementGroup);

descriptionArea.appendChild(headerThree);
responsibilitiesGroup.appendChild(responsibilitiesLine);
descriptionArea.appendChild(responsibilitiesGroup);

descriptionArea.appendChild(lowerDescription);

descriptionArea.appendChild(headerFour);
descriptionArea.appendChild(aboutJob);

descriptionArea.appendChild(headerFive);
descriptionArea.appendChild(cultureDescription);

descriptionArea.appendChild(headerSix);
descriptionArea.appendChild(coreThreeDescription);

descriptionArea.appendChild(headerSeven);
descriptionArea.appendChild(idealCandidateDescription);

descriptionArea.appendChild(headerEight);
descriptionArea.appendChild(jobDutyDescription);

descriptionArea.appendChild(locationDescription);

descriptionArea.appendChild(scheduleDescription);

descriptionArea.appendChild(payDescription);


// rightDiv.appendChild(titleArea);
// rightDiv.appendChild(descriptionArea);
jobDisplay.appendChild(titleArea);
jobDisplay.appendChild(descriptionArea);


const displayNone = document.querySelector('li.bulletPoints').value;

displayNone === '' ? displayNone.style = "display:none;" : null;

jobDisplayArea.appendChild(jobDisplay);

innerPanel.appendChild(jobDisplayTitle);
innerPanel.appendChild(jobDisplayArea);
// Event listener to open details








jobPosting.addEventListener('click', function(){
    jobDisplay.style= 'display: flex;';
    const hideElement = jobPosting.containts(this.target);
    if (!hideElement) {
        jobDisplay.style= 'display: none;';
    }
 })




};











})
});


mainPanel.appendChild(jobDisplayArea);

mainPanel.appendChild(innerPanel);

mainPanel.appendChild(innerPanel);




