function wikiAPI() {
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;
    connect.open('GET', url);
    connect.onload = function () {
        var wikiObject = JSON.parse(this.response);
        var pages = wikiObject.query.pages;
        document.getElementById("wiki").innerHTML = ""; // Clear previous search results
        for (var i in pages) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4');
            document.getElementById("wiki").appendChild(newDiv);
            //newDiv.innerText=pages[i].title;
            var newLink = document.createElement("a");
            newLink.setAttribute("href", "https://en.wikipedia.org/?curid=" + pages[i].pageid);
            newLink.setAttribute("target", "_blank");
            newLink.innerText = pages[i].title;
            newDiv.appendChild(newLink);
        }
    }
    connect.send();
}
