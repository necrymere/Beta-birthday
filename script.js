const CORRECT_PASSWORD="password";
function checkPassword(){
    const inputField = document.getElementById("password-input");
    if(!inputField) return;
    const userInput = inputField.value;
    if(userInput.trim().toLocaleLowerCase() === CORRECT_PASSWORD.toLowerCase()){
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content-wrapper").style.display="block";
    } else {
        alert("Wrong password! Hint:Abreviation of the festival+the edition");
        document.getElementById("password-input").value=" ";
        inputField.value="";
        inputField.focus();
    }
}

window.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById("password-input");
    if(inputField){
        inputField.addEventListener("keypress", function(event){
            if(event.key === "Enter"){
                checkPassword();
            }
        });
    }
});

let activeZoomedPolaroid = null;

function zoomPolaroid(element){
    if (activeZoomedPolaroid === element){
        element.classList.remove("zoomed");
        activeZoomedPolaroid = null;
    } else {
        if(activeZoomedPolaroid){
           activeZoomedPolaroid.classList.remove("zoomed");
        }
        element.classList.add("zoomed");
        activeZoomedPolaroid = element;
    }
}
