$(document).ready(function() {

  var inputs = document.querySelectorAll(".acc-group input");
  inputs[0].addEventListener("change", (e) => {
    var clicked = e.target;

    if (clicked.checked) {
      clicked.checked = false;
      console.log("Uncheck");
    } else {
      console.log("Check");
    }
  });

});
