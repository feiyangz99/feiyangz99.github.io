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
function processArray(arr) {
    console.log(arr);
}
var sampleArray = [1, 2, 3, 4, 5];
processArray(sampleArray);

function wikiAPI(){
    var searchTerm=document.getElementById('searchTerm').value;
    var connect=new XMLHttpRequest();
    var url="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch="+searchTerm;
    connect.open('GET',url);
    connect.onload=function(){
        var wikiObject=JSON.parse(this.response);
        var pages=wikiObject.query.pages;
        for (var i in pages){
            var newDiv=document.createElement("div");
            newDiv.setAttribute('class','row h4');
            document.getElementById("wiki").appendChild(newDiv);
            //newDiv.innerText=pages[i].title;
            var newLink = document.createElement("a");
            newLink.setAttribute("href", "https://en.wikipedia.org/?curid=" + pages[i].pageid);
            newLink.setAttribute("target", "_blank");
            newLink.innerText = pages[i].title;
            newDiv.appendChild(newLink);
        };
    }
    connect.send();
}
