function howdy(firstName){
    alert("Howdy"+firstName);
}
function conditional(){
    alert("Welcome to Feiyang Zheng's Studio.");
    var currentHour = new Date().getHours();
    if (currentHour < 10){
        alert("Good morning!");
    }   else if (currentHour < 18){
        alert("Good day!");
    }   else{
        alert("Good evening!");
    }
}
function displayCurrentMinute() {
    var currentMinute = new Date().getMinutes();
    var minuteDisplay = document.getElementById("minuteDisplay");
    minuteDisplay.innerText = "Current minute: " + currentMinute;
}

function hideElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "none";
}
