// REfreshes HTML
function refreshHTML() {
    // Code to update the HTML content goes here
    var element = document.getElementById("your-element-id");
    element.innerHTML = "New content"; // Replace with the updated content
    console.log("HTML refreshed!");
  }
  
  setTimeout(refreshHTML, 500);
  
  

// Header animation

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
 })

