function noSubmitForm() {
    var theInput = document.getElementById('task5-input');
    var theButton = document.getElementById('task5-submit');
    var theOutput = document.getElementById('task5-output');
    const VAT_MULTIPLIER = 1.2;
    var mySubmitFunction = function(funky) {
      funky.preventDefault();
      theOutput.innerHTML = 
        `${theInput.value} + 20% VAT is ${(theInput.value * VAT_MULTIPLIER).toFixed(2)}`
    };
    theButton.addEventListener('click', mySubmitFunction);
  }

noSubmitForm();
