//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// change image under edu
function changeImage1() {
  document.getElementById('photo').src = "image/ahs.JPG"
}
function changeImage2() {
  document.getElementById('photo').src = "image/vjc.JPG"
}
function changeImage3() {
  document.getElementById('photo').src = "image/smu.JPG"
}
