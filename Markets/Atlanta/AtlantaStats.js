fetch("/JSON_Files/sendgrid_metrics.json")
.then(response => response.json())
.then(data => { 



    //Campaign Name Output
    let campaignName = data.stats[0].name;
    var campaignOutput = document.getElementById('campaign');
    // campaignOutput.textContent = campaignName;

   

    // atlanta----------------------------------------------

       //atlanta Name Output
       let atlantaName = data.stats[0].name;
       var atlantaCampaignOutput = document.getElementById('atlantaTitle');
       atlantaCampaignOutput.textContent = atlantaName;

       //atlanta Stats---------------------------------------

       //Deliver Stats - BEGIN
       let atlantaDeliver = data.stats[0].metrics.delivered;
       var atlantaDeliverOutput = document.getElementById('atlantaDeliver');
       atlantaDeliverOutput.textContent = atlantaDeliver;

       let atlantaDeliverRequest = data.stats[0].metrics.requests;

       var atlantaDeliverPercent = ((atlantaDeliver/atlantaDeliverRequest) * 100).toFixed(2) +'%';

       var atlantaDeliverPercentOutput = document.getElementById('atlantaDeliverPercent');
       atlantaDeliverPercentOutput.textContent = atlantaDeliverPercent;
        //Deliver Stats - END


        //Unique Clicks - BEGIN
        let atlantaClicks = data.stats[0].metrics.unique_clicks;
        var atlantaClicksOutput = document.getElementById('atlantaClicks');
        atlantaClicksOutput.textContent = atlantaClicks;

        var atlantaClicksPercent = ((atlantaClicks/atlantaDeliverRequest) * 100).toFixed(2) +'%';
   
        var atlantaClicksPercentOutput = document.getElementById('atlantaClicksPercent');
       atlantaClicksPercentOutput.textContent = atlantaClicksPercent;

       //Modal for Unique Clicks

       const openEls = document.querySelectorAll("[data-open]");
       const isVisible = "is-visible";
        
       for(const el of openEls) {
         el.addEventListener("click", function() {
           const modalId = this.dataset.open;
           document.getElementById(modalId).classList.add(isVisible);
         });

         const closeEls = document.querySelectorAll("[data-close]");
         const isVisible = "is-visible";
          
         for (const el of closeEls) {
           el.addEventListener("click", function() {
             this.parentElement.parentElement.classList.remove(isVisible);
           });
         }

         // Modal for Unique Clicks - END

        // atlanta Open Stats

        let atlantaOpen = data.stats[0].metrics.opens;
        var atlantaOpenOutput = document.getElementById('atlantaOpen');
        atlantaOpenOutput.textContent = atlantaOpen;

        var atlantaOpenPercent = ((atlantaOpen/atlantaDeliverRequest) * 100).toFixed(2) +'%';
   
        var atlantaOpenPercentOutput = document.getElementById('atlantaOpenPercent');
       atlantaOpenPercentOutput.textContent = atlantaOpenPercent;

        // atlanta Open Stats END

        // atlanta Unique Open Stats

                let atlantaUniqueOpen = data.stats[0].metrics.unique_opens;
                var atlantaUniqueOpenOutput = document.getElementById('atlantaUniqueOpen');
                atlantaUniqueOpenOutput.textContent = atlantaUniqueOpen;
        
                var atlantaUniqueOpenPercent = ((atlantaUniqueOpen/atlantaDeliverRequest) * 100).toFixed(2) +'%';
           
                var atlantaUniqueOpenPercentOutput = document.getElementById('atlantaUniqueOpenPercent');
               atlantaUniqueOpenPercentOutput.textContent = atlantaUniqueOpenPercent;
        
        // atlanta Unique Open Stats END


       for (var i = 0; i < atlantaName.length; i++);

    //Date Output
    let date = data.date
    var dateOutput = document.getElementById('date');
    dateOutput.textContent = date;

    for (var i = 0; i < dateOutput.length; i++);

    
    let campaigns = data
   
    console.log(atlantaUniqueOpenPercent);

}})



