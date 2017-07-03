$(document).ready(function() {
  var inputs = document.querySelectorAll(".acc-group input");
  var selected = null;

  inputs.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (e.target === selected) {
        e.target.checked = false;
        selected = null;
      } else {
        selected = e.target;
      };
    });
  });
});
