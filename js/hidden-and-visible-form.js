document.addEventListener("DOMContentLoaded",()=>{
   let openButtonForm = document.getElementById("open-button-form");
   openButtonForm.addEventListener("click",()=>{
        let signalConfigurationPanel = document.getElementById("signal-configuration-panel");
        signalConfigurationPanel.style.display = "block";
   });
});