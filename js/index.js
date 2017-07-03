$(document).ready(() => {
  var inputs = document.querySelectorAll(".acc-group input");

  // Keep track of the selected radio button, initially there isn't one
  var selected = null;

  inputs.forEach((i) => {
    // When an input is clicked
    i.addEventListener("click", (e) => {
      // Is this a new selection
      if (e.target !== selected) {
        // yes, keep track of this selection for subsequent clicks
        selected = e.target;
      } else {
        // no, the user clicked the same thing twice, deselect instead
        e.target.checked = false;
        // track that we don't have anything selected anymore
        selected = null;
      };
    });
  });
});
