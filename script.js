const darkToggle = document.querySelector('#darkMode')

function myFunction() {
  alert(darkToggle.value)
  console.log("blub")
};

darkToggle.addEventListener('change', myFunction)
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }

  // https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
  // https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/#:~:text=Checking%20if%20a%20checkbox%20is%20checked&text=First%2C%20select%20the%20checkbox%20using,%3B%20otherwise%2C%20it%20is%20not.
  // https://sebhastian.com/css-invert-color/#:~:text=CSS%20allows%20you%20to%20invert,pass%20to%20the%20filter%20property.&text=Because%20the%20default%20color%20of,%3A%20invert(100%25)%20syntax.
  // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode
  // https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
  // https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class
  