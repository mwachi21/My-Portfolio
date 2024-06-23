document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay of 3.5 seconds
    setTimeout(function() {
      var preloader = document.querySelector(".preloader");
      var content = document.querySelector(".content");
  
      // Fade out the preloader naturally
      preloader.style.opacity = "0";
      setTimeout(function() {
        // Hide the preloader and show the content
        preloader.style.display = "none";
        content.style.display = "block";
      }, 800); // Wait for fade out animation to finish (0.8 seconds)
    }, 500); // .5 seconds
  });
  