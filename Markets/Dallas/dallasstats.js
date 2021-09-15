fetch("/JSON_Files/sendgrid_metrics.json")
.then(response => response.json())
.then(data => { 

    let markets = data.stats;
    let campaignOutput = document.getElementById('Title');

    let deliver = data.stats[0].metrics.delivered;
    deliverOutput = document.getElementById('Deliver');

    console.log(markets);

    

    // markets.forEach(function(name){
    //   if(name == "dallas") {
    //     name = CampaignOutput.textContent;
    //     deliverOutput.textContent = deliver;
    //   } else if(market =="Atlanta") {
    //     CampaignOutput.textContent = market;
  
    //     console.log(i);
    //   }

    // }); 

    markets.forEach(function(market) {
      if(data.stats.name == "dallas"); 
      campaignOutput.textContent = "Dallas";
      document.querySelector('a:nth-child(4)'); 
   
    
    
      

    });
  
  //   for(let i = 0; i < markets.length; i++) {
  //   if(markets == "dallas") {
  //     markets = CampaignOutput.textContent;
  //     deliverOutput.textContent = deliver;
  //   } else if(markets =="Atlanta") {
  //     CampaignOutput.textContent = market;

  //     console.log(i);
  //   }
  // }

    // //Campaign Name Output
    // let campaignName = data.stats[0].name;
    // let campaignOutput = document.getElementById('campaign');
    // // campaignOutput.textContent = campaignName;

   

    // dallas----------------------------------------------

       //dallas Name Output
      //  let dallasName = data.stats[4].name;
      //  var dallasCampaignOutput = document.getElementById('Title');
      //  dallasCampaignOutput.textContent = dallasName;

       //dallas Stats---------------------------------------

       //Deliver Stats - BEGIN
      //  let dallasDeliver = data.stats[4].metrics.delivered;
      //  var dallasDeliverOutput = document.getElementById('Deliver');
      //  dallasDeliverOutput.textContent = dallasDeliver;

       let dallasDeliverRequest = data.stats[4].metrics.requests;

       var dallasDeliverPercent = ((dallasDeliver/dallasDeliverRequest) * 100).toFixed(2) +'%';

       var dallasDeliverPercentOutput = document.getElementById('dallasDeliverPercent');
       dallasDeliverPercentOutput.textContent = dallasDeliverPercent;
        //Deliver Stats - END


        //Unique Clicks - BEGIN
        let dallasClicks = data.stats[4].metrics.unique_clicks;
        var dallasClicksOutput = document.getElementById('dallasClicks');
        dallasClicksOutput.textContent = dallasClicks;

        var dallasClicksPercent = ((dallasClicks/dallasDeliverRequest) * 100).toFixed(2) +'%';
   
        var dallasClicksPercentOutput = document.getElementById('dallasClicksPercent');
       dallasClicksPercentOutput.textContent = dallasClicksPercent;

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

        // dallas Open Stats

        let dallasOpen = data.stats[4].metrics.opens;
        var dallasOpenOutput = document.getElementById('dallasOpen');
        dallasOpenOutput.textContent = dallasOpen;

        var dallasOpenPercent = ((dallasOpen/dallasDeliverRequest) * 100).toFixed(2) +'%';
   
        var dallasOpenPercentOutput = document.getElementById('dallasOpenPercent');
       dallasOpenPercentOutput.textContent = dallasOpenPercent;

        // dallas Open Stats END

        // dallas Unique Open Stats

                let dallasUniqueOpen = data.stats[4].metrics.unique_opens;
                var dallasUniqueOpenOutput = document.getElementById('dallasUniqueOpen');
                dallasUniqueOpenOutput.textContent = dallasUniqueOpen;
        
                var dallasUniqueOpenPercent = ((dallasUniqueOpen/dallasDeliverRequest) * 100).toFixed(2) +'%';
           
                var dallasUniqueOpenPercentOutput = document.getElementById('dallasUniqueOpenPercent');
               dallasUniqueOpenPercentOutput.textContent = dallasUniqueOpenPercent;
        
        // dallas Unique Open Stats END


       for (var i = 0; i < dallasName.length; i++);

    //Date Output
    let date = data.date
    var dateOutput = document.getElementById('date');
    dateOutput.textContent = date;

    for (var i = 0; i < dateOutput.length; i++);

    
    let campaigns = data
   
    console.log(dallasUniqueOpenPercent);

}});




