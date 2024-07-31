document.addEventListener("DOMContentLoaded", function() {
    // Get the div elements by their class name
    var myDivs = document.getElementsByClassName("product");

    // Iterate through the collection and add a click event listener to each element
    for (var i = 0; i < myDivs.length; i++) {
        myDivs[i].addEventListener("click", function() {
            // Specify the URL of the HTML file to open
            var url = "product.html";

            // Open the HTML file in a new window or tab
            window.open(url, '_blank');
        });
    }
});
