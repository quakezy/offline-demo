let planData = [];
let formatTime = function(time) {
   hour = Math.round(time-time % 1);
   mins = Math.round((time - hour) * 60);
   if (mins < 10) {
      return hour + ":0" + mins;
   }
   return hour + ":" + mins;
};

const displayPlan = function(plan) {
   planData = plan;
   let containerDom = document.getElementById("table-container")

   var child = containerDom.lastElementChild;
   while (child) {
      containerDom.removeChild(child);
      child = containerDom.lastElementChild;
   }

   for (let d = 0; d < planData.length; d++) {
      let dayPlan = planData[d];
      let dayDiv = document.createElement('div');
      for (let i = 0; i < dayPlan.length; i++) {
         let item = dayPlan[i];
         let titleDom = document.createElement("h2");
         titleDom.innerHTML = item.name;
         let typeDom = document.createElement('div');
         typeDom.innerHTML = item.type;
         typeDom.style.cssText = "margin-bottom:15px";
         let timeDom = document.createTextNode(formatTime(item.startTime) + " ~ " + formatTime(item.endTime));
         let itemDiv = document.createElement('div');
         itemDiv.appendChild(titleDom);
         itemDiv.appendChild(typeDom);
         itemDiv.appendChild(timeDom);
         itemDiv.style.cssText = "float:left;margin-left:50px";
         itemDiv.addEventListener("click",getOnClickForDialog(item.name,item.details.description,item.details.imageURL));
         dayDiv.appendChild(itemDiv);
      }
      dayDiv.style.cssText = "display: inline-block;width:100%;margin-top:20px";
      let dayNameDiv = document.createElement("h1");
      dayNameDiv.innerHTML = "Day " + (d+1);
      containerDom.appendChild(dayNameDiv);
      containerDom.appendChild(dayDiv);
   }
};
let getOnClickForDialog = function(name, description, imageURL) {
   return () => {
      dialogService.openDialog(name, description, imageURL);
   };
};