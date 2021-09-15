fetch("/JSON_Files/sendgrid_metrics.json")
.then(response => response.json())
.then(data => { 



    //Campaign Name Output
    let campaignName = data.stats[0].name;
    var campaignOutput = document.getElementById('campaign');
    // campaignOutput.textContent = campaignName;

   

    // Tucson----------------------------------------------

       //Tucson Name Output
       let tucsonName = data.stats[17].name;
       var tucsonCampaignOutput = document.getElementById('tucsonTitle');
       tucsonCampaignOutput.textContent = tucsonName;

       //Tucson Stats---------------------------------------

       //Deliver Stats - BEGIN
       let tucsonDeliver = data.stats[17].metrics.delivered;
       var tucsonDeliverOutput = document.getElementById('tucsonDeliver');
       tucsonDeliverOutput.textContent = tucsonDeliver;

       let tucsonDeliverRequest = data.stats[17].metrics.requests;

       var tucsonDeliverPercent = ((tucsonDeliver/tucsonDeliverRequest) * 100).toFixed(2) +'%';

       var tucsonDeliverPercentOutput = document.getElementById('tucsonDeliverPercent');
       tucsonDeliverPercentOutput.textContent = tucsonDeliverPercent;
        //Deliver Stats - END


        //Unique Clicks - BEGIN
        let tucsonClicks = data.stats[17].metrics.unique_clicks;
        var tucsonClicksOutput = document.getElementById('tucsonClicks');
        tucsonClicksOutput.textContent = tucsonClicks;

        var tucsonClicksPercent = ((tucsonClicks/tucsonDeliverRequest) * 100).toFixed(2) +'%';
   
        var tucsonClicksPercentOutput = document.getElementById('tucsonClicksPercent');
       tucsonClicksPercentOutput.textContent = tucsonClicksPercent;

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

        // Tucson Open Stats

        let tucsonOpen = data.stats[17].metrics.opens;
        var tucsonOpenOutput = document.getElementById('tucsonOpen');
        tucsonOpenOutput.textContent = tucsonOpen;

        var tucsonOpenPercent = ((tucsonOpen/tucsonDeliverRequest) * 100).toFixed(2) +'%';
   
        var tucsonOpenPercentOutput = document.getElementById('tucsonOpenPercent');
       tucsonOpenPercentOutput.textContent = tucsonOpenPercent;

        // Tucson Open Stats END

        // Tucson Unique Open Stats

                let tucsonUniqueOpen = data.stats[17].metrics.unique_opens;
                var tucsonUniqueOpenOutput = document.getElementById('tucsonUniqueOpen');
                tucsonUniqueOpenOutput.textContent = tucsonUniqueOpen;
        
                var tucsonUniqueOpenPercent = ((tucsonUniqueOpen/tucsonDeliverRequest) * 100).toFixed(2) +'%';
           
                var tucsonUniqueOpenPercentOutput = document.getElementById('tucsonUniqueOpenPercent');
               tucsonUniqueOpenPercentOutput.textContent = tucsonUniqueOpenPercent;
        
        // Tucson Unique Open Stats END


       for (var i = 0; i < tucsonName.length; i++);

    //Date Output
    let date = data.date
    var dateOutput = document.getElementById('date');
    dateOutput.textContent = date;

    for (var i = 0; i < dateOutput.length; i++);

    
    let campaigns = data
   
    console.log(tucsonUniqueOpenPercent);

}})



