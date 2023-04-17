function parseArray(arr) {
    // Sort the input array
    var sortedArray = arr.sort(function(a, b) {
        return a - b;
    });

    // Output the sorted array to the HTML container
    var outputElement = document.getElementById('sortedArrayOutput');
    outputElement.innerHTML = sortedArray.join(', ');
}

// Sample input array
var inputArray = [5, 1, 8, 3, 2];

// Call the function with the input array
parseArray(inputArray);
