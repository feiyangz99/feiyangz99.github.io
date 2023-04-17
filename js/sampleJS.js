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
function parseArray(arr) {
    // Sort the input array
    var sortedArray = arr.sort(function(a, b) {
        return a - b;
    });

    // Output the sorted array
    console.log(sortedArray);
}

// Sample input array
var inputArray = [5, 1, 8, 3, 2];

// Call the function with the input array
parseArray(inputArray);



