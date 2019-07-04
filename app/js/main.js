// no param validation check in any form since it's a testing app for workbox and idb
// global: cities

let canVisit = function(spot, startTime, endTime) {
   if(!spot){
      return false;
   }
   let openTime = spot.openTime.split(',');
   if(!openTime) {
      return spot.spendingTime <= endTime-startTime;
   }
   return openTime[0]<=startTime && openTime[1] >= startTime + spot.spendingTime && startTime + spot.spendingTime <= endTime;
}
/**
 * @private
 *
 * side-efftct: remove item from spots and return it
 */
let spliceBiggestFitInSpot = function(spots, startTime, endTime) {
   startTime++;//assume one hours to get any spot without location info
   let biggestFitInIndex = -1;
   let biggestFitInTime = -1;
   for (let i=0; i<spots.length; i++) {
      if(canVisit(spots[i], startTime, endTime)) {
         if(spots[i].spendingTime>biggestFitInTime){
            biggestFitInIndex = i;
            biggestFitInTime = spots[i].spendingTime;
         }
      }
   }
   if(biggestFitInIndex===-1){
      return null;
   }
   let selectedSpot = spots.splice(biggestFitInIndex,1,0)[0];

   return {
      name: selectedSpot.name,
      startTime: startTime,
      endTime: startTime + selectedSpot.spendingTime,
      type: selectedSpot.type,
      details: {
         description: selectedSpot.description,
         imageURL: "/resources/img/" + selectedSpot.img
      }
   };
};
/**
 * @private
 * it will be greate if spots is pre-sorted by time from large to small, but sort here.
 */
let getTravelPlan = function(city, days, isRelax) {
   spots = JSON.parse(JSON.stringify(cities[city]));//easies deep copy, for demo only

   // from large spendingTime to small
   spots = spots.sort(function(a, b) {
       return b.spendingTime - a.spendingTime;
   });
   let startTime;
   let returnTime;
   if(isRelax) {
      startTime = 9;
      returnTime = 18;
   } else {
      startTime = 7;
      returnTime = 21;
   }
   let plan=[];
   // ignore rating, use greedy on sorted spots for demo...
   for(let d=0;d<days;d++){
      plan[d] = [];
      let availStartTime = startTime;//travel 1 hour to get there
      let planItem = spliceBiggestFitInSpot(spots, availStartTime, returnTime);
      while (planItem) {
         if(!planItem){
            break;
         }
         plan[d].push(planItem);
         availStartTime = planItem.endTime;
         planItem = spliceBiggestFitInSpot(spots, availStartTime, returnTime);
      }

   }
   return plan;
};


/**
 * @private
 */
let updateTravelPlanUI = function(travelPlan) {
   //TODO: update UI by new plan
   console.log(travelPlan);
   let container = document.getElementById("container");

/*
   while (container.firstChild) {
       container.removeChild(container.firstChild);
   }

   for(let d=0;d<travelPlan.length;d++){
      let dayPlan = travelPlan[d];

      var node = document.createElement("div");
      for(let i=0;i<dayPlan.length;i++){
         var textnode = document.createTextNode(JSON.stringify(dayPlan[i]));
         node.appendChild(textnode);
      }
      container.appendChild(node);
   }*/
   displayPlan(travelPlan);
};

/**
 * @private
 */
let updateTravelAdvise = function(city, days, isRelax) {
   let travelPlan = getTravelPlan(city, days, isRelax);
   updateTravelPlanUI(travelPlan);
};

let getSelectValue = function(id) {
   let e = document.getElementById(id);
   if (!e) {
      return null;
   }
   return e.options[e.selectedIndex].value;
}
let onSearchClicked = function() {
   const city = getSelectValue("city");
   const days = getSelectValue("days");
   const isRelax = getSelectValue("type") === "relax";
   updateTravelAdvise(city, days, isRelax);
}

let onCityChanged = function() {
   //TODO: real time update for plans from others, or distribution of days for other perples.
};
