
// Header animation

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
 })


//  scroll
const boxes = document.querySelectorAll('div');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    console.log(window.innerHeight);
}