document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var link of links) {
      // Check if the link is not part of Bootstrap and has a hash (#) in href
      if (!link.classList.contains('dropdown-item')) {
        link.addEventListener("click", smoothScroll);
      }
    }
  
    window.addEventListener("scroll", function() {
      var sections = document.querySelectorAll('.section');
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        var blurValue = calculateBlur(scrollPos, sectionTop, sectionHeight);
        section.querySelector('.content').style.filter = "blur(" + blurValue + "px)";
      });
    });
  
    // Special handling for the "Home" link
    var homeLink = document.querySelector('a[href="#"]');
    if (homeLink) {
      homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    if (!targetElement) return;
  
    var start = window.pageYOffset;
    var distance = targetElement.offsetTop - start;
    var startTime = null;
    var duration = 800;
  
    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var ease = easeInOut(timeElapsed, start, distance, duration);
      window.scrollTo(0, ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
  
  function calculateBlur(scrollPos, sectionTop, sectionHeight) {
    // Adjust these values to control the amount of blur
    var maxBlur = 5; // Maximum blur value
    var blurRange = 300; // Range of scroll where blur reaches maximum
    var minBlur = 0; // Minimum blur value
  
    var distanceFromTop = Math.abs(scrollPos - sectionTop);
    var scrollPercentage = Math.min(distanceFromTop / blurRange, 4);
    var blurValue = scrollPercentage * maxBlur;
    return Math.min(blurValue, maxBlur);
  }
  