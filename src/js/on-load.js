function square() {
    var theSquare = document.getElementById('task3-square');
    var myFunction = function () {
        alert('Hey, look at my red square!');
    };
    theSquare.addEventListener('mouseover', myFunction);
}

function dontGoThere() {
    var theLink = document.getElementById('task4-link');
    var myInterceptFunction = function (event) {
        event.preventDefault();
        alert("Won't you stay? (Just a little bit longer...)");
    };
    theLink.addEventListener('click', myInterceptFunction);
}

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

window.addEventListener('load', function() {
    noSubmitForm();
    dontGoThere();
    square();
});
