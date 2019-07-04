//dialog.js

let dialogService = (function() {
   var dialog = document.getElementById('dialog-model');
   var closeBtn = document.getElementById('close-dialog');
   var returnValue = document.getElementById('return-value');

   var dialogTitle = document.getElementById('dialog-title');
   var dialogMessage = document.getElementById('dialog-message');
   var dialogImage = document.getElementById('dialog-image');
   var transition;

   closeBtn.addEventListener("click", () => {
      dialog.close("closed by user");
      dialog.classList.remove("dialog-active");
      clearTimeout(transition);
   });

   dialog.addEventListener('close', (exitCode) => {
      console.log("dialog closed");
   });

   dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
         dialog.close("closed by cancel");
         dialog.classList.remove("dialog-active");
         clearTimeout(transition);
      }
   });
   let openDialog = (title, content, url) => {
      dialogTitle.innerHTML = title;
      dialogMessage.innerHTML = content;
      dialogImage.src = url;
      dialog.showModal();
      transition = setTimeout(dialog.classList.add('dialog-active'), 0.5);
   }
   return {
      openDialog: openDialog
   };
})();