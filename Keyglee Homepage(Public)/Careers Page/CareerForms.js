//------------------------------------------------------------------------------
//------------------------------Submit Form -----------------------------------
//------------------------------------------------------------------------------

const hrData = document.getElementById("submitHRForm");

if (hrData) {
    hrData.addEventListener("click", hrSubmit)
    
    function hrSubmit(e) {
    e.preventDefault();

const jobTitle = document.getElementById('jobTitle').value;

const jobRequire1 = document.getElementById('jobRequirements1').value;
const jobRequire2 = document.getElementById('jobRequirements2').value;
const jobRequire3 = document.getElementById('jobRequirements3').value;
const jobRequire4 = document.getElementById('jobRequirements4').value;
const jobRequire5 = document.getElementById('jobRequirements5').value;
const jobRequire6 = document.getElementById('jobRequirements6').value;
const jobRequire7 = document.getElementById('jobRequirements7').value;
const jobRequire8 = document.getElementById('jobRequirements8').value;
const jobRequire9 = document.getElementById('jobRequirements9').value;
const jobRequire10 = document.getElementById('jobRequirements10').value;
const jobRequire11 = document.getElementById('jobRequirements11').value;
const jobRequire12 = document.getElementById('jobRequirements12').value;

const jobResponse1 = document.getElementById('jobRespnsibilities1').value;
const jobResponse2 = document.getElementById('jobRespnsibilities2').value;
const jobResponse3 = document.getElementById('jobRespnsibilities3').value;
const jobResponse4 = document.getElementById('jobRespnsibilities4').value;
const jobResponse5 = document.getElementById('jobRespnsibilities5').value;
const jobResponse6 = document.getElementById('jobRespnsibilities6').value;
const jobResponse7 = document.getElementById('jobRespnsibilities7').value;
const jobResponse8 = document.getElementById('jobRespnsibilities8').value;
const jobResponse9 = document.getElementById('jobRespnsibilities9').value;
const jobResponse10 = document.getElementById('jobRespnsibilities10').value;
const jobResponse11 = document.getElementById('jobRespnsibilities11').value;
const jobResponse12 = document.getElementById('jobRespnsibilities12').value;

const aboutJob = document.getElementById('aboutTheJob').value;

const idealCan1 = document.getElementById('idealCandidate1').value;
const idealCan2 = document.getElementById('idealCandidate2').value;
const idealCan3 = document.getElementById('idealCandidate3').value;
const idealCan4 = document.getElementById('idealCandidate4').value;
const idealCan5 = document.getElementById('idealCandidate5').value;
const idealCan6 = document.getElementById('idealCandidate6').value;
const idealCan7 = document.getElementById('idealCandidate7').value;
const idealCan8 = document.getElementById('idealCandidate8').value;
const idealCan9 = document.getElementById('idealCandidate9').value;
const idealCan10 = document.getElementById('idealCandidate10').value;
const idealCan11 = document.getElementById('idealCandidate11').value;
const idealCan12 = document.getElementById('idealCandidate12').value;

const jobDuty1 = document.getElementById('jobDuties1').value;
const jobDuty2 = document.getElementById('jobDuties2').value;
const jobDuty3 = document.getElementById('jobDuties3').value;
const jobDuty4 = document.getElementById('jobDuties4').value;
const jobDuty5 = document.getElementById('jobDuties5').value;
const jobDuty6 = document.getElementById('jobDuties6').value;
const jobDuty7 = document.getElementById('jobDuties7').value;
const jobDuty8 = document.getElementById('jobDuties8').value;
const jobDuty9 = document.getElementById('jobDuties9').value;
const jobDuty10 = document.getElementById('jobDuties10').value;
const jobDuty11 = document.getElementById('jobDuties11').value;
const jobDuty12 = document.getElementById('jobDuties12').value;


// 
const fullTime = document.getElementById('fullTime');
const partTime = document.getElementById('partTime');

if (fullTime.checked) {
    var fullTimeAnswer = document.getElementById('fullTime').value
}
if (partTime.checked) {
    var partTimeAnswer = document.getElementById('partTime').value
}

fullTimeAnswer != undefined ? hrData.jobTime = 'Full Time' :
partTimeAnswer != undefined ? hrData.jobTime = 'Part Time' :
null;

const jobLocation = document.getElementById('location').value;

const jobSchedule = document.getElementById('jobSchedule').value;

const pay = document.getElementById('pay').value;

const todaysDate = document.getElementById('date').value;

var hrID = Math.random().toString(36).substr(2, 5);
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
var uniqueID = hrID + utc;

const hrOutput = [uniqueID, jobTitle, jobRequire1, jobRequire2, jobRequire3, jobRequire4, jobRequire5, jobRequire6, jobRequire7, jobRequire8, jobRequire9, jobRequire10, jobRequire11, jobRequire12, jobResponse1, jobResponse2, jobResponse3, jobResponse4, jobResponse5, jobResponse6, jobResponse7, jobResponse8, jobResponse9, jobResponse10, jobResponse11, jobResponse12, aboutJob, idealCan1, idealCan2, idealCan3, idealCan4, idealCan5, idealCan6, idealCan7, idealCan8, idealCan9, idealCan10, idealCan11, idealCan12, jobDuty1, jobDuty2, jobDuty3, jobDuty4, jobDuty5, jobDuty6, jobDuty7, jobDuty8, jobDuty9, jobDuty10, jobDuty11, jobDuty12, hrData.jobTime, jobLocation, jobSchedule, pay, todaysDate];

    //Save variables in to one local storage file
    localStorage.setItem("JobForm-" + uniqueID, JSON.stringify(hrOutput)); //Saves Form to Local Storage with a Unique ID to be received from other Javascript Files----------------
    
    //Reload page after clicking submit
    window.location.reload();
}}