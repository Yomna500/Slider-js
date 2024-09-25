// the up button from html
const mybutton = document.getElementById("up");
//on scroll widow function
window.onscroll = function () {
  //function in act
  scrollFunction();
};

function scrollFunction() {
  //on scroll 30px
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    //display the button
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  //to scroll to the top
  document.documentElement.scrollTop = 0;
}
