let validationForm = document.querySelector(".validationForm");
let inputEl = document.querySelector("#email");
inputEl.focus()

validationForm.addEventListener("click", () => {
let input = inputEl.value
  if (input.includes("@") && input.includes(".")) {
    let positionAt = input.indexOf("@");

      let positionDot = input.indexOf(".");
      let positionBetweenAtAndDOt = input.substring(positionAt +1, positionDot)

      if (positionBetweenAtAndDOt.length > 1) {
          
          let beforeAt = input.substring(0, positionAt)
          let afterDot = input.substring(positionDot + 1, input.length)
          if (beforeAt.length > 2 && afterDot.length > 2) {
          console.log('Email is valid');
          
              
          }
          
          
      } else {
           alert("Email is not valid");
      }
      
  } else {
    alert("Email is not valid");
  }
});
