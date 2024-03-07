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

 const tracker = document.getElementById('tracker');

 document.addEventListener('mousemove', (event) => {
   // Calculate the translation values for smooth movement
   const translateX = event.clientX - tracker.offsetWidth / 2;
   const translateY = event.clientY - tracker.offsetHeight / 2;

   // Apply a slight rotation for a more natural feel
   const rotation = (event.clientX / window.innerWidth - 0.5) * 30; // Rotate up to 15 degrees in either direction

   // Apply the translation and rotation using transform property
   tracker.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
 });